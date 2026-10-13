import type { SignalKind } from "../data/lessons";

const red = "var(--red)";
const ink = "var(--ink)";
const paper = "var(--card)";
const yellow = "#e4b423";
const road = "#d9d3c7";

export function SignalMark({ kind }: { kind: SignalKind }) {
  return (
    <figure className="signal">
      <svg viewBox="0 0 120 120" role="img" aria-label={label(kind)}>
        {draw(kind)}
      </svg>
    </figure>
  );
}

function label(kind: SignalKind) {
  if (kind === "pare") return "Señal de ocho lados";
  if (kind === "ceda") return "Señal triangular invertida";
  if (kind === "reglamentaria") return "Señal circular con orla";
  if (kind === "advertencia") return "Señal en forma de rombo";
  if (kind === "luz-amarilla") return "Semáforo con la luz del medio encendida";
  if (kind === "luz-roja-intermitente") return "Semáforo con la luz superior encendida";
  if (kind === "linea-continua") return "Línea continua entre dos pistas";
  if (kind === "carabinero-frente") return "Persona de frente, con los dos ojos visibles";
  return "Equis sobre una pista";
}

function draw(kind: SignalKind) {
  if (kind === "pare") {
    return (
      <>
        <polygon points="36,8 84,8 112,36 112,84 84,112 36,112 8,84 8,36" fill={red} />
        <text x="60" y="68" textAnchor="middle" fontSize="18" fontFamily="Georgia, serif" fill={paper}>
          PARE
        </text>
      </>
    );
  }
  if (kind === "ceda") {
    return (
      <>
        <polygon points="60,108 8,16 112,16" fill={paper} stroke={red} strokeWidth="8" />
        <text x="60" y="58" textAnchor="middle" fontSize="11" fontFamily="Georgia, serif" fill={ink}>
          CEDA
        </text>
      </>
    );
  }
  if (kind === "reglamentaria") {
    return (
      <>
        <circle cx="60" cy="60" r="46" fill={paper} stroke={red} strokeWidth="8" />
        <text x="60" y="68" textAnchor="middle" fontSize="28" fontFamily="Georgia, serif" fill={ink}>
          50
        </text>
      </>
    );
  }
  if (kind === "advertencia") {
    return (
      <>
        <polygon points="60,8 112,60 60,112 8,60" fill={yellow} />
        <path d="M38 78 C38 48 82 48 82 72" fill="none" stroke={ink} strokeWidth="6" strokeLinecap="round" />
      </>
    );
  }
  if (kind === "luz-amarilla" || kind === "luz-roja-intermitente") {
    const top = kind === "luz-roja-intermitente";
    return (
      <>
        <rect x="44" y="8" width="32" height="104" rx="8" fill={ink} />
        <circle cx="60" cy="30" r="10" fill={top ? red : "#5c564c"} />
        <circle cx="60" cy="60" r="10" fill={top ? "#5c564c" : yellow} />
        <circle cx="60" cy="90" r="10" fill="#5c564c" />
      </>
    );
  }
  if (kind === "linea-continua") {
    return (
      <>
        <rect x="8" y="28" width="104" height="64" rx="6" fill={road} />
        <line x1="60" y1="34" x2="60" y2="86" stroke={paper} strokeWidth="6" />
      </>
    );
  }
  if (kind === "carabinero-frente") {
    return (
      <>
        <circle cx="60" cy="34" r="16" fill={ink} />
        <circle cx="54" cy="32" r="2.2" fill={paper} />
        <circle cx="66" cy="32" r="2.2" fill={paper} />
        <rect x="40" y="54" width="40" height="52" rx="8" fill={ink} />
      </>
    );
  }
  return (
    <>
      <rect x="36" y="8" width="48" height="104" rx="6" fill={road} />
      <path d="M46 24 L74 96 M74 24 L46 96" fill="none" stroke={red} strokeWidth="8" strokeLinecap="round" />
    </>
  );
}
