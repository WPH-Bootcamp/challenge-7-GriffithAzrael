import React from 'react';

export interface ServicesChecklistProps {
  options: string[];
  error?: string;
  onClearError?: () => void;
  errorTextClass: string;
  checkIconSrc?: string;
}

const ServicesChecklist: React.FC<ServicesChecklistProps> = ({
  options,
  error,
  onClearError,
  errorTextClass,
  checkIconSrc = 'check.svg',
}) => {
  return (
    <div className='grid gap-[14px]'>
      <label className='leading-7 text-sm font-bold' htmlFor='Services'>
        Services
      </label>

      <div className='grid gap-[14px] md:gap-x-[37px] md:gap-y-4 md:grid-cols-2 md:justify-start w-fit rounded-xl'>
        {options.map((label) => (
          <div
            key={label}
            className='checklist relative flex items-center gap-3'
          >
            <input
              name='services'
              type='checkbox'
              className='appearance-none peer w-5 h-5 border rounded-sm bg-transparent message-input-border checked:bg-[#FF623E] checked:border-[#FF623E]'
              onChange={() => onClearError?.()}
            />
            <img
              className='absolute w-4 h-4 hidden translate-x-[2px] peer-checked:block pointer-events-none'
              src={checkIconSrc}
              alt=''
            />
            <span className='leading-7 text-sm'>{label}</span>
          </div>
        ))}
      </div>

      {error && <p className={`mt-1 text-xs ${errorTextClass}`}>{error}</p>}
    </div>
  );
};

export default ServicesChecklist;
