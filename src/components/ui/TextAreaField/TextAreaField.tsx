import React from 'react';

export interface TextAreaFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  rowsClassName?: string;
  error?: string;
  onClearError?: () => void;
  errorBorderClass: string;
  errorTextClass: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  id,
  name,
  label,
  placeholder,
  rowsClassName = 'h-[134px]',
  error,
  onClearError,
  errorBorderClass,
  errorTextClass,
}) => {
  return (
    <div className='flex flex-col gap-2 text-sm'>
      <label className='font-bold leading-7' htmlFor={id}>
        {label}
      </label>

      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className={[
          'border px-4 py-2 rounded-xl focus:outline-none message-input',
          rowsClassName,
          error ? errorBorderClass : 'message-input-border',
        ].join(' ')}
        onChange={() => onClearError?.()}
      />

      {error && <p className={`mt-1 text-xs ${errorTextClass}`}>{error}</p>}
    </div>
  );
};

export default TextAreaField;
