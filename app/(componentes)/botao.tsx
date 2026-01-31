interface props {
  label: string;
  variant?: "primary" | "secondary";
}

export default function Botao({ label, variant = "primary" }: props) {
  const allClasses = `
    w-full
    h-10
    rounded-md
    flex justify-center items-center
    text-white
    font-medium
    ${variant == "primary" ? "bg-purple-600 hover:bg-purple-700" : "bg-purple-500 hover:bg-purple-600"}
  `;

  return (
    <button className={allClasses}>
      {label}
    </button>
  );
}