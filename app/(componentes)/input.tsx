interface Props {
  label: string;
  placeholder: string;
  type?: string;
  id?: string;
}

export default function InputField({ label, placeholder, type = "text", id }: Props) {
  return (
    <div className="w-full mb-4">
      <label 
        className="block text-sm mb-1 font-bold uppercase tracking-widest" 
        htmlFor={id}
        style={{ color: 'rgba(93,64,55,1)' }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full h-10 px-3 border rounded-sm focus:outline-none"
        style={{ 
            borderColor: 'rgba(215,204,200,1)',
            color: 'rgba(62,39,35,1)',
            backgroundColor: 'rgba(255,255,255,1)'
        }}
      />
    </div>
  );
}