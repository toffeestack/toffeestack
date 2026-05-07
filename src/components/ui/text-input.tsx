"use client";

type TextInputProps = {
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
};

export function TextInput({
  label,
  type = "text",
  required = false,
  textarea = false,
  rows = 5,
}: TextInputProps) {
  const baseClasses =
    "peer w-full rounded-[2rem] border border-[#E8EDF7] bg-white px-5 text-sm leading-7 text-[#050816] outline-none transition-all duration-200 placeholder:text-transparent hover:border-[var(--secondary)] focus:border-[var(--secondary)]";

  return (
    <div className="group relative mb-8">
      <label className="absolute left-5 top-0 z-10 -translate-y-1/2 bg-[#F8FAFD] px-3 text-sm font-bold text-[#5E6475] transition-colors duration-200 peer-focus-within:text-[var(--secondary)] group-focus-within:text-[var(--secondary)]">
        {label}
      </label>

      {textarea ? (
        <textarea
          rows={rows}
          required={required}
          placeholder={label}
          className={`${baseClasses} resize-none py-5`}
        />
      ) : (
        <input
          type={type}
          required={required}
          placeholder={label}
          className={`${baseClasses} h-16`}
        />
      )}
    </div>
  );
}