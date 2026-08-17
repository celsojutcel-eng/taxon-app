import React from "react";

interface TaxonLogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export const TaxonLogo: React.FC<TaxonLogoProps> = ({
  className = "",
  variant = "light",
  size = "md",
  showTagline = true,
}) => {
  const isDark = variant === "dark";

  const sizeClasses = {
    sm: "h-8",
    md: "h-11",
    lg: "h-14",
  };

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Ícone Isométrico Vetorial Fiel ao Logo TAXON */}
      <svg
        viewBox="0 0 120 120"
        className={`${sizeClasses[size]} w-auto aspect-square shrink-0 drop-shadow-sm`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradientes azul/verde da flecha e prisma taxonômico */}
          <linearGradient id="taxonGradGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="taxonGradTeal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
          <linearGradient id="taxonGradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="taxonGradArrow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
          <linearGradient id="taxonGradGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        {/* Seta ascendente geométrica em ângulo */}
        <path
          d="M20 48 L46 32 L46 22 L60 30 L40 60 L20 48 Z"
          fill="#1d4ed8"
          opacity="0.9"
        />
        <path
          d="M48 30 L74 12 L92 30 L80 30 L80 44 L64 44 L64 30 Z"
          fill="url(#taxonGradArrow)"
        />

        {/* Prisma Isométrico / Cubo da Taxonomia */}
        {/* Face Esquerda (Azul escuro) */}
        <path
          d="M32 68 L60 84 L60 114 L32 98 Z"
          fill="url(#taxonGradBlue)"
        />
        {/* Face Direita (Esmeralda / Verde azulado) */}
        <path
          d="M60 84 L88 68 L88 98 L60 114 Z"
          fill="url(#taxonGradGreen)"
        />
        {/* Face Superior / Borda Transparente */}
        <path
          d="M32 68 L60 52 L88 68 L60 84 Z"
          fill="#ffffff"
          stroke="#06b6d4"
          strokeWidth="3"
        />

        {/* Figuras humanas estilizadas conectadas (Professor e Aluno / Parceria Pedagógica) */}
        {/* Figura Esquerda */}
        <circle cx="46" cy="68" r="4.5" fill="#3b82f6" />
        <path
          d="M40 82 C40 76 44 74 48 74 C52 74 54 77 54 82"
          fill="#3b82f6"
        />
        {/* Figura Direita */}
        <circle cx="74" cy="68" r="4.5" fill="#10b981" />
        <path
          d="M66 82 C66 77 68 74 72 74 C76 74 80 76 80 82"
          fill="#10b981"
        />
        {/* Conexão / Aperto de mão central & IA Pedagógica */}
        <path
          d="M48 78 Q60 76 72 78"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Ponto de luz / Ideia de IA no centro superior */}
        <circle cx="60" cy="62" r="3" fill="#38bdf8" />
        <circle cx="60" cy="62" r="6" stroke="#38bdf8" strokeWidth="1.2" opacity="0.6" strokeDasharray="2 2" />
      </svg>

      {/* Tipografia Oficial TAXON e Subtítulo */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center tracking-tight">
          <span
            className={`font-black uppercase tracking-wider ${
              size === "sm" ? "text-xl" : size === "lg" ? "text-3xl" : "text-2xl"
            } ${isDark ? "text-white" : "text-[#0b2756]"}`}
            style={{ fontFamily: "'Montserrat', 'Segoe UI', system-ui, sans-serif", letterSpacing: "0.08em" }}
          >
            TAXON
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[10px] sm:text-[11px] font-medium tracking-normal -mt-0.5 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Planejamento Intencional &amp; IA Pedagógica
          </span>
        )}
      </div>
    </div>
  );
};
