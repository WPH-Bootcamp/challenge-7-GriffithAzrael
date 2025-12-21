import React from 'react';

export type ProcessCardAlign = 'start' | 'end';

export interface ProcessCardProps {
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
  align: ProcessCardAlign;
  overlayOnDesktop?: boolean;
}

const ProcessCard: React.FC<ProcessCardProps> = ({
  title,
  description,
  isOpen,
  onToggle,
  overlayOnDesktop = false,
  align,
}) => {
  return (
    <div
      className={[
        'process-details border rounded-2xl',
        'process-card',
        'p-4 md:p-6',
        'w-full max-w-[520px]',
        'relative',
        align === 'start' ? 'mr-auto' : 'ml-auto',
        overlayOnDesktop
          ? isOpen
            ? 'md:absolute md:top-0 md:left-0 md:right-0 md:z-30'
            : 'md:relative md:h-[82px]'
          : '',
      ].join(' ')}
    >
      <div className="grid gap-1 justify-between items-center">
        <p className="font-bold text-base leading-[30px] md:text-[20px] md:leading-[34px]">
          {title}
        </p>

        {isOpen && (
          <p className="process-muted font-medium text-sm leading-7 md:text-base md:leading-[30px]">
            {description}
          </p>
        )}
      </div>

      <button
        type="button"
        className="absolute top-4 right-4 md:top-6 md:right-6"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Collapse step' : 'Expand step'}
      >
        {/* Light theme chevrons */}
        <img
          className="show-when-light"
          src={isOpen ? '/chevron-up-light.svg' : '/chevron-down-light.svg'}
          alt=""
        />

        {/* Dark theme chevrons */}
        <img
          className="show-when-dark"
          src={isOpen ? '/chevron-up.svg' : '/chevron-down.svg'}
          alt=""
        />
      </button>
    </div>
  );
};

export default ProcessCard;