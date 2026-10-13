import { Link } from "react-router-dom";
import { FINAL_MAX, FINAL_PASS, FINAL_SIZE, TOPIC_PASS, TOPICS } from "../data/course";
import { Shell } from "../components/Shell";
import { useProgress } from "../progress";

export function Home() {
  const { progress, passedCount, isTopicOpen, isFinalOpen, reset } = useProgress();
  const nextIndex = TOPICS.findIndex((topic, index) => isTopicOpen(index) && !progress.topics[topic.id]?.passed);
  const continueTopic = nextIndex >= 0 ? TOPICS[nextIndex] : null;

  return (
    <Shell>
      <section className="hero">
        <p className="kicker">Libro CONASET, julio 2024</p>
        <h1>Aprende un tema y apruébalo antes de seguir.</h1>
        <p className="lede">
          Cada tema va idea por idea. Al final de cada idea hay un caso. Si te equivocas, no pasas a la
          siguiente. Cuando terminas las ideas, se abre un test de 8 preguntas. Tienes que acertar {TOPIC_PASS}.
          Cuando apruebas los {TOPICS.length} temas, se abre el examen final: {FINAL_SIZE} preguntas. Apruebas
          con {FINAL_PASS} de {FINAL_MAX} puntos.
        </p>
        {continueTopic ? (
          <Link className="button" to={`/tema/${continueTopic.id}`}>
            {passedCount === 0 ? "Empezar por el primer tema" : `Continuar: ${continueTopic.title}`}
          </Link>
        ) : (
          <Link className="button" to="/examen">
            Rendir el examen final
          </Link>
        )}
      </section>

      <ol className="path">
        {TOPICS.map((topic, index) => {
          const record = progress.topics[topic.id];
          const open = isTopicOpen(index);
          const current = continueTopic?.id === topic.id;
          const body = (
            <>
              <span className="path-index">{index + 1}</span>
              <span className="path-copy">
                <strong>{topic.title}</strong>
                <small>Páginas {topic.pages}</small>
              </span>
              <span className={record?.passed ? "status is-done" : "status"}>
                {record?.passed ? `${record.best}/${record.total}` : open ? "Pendiente" : "Bloqueado"}
              </span>
            </>
          );
          if (!open) {
            return (
              <li key={topic.id} className="path-item is-locked">
                <div className="path-row">{body}</div>
              </li>
            );
          }
          return (
            <li key={topic.id} className={current ? "path-item is-current" : "path-item"}>
              <Link className="path-row" to={`/tema/${topic.id}`}>
                {body}
              </Link>
            </li>
          );
        })}
      </ol>

      <section className={isFinalOpen ? "final-card is-open" : "final-card"}>
        <div>
          <p className="kicker">Después de los temas</p>
          <h2>Examen final</h2>
          <p>
            {FINAL_SIZE} preguntas de todos los temas. Tres valen el doble: una de alcohol, una de velocidad
            y una de la silla de niño. En el examen real, CONASET no dice cuáles son esas tres. Aquí apruebas
            con {FINAL_PASS} de {FINAL_MAX} puntos.
          </p>
        </div>
        {isFinalOpen ? (
          <Link className="button" to="/examen">
            {progress.final?.passed ? `Repetir · mejor ${progress.final.best}/${progress.final.max}` : "Empezar examen"}
          </Link>
        ) : (
          <p className="status">Se abre al aprobar los {TOPICS.length} temas</p>
        )}
      </section>

      <aside className="note">
        <p>
          El examen oficial se llama Nexteo. Tiene más de mil preguntas. CONASET no las publica. Cada
          prueba es distinta. Estas preguntas salen del libro oficial. Sirven para practicar. Aprobar aquí
          no reemplaza el examen de la municipalidad.
        </p>
        <button
          type="button"
          className="text-button"
          onClick={() => {
            if (window.confirm("¿Borrar el avance de todos los temas?")) reset();
          }}
        >
          Borrar mi avance
        </button>
      </aside>
    </Shell>
  );
}
