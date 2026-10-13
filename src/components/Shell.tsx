import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { TOPICS } from "../data/course";
import { useProgress } from "../progress";

export function Shell({ children }: { children: ReactNode }) {
  const { passedCount } = useProgress();
  return (
    <div className="app">
      <header className="topbar">
        <Link to="/" className="brand">
          <span className="brand-mark" aria-hidden="true">
            B
          </span>
          <span>
            <strong>Licencia clase B</strong>
            <small>Estudio por temas</small>
          </span>
        </Link>
        <p className="top-progress">
          <span>
            {passedCount} de {TOPICS.length} temas
          </span>
          <span className="meter" aria-hidden="true">
            <span style={{ width: `${(passedCount / TOPICS.length) * 100}%` }} />
          </span>
        </p>
      </header>
      <main className="main">{children}</main>
    </div>
  );
}

export function LockedNote({ children }: { children: ReactNode }) {
  return (
    <Shell>
      <section className="panel">
        <p className="kicker">Todavía cerrado</p>
        <h1>Este paso sigue bloqueado</h1>
        {children}
        <Link className="button" to="/">
          Volver al recorrido
        </Link>
      </section>
    </Shell>
  );
}
