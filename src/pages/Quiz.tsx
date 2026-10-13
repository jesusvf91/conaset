import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { FINAL_PASS, TOPIC_PASS, TOPICS } from "../data/course";
import { lessonReady } from "../data/lessons";
import { LockedNote, Shell } from "../components/Shell";
import { buildFinalExam, buildFocusedQuiz, buildTopicQuiz, scoreAttempt } from "../lib/quiz";
import type { AttemptQuestion } from "../lib/quiz";
import { useProgress } from "../progress";
import type { TopicResult } from "../progress";

type QuizProps = {
  mode: "topic" | "final";
};

function formatElapsed(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function Quiz({ mode }: QuizProps) {
  const { topicId } = useParams();
  const { progress, isTopicOpen, isFinalOpen, recordTopic, recordFinal } = useProgress();
  const index = TOPICS.findIndex((topic) => topic.id === topicId);
  const topic = mode === "topic" ? TOPICS[index] : undefined;

  if (mode === "topic" && !topic) return <Navigate to="/" replace />;
  if (mode === "topic" && topic && !isTopicOpen(index)) {
    return (
      <LockedNote>
        <p>Aprueba el tema anterior para rendir este test.</p>
      </LockedNote>
    );
  }
  if (mode === "topic" && topic && !progress.topics[topic.id]?.passed && !lessonReady(topic, progress.lessons[topic.id] ?? [])) {
    return (
      <LockedNote>
        <p>Primero lee las ideas de este tema. Cada caso tiene que quedar bien antes del test.</p>
      </LockedNote>
    );
  }
  if (mode === "final" && !isFinalOpen) {
    return (
      <LockedNote>
        <p>El examen final se abre cuando los {TOPICS.length} temas están aprobados.</p>
      </LockedNote>
    );
  }

  return <QuizRun key={mode === "topic" ? topic?.id : "final"} mode={mode} topicIndex={index} onTopic={recordTopic} onFinal={recordFinal} />;
}

function QuizRun({
  mode,
  topicIndex,
  onTopic,
  onFinal,
}: {
  mode: "topic" | "final";
  topicIndex: number;
  onTopic: (id: string, result: TopicResult) => void;
  onFinal: (points: number, max: number) => void;
}) {
  const topic = mode === "topic" ? TOPICS[topicIndex] : undefined;
  const [kind, setKind] = useState<"full" | "focused">("full");
  const [questions, setQuestions] = useState<AttemptQuestion[]>(() =>
    topic ? buildTopicQuiz(topic) : buildFinalExam(),
  );
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [cursor, setCursor] = useState(0);
  const [phase, setPhase] = useState<"quiz" | "result">("quiz");
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (phase === "result") return;
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  const current = questions[cursor];
  const result = scoreAttempt(questions, answers);
  const missedIds = questions.filter((question) => answers[question.id] !== question.answer).map((question) => question.id);
  const passed = mode === "final" ? result.points >= FINAL_PASS : kind === "focused" ? missedIds.length === 0 : result.correct >= TOPIC_PASS;
  const pending = questions.filter((question) => !answers[question.id]).length;

  function restart(nextKind: "full" | "focused", nextQuestions: AttemptQuestion[]) {
    setKind(nextKind);
    setQuestions(nextQuestions);
    setAnswers({});
    setCursor(0);
    setPhase("quiz");
    setStartedAt(Date.now());
    setNow(Date.now());
    window.scrollTo({ top: 0 });
  }

  function finish() {
    if (!topic && mode === "topic") return;
    if (mode === "topic" && topic) {
      onTopic(topic.id, {
        correct: result.correct,
        total: result.total,
        passed,
        missedIds,
        full: kind === "full",
      });
    }
    if (mode === "final") onFinal(result.points, result.max);
    setPhase("result");
    window.scrollTo({ top: 0 });
  }

  if (!current) return null;

  const nextTopic = mode === "topic" ? TOPICS[topicIndex + 1] : undefined;

  return (
    <Shell>
      <div className="quiz-head">
        <div>
          <p className="kicker">
            {mode === "final" ? "Examen final" : kind === "focused" ? `Repaso · tema ${topicIndex + 1}` : `Test · tema ${topicIndex + 1}`}
          </p>
          <h1>{mode === "final" ? "Todo el libro, en una sola prueba" : topic?.title}</h1>
        </div>
        <p className="timer" aria-live="polite">
          {phase === "quiz" ? formatElapsed(now - startedAt) : "Cerrado"}
        </p>
      </div>

      {phase === "quiz" ? (
        <div className="quiz-layout">
          <div className="pager" aria-label="Preguntas">
            {questions.map((question, position) => (
              <button
                key={question.id}
                type="button"
                className={position === cursor ? "page is-current" : answers[question.id] ? "page is-filled" : "page"}
                onClick={() => setCursor(position)}
              >
                {position + 1}
              </button>
            ))}
          </div>
          <section className="question-card" aria-labelledby="question-title">
            <p className="question-meta">
              Pregunta {cursor + 1} de {questions.length}
              {mode === "final" ? ` · ${current.topicTitle}` : ""}
            </p>
            <h2 id="question-title">{current.prompt}</h2>
            <div className="choices" role="group" aria-label="Alternativas">
              {current.choices.map((choice, choiceIndex) => {
                const selected = answers[current.id] === choice;
                return (
                  <button
                    key={choice}
                    type="button"
                    className={selected ? "choice is-selected" : "choice"}
                    aria-pressed={selected}
                    onClick={() => setAnswers((previous) => ({ ...previous, [current.id]: choice }))}
                  >
                    <span className="letter">{String.fromCharCode(65 + choiceIndex)}</span>
                    <span>{choice}</span>
                  </button>
                );
              })}
            </div>
            <div className="quiz-nav">
              <button type="button" className="button secondary" disabled={cursor === 0} onClick={() => setCursor((value) => value - 1)}>
                Anterior
              </button>
              {cursor < questions.length - 1 ? (
                <button type="button" className="button secondary" disabled={!answers[current.id]} onClick={() => setCursor((value) => value + 1)}>
                  Siguiente
                </button>
              ) : null}
              <button type="button" className="button" disabled={pending > 0} onClick={finish}>
                {pending > 0 ? `Faltan ${pending}` : "Entregar"}
              </button>
            </div>
          </section>
        </div>
      ) : (
        <section className="result">
          <p className={passed ? "score is-pass" : "score is-fail"}>
            {mode === "final" ? `${result.points} de ${result.max}` : `${result.correct} de ${result.total}`}
          </p>
          <h2>{passed ? "Aprobado" : "Todavía no"}</h2>
          <p className="lede">
            {mode === "final"
              ? passed
                ? "Llegaste a 33 puntos. Puedes repetir el examen. Cada intento trae otras preguntas."
                : `Para aprobar hacen falta ${FINAL_PASS} de ${result.max}. Revisa las que fallaste y vuelve a intentarlo.`
              : passed
                ? "Este tema quedó listo. Ya puedes seguir con el siguiente."
                : kind === "focused"
                  ? "En este repaso tienes que acertar todas. Vuelve a la idea que fallaste y elige de nuevo."
                  : `Tienes que acertar ${TOPIC_PASS}. Abajo puedes volver a la idea de cada error. Después practica solo eso.`}
          </p>
          <div className="study-actions">
            {passed && mode === "topic" && nextTopic ? (
              <Link className="button" to={`/tema/${nextTopic.id}`}>
                Seguir con {nextTopic.title}
              </Link>
            ) : null}
            {passed && mode === "topic" && !nextTopic ? (
              <Link className="button" to="/examen">
                Ir al examen final
              </Link>
            ) : null}
            {passed && mode === "final" ? (
              <Link className="button" to="/">
                Volver al recorrido
              </Link>
            ) : null}
            {mode === "topic" && !passed && missedIds.length > 0 && topic ? (
              <button
                type="button"
                className="button"
                onClick={() => restart("focused", buildFocusedQuiz(topic, missedIds, TOPICS.slice(0, topicIndex)))}
              >
                Practicar lo que fallaste
              </button>
            ) : null}
            <button
              type="button"
              className={passed ? "button secondary" : "button secondary"}
              onClick={() => restart(mode === "final" ? "full" : "full", topic ? buildTopicQuiz(topic) : buildFinalExam())}
            >
              {mode === "final" ? "Otro examen" : "Repetir el test completo"}
            </button>
          </div>
          <ol className="review">
            {questions.map((question, position) => {
              const chosen = answers[question.id];
              const ok = chosen === question.answer;
              return (
                <li key={question.id} className={ok ? "review-item is-ok" : "review-item is-bad"}>
                  <p className="question-meta">
                    {position + 1}. {ok ? "Correcta" : "Incorrecta"}
                    {question.weight > 1 ? " · valía 2 puntos" : ""}
                  </p>
                  <h3>{question.prompt}</h3>
                  {!ok ? <p className="miss">Marcaste: {chosen ?? "sin respuesta"}</p> : null}
                  <p className="hit">Respuesta: {question.answer}</p>
                  <p>{question.explain}</p>
                  {!ok && question.lessonKey ? (
                    <Link className="text-button" to={`/tema/${question.topicId}?idea=${encodeURIComponent(question.lessonKey)}`}>
                      Volver a esta idea
                    </Link>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </section>
      )}
    </Shell>
  );
}
