import React from 'react';

export interface IndustryTabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const IndustryTab: React.FC<IndustryTabProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      className="text-left"
    >
      <div className="flex gap-[6px] items-center cursor-pointer md:gap-2">
        <div
          className={[
            'w-1 h-6 rounded-full md:h-8 transition-colors',
            isActive ? 'bg-[#FF623E]' : 'industry-inactive-bar',
          ].join(' ')}
        />
        <p
          className={[
            'font-bold leading-[30px] md:text-[20px] md:leading-[34px] transition-colors',
            isActive ? 'industry-active-text' : 'industry-inactive-text',
          ].join(' ')}
        >
          {label}
        </p>
      </div>
    </button>
  );
};

export default IndustryTab;