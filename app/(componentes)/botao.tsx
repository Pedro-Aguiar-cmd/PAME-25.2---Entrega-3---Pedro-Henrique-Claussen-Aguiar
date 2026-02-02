interface props {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void; 
}

export default function Botao({ label, variant = "primary", onClick }: props) {
  const estilo = {
    backgroundColor: variant === "primary" ? 'rgba(255,236,179,1)' : 'rgba(141,110,99,1)',
    color: variant === "primary" ? 'rgba(62,39,35,1)' : 'rgba(255,255,255,1)',
    cursor: 'pointer'
  };

  return (
    <button 
      onClick={onClick}
      className="w-full h-10 rounded-sm flex justify-center items-center font-bold uppercase tracking-widest text-xs transition-opacity hover:opacity-90"
      style={estilo}
    >
      {label}
    </button>
  );
}