interface ServiceCardProps {
  name: string;
  color: string;
  icon: string;
  description?: string;
  large?: boolean;
}

const IconContent = ({ icon, color }: { icon: string; color: string }) => {
  if (icon === "?") {
    return <span className="text-[42px] font-black text-white leading-none">?</span>;
  }
  if (icon === "lines") {
    return (
      <svg viewBox="0 0 44 44" width="36" height="36" fill="none">
        <rect x="6" y="7"  width="32" height="5" rx="1.5" fill="white" />
        <rect x="6" y="16" width="22" height="5" rx="1.5" fill="white" />
        <rect x="6" y="25" width="28" height="5" rx="1.5" fill="white" />
        <rect x="6" y="34" width="18" height="5" rx="1.5" fill="white" />
      </svg>
    );
  }
  if (icon === "pen") {
    return (
      <svg viewBox="0 0 44 44" width="36" height="36">
        <path d="M32 6 Q38 16 28 26 L14 40 L8 34 L22 20 Q32 10 32 6Z" fill="#7B5E3A" stroke="#7B5E3A" strokeWidth="0.5" />
        <path d="M8 34 L3 41 L11 38 Z" fill="#7B5E3A" />
      </svg>
    );
  }
  if (icon === "x") {
    return (
      <svg viewBox="0 0 44 44" width="36" height="36" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round">
        <line x1="11" y1="11" x2="33" y2="33" />
        <line x1="33" y1="11" x2="11" y2="33" />
      </svg>
    );
  }
  if (icon === "Aa") {
    return (
      <svg viewBox="0 0 44 44" width="36" height="36">
        <text x="4" y="28" fontSize="22" fill="white" fontWeight="800" fontFamily="Montserrat, sans-serif">Aa</text>
      </svg>
    );
  }
  if (icon === "book") {
    return (
      <svg viewBox="0 0 44 44" width="36" height="36">
        <rect x="8"  y="6" width="20" height="32" rx="2" fill="white" opacity="0.9" />
        <rect x="16" y="6" width="20" height="32" rx="2" fill="white" opacity="0.6" />
      </svg>
    );
  }
  return null;
};

export default function ServiceCard({ name, color, icon, description, large }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div
        className="rounded-lg flex items-center justify-center transition-transform duration-200 hover:scale-[1.07]"
        style={{
          backgroundColor: color,
          width: large ? "96px" : "78px",
          height: large ? "96px" : "78px",
        }}
      >
        <IconContent icon={icon} color={color} />
      </div>
      <span className="text-sm font-semibold text-[#1A3DAA] tracking-[0.3px] text-center">{name}</span>
      {description && (
        <p className="text-xs text-gray-500 text-center leading-relaxed max-w-[160px]">{description}</p>
      )}
    </div>
  );
}
