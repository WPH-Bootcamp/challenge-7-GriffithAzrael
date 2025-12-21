import React from 'react';

export type FaqItemData = {
  question: string;
  answer: string;
};

export interface FaqItemProps extends FaqItemData {
  isOpen: boolean;
  onToggle: () => void;
  showDivider?: boolean;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onToggle, showDivider }) => {
  return (
    <div className="py-4">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left cursor-pointer"
      >
        <p className="font-bold text-[18px] leading-8 md:text-2xl md:leading-9">
          {question}
        </p>

        {/* Icons swap with theme */}
        <img
          className="show-when-dark shrink-0"
          src={isOpen ? '/minus.svg' : '/plus.svg'}
          alt={isOpen ? 'Hide answer' : 'Show answer'}
        />
        <img
          className="show-when-light shrink-0"
          src={isOpen ? '/minus.svg' : '/plus.svg'}
          alt={isOpen ? 'Hide answer' : 'Show answer'}
        />
      </button>

      {isOpen && (
        <p className="mt-2 faq-muted text-sm leading-7 w-[45ch] md:w-full md:text-[20px]">
          {answer}
        </p>
      )}

      {showDivider && <div className="mt-4 w-full border-1 faq-divider" />}
    </div>
  );
};

export default FaqItem;