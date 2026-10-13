import { useMemo, useState } from "react";
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import { TOPIC_PASS, TOPICS } from "../data/course";
import { lessonReady, lessonSteps } from "../data/lessons";
import { LockedNote, Shell } from "../components/Shell";
import { SignalMark } from "../components/SignalMark";
import { useProgress } from "../progress";

export function TopicStudy() {
  const { topicId } = useParams();
  const [params] = useSearchParams();
  const { progress, isTopicOpen, markLesson } = useProgress();
  const index = TOPICS.findIndex((topic) => topic.id === topicId);
  const topic = TOPICS[index];
  if (!topic) return <Navigate to="/" replace />;
  if (!isTopicOpen(index)) {
    return (
      <LockedNote>
        <p>Primero hay que aprobar los temas anteriores. Cada idea termina en un caso, y el test pide {TOPIC_PASS} respuestas correctas.</p>
      </LockedNote>
    );
  }

  return <Lesson key={`${topic.id}:${params.get("idea") ?? ""}`} topicIndex={index} focusKey={params.get("idea")} markLesson={markLesson} done={progress.lessons[topic.id] ?? []} passed={Boolean(progress.topics[topic.id]?.passed)} />;
}

function Lesson({
  topicIndex,
  focusKey,
  done,
  passed,
  markLesson,
}: {
  topicIndex: number;
  focusKey: string | null;
  done: string[];
  passed: boolean;
  markLesson: (topicId: string, stepKey: string) => void;
}) {
  const topic = TOPICS[topicIndex];
  const steps = useMemo(() => (topic ? lessonSteps(topic) : []), [topic]);
  const ready = topic ? lessonReady(topic, done) : false;
  const [index, setIndex] = useState(() => {
    if (focusKey) {
      const found = steps.findIndex((step) => step.key === focusKey);
      if (found >= 0) return found;
    }
    const pending = steps.findIndex((step) => !done.includes(step.key));
    return pending === -1 ? 0 : pending;
  });
  const [picked, setPicked] = useState<string | null>(null);
  const [solvedNow, setSolvedNow] = useState<string[]>([]);

  const step = steps[index];
  if (!topic || !step) return null;
  const forced = focusKey === step.key;
  const already = done.includes(step.key) && !forced;
  const solved = already || solvedNow.includes(step.key) || picked === step.check.answer;
  const firstLocked = steps.findIndex((item) => !done.includes(item.key) && !solvedNow.includes(item.key));

  function choose(choice: string) {
    setPicked(choice);
    if (choice === step.check.answer) {
      markLesson(topic.id, step.key);
      setSolvedNow((current) => (current.includes(step.key) ? current : [...current, step.key]));
    }
  }

  function openStep(next: number) {
    setIndex(next);
    setPicked(null);
  }

  const nextTopic = TOPICS[topicIndex + 1];

  return (
    <Shell>
      <article className="study">
        <p className="kicker">
          Tema {topicIndex + 1} de {TOPICS.length} · idea {index + 1} de {steps.length}
        </p>
        <h1>{topic.title}</h1>
        {index === 0 ? <p className="lede">{topic.lead}</p> : null}
        <div className="idea-nav" aria-label="Ideas del tema">
          {steps.map((item, position) => {
            const reachable = passed || ready || position <= (firstLocked === -1 ? steps.length - 1 : firstLocked);
            return (
              <button
                key={item.key}
                type="button"
                className={position === index ? "idea-dot is-current" : done.includes(item.key) ? "idea-dot is-done" : "idea-dot"}
                disabled={!reachable}
                onClick={() => openStep(position)}
              >
                {position + 1}
              </button>
            );
          })}
        </div>
        <h2>{step.heading}</h2>
        <p className="lesson-text">{step.text}</p>
        <div className="case">
          <p className="kicker">Caso</p>
          {step.check.signal ? <SignalMark kind={step.check.signal} /> : null}
          <h3>{step.check.prompt}</h3>
          <div className="choices" role="group" aria-label="Alternativas del caso">
            {step.check.choices.map((choice, choiceIndex) => {
              const selected = picked === choice;
              const right = solved && choice === step.check.answer;
              const wrong = selected && choice !== step.check.answer;
              return (
                <button
                  key={choice}
                  type="button"
                  className={right ? "choice is-right" : wrong ? "choice is-wrong" : selected ? "choice is-selected" : "choice"}
                  aria-pressed={selected}
                  onClick={() => choose(choice)}
                >
                  <span className="letter">{String.fromCharCode(65 + choiceIndex)}</span>
                  <span>{choice}</span>
                </button>
              );
            })}
          </div>
          {picked ? <p className={solved ? "feedback is-right" : "feedback is-wrong"}>{step.check.explain}</p> : null}
          {!solved && picked ? <p className="hint">Esa no es. Lee por qué y elige de nuevo. Esta idea sigue abierta.</p> : null}
        </div>
        <div className="study-actions">
          {index > 0 ? (
            <button type="button" className="button secondary" onClick={() => openStep(index - 1)}>
              Idea anterior
            </button>
          ) : null}
          {solved && index < steps.length - 1 ? (
            <button type="button" className="button" onClick={() => openStep(index + 1)}>
              Siguiente idea
            </button>
          ) : null}
          {ready || passed ? (
            <Link className="button" to={`/tema/${topic.id}/test`}>
              {passed ? "Repetir el test" : "Hacer el test de este tema"}
            </Link>
          ) : (
            <p className="hint">El test se abre cuando termines las {steps.length} ideas. Tienes que acertar {TOPIC_PASS} de 8.</p>
          )}
          {passed && nextTopic ? (
            <Link className="button secondary" to={`/tema/${nextTopic.id}`}>
              Seguir con {nextTopic.title}
            </Link>
          ) : null}
        </div>
      </article>
    </Shell>
  );
}
