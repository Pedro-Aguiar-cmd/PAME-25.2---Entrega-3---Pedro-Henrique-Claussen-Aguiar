interface Props {
  label: string;
  placeholder: string;
  type?: string;
  id?: string;
}

export default function InputField({ label, placeholder, type = "text", id }: Props) {
  return (
    <div className="w-full">
      <label className="block text-sm text-gray-600 mb-1" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
      />
    </div>
  );
}