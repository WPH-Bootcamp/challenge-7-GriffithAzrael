import React from 'react';

export interface ConsultationCardProps {
  title?: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt?: string;
  buttonLabel?: string;
  onButtonClick: () => void;
}

const ConsultationCard: React.FC<ConsultationCardProps> = ({
  title = "Let's talk it through",
  subtitle = 'Book a free consultation with our team.',
  imageSrc,
  imageAlt = 'Image',
  buttonLabel = 'Free Consultation',
  onButtonClick,
}) => {
  return (
    <div className="book-consultation text-white flex flex-col p-5 bg-[#CC4E32] gap-6 rounded-2xl md:w-[450px] md:h-[441.5px] md:rounded-3xl md:p-6 md:gap-6">
      <div className="flex flex-col gap-1">
        <p className="font-bold text-[28px] leading-[38px] md:text-4xl md:leading-11">
          {title}
        </p>
        <p className="font-semibold text-sm leading-7 md:text-[18px] md:leading-8">
          {subtitle}
        </p>
      </div>

      <img className="rounded-2xl" src={imageSrc} alt={imageAlt} />

      <button
        type="button"
        onClick={onButtonClick}
        className="faq-consult-btn font-bold p-2 rounded-full leading-[30px] cursor-pointer"
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default ConsultationCard;