import React from 'react';

export interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  error?: string;
  onClearError?: () => void;
  errorBorderClass: string;
  errorTextClass: string;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  label,
  type = 'text',
  placeholder,
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

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={[
          'border px-4 py-2 rounded-xl focus:outline-none message-input',
          error ? errorBorderClass : 'message-input-border',
        ].join(' ')}
        onChange={() => onClearError?.()}
      />

      {error && <p className={`mt-1 text-xs ${errorTextClass}`}>{error}</p>}
    </div>
  );
};

export default FormField;
