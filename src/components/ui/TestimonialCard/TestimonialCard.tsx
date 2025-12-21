import React from 'react';

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export interface TestimonialCardProps extends Testimonial {
  quoteIconSrc?: string;
  ratingSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  id,
  quote,
  name,
  role,
  avatar,
  quoteIconSrc = 'tdesign_quote-filled.svg',
  ratingSrc = 'Rating.svg',
}) => {
  return (
    <article
      id={id}
      className="review-card review-card-theme snap-center shrink-0 w-[85vw] max-w-[594px] border rounded-2xl p-6 pb-16 md:w-[594px] relative flex flex-col items-center justify-center gap-4"
    >
      <div className="flex relative flex-col gap-3">
        <img
          className="absolute left-[3px] -top-12 w-16 h-auto md:w-20 md:-top-16"
          src={quoteIconSrc}
          alt="Quote symbol"
        />
        <img className="h-6 w-auto mx-auto" src={ratingSrc} alt="Rating" />
        <p className="text-center text-sm w-[38ch] font-semibold leading-7 md:w-full md:text-[18px] md:leading-8">
          {quote}
        </p>
      </div>

      <div className="flex flex-col text-center text-sm font-semibold leading-7 md:text-[18px] md:leading-8">
        <p>{name}</p>
        <p className="text-[#FF623E]">{role}</p>
      </div>

      <img
        className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-[60px] h-[60px] rounded-full md:w-[75px] md:h-[75px]"
        src={avatar}
        alt={`${name} profile`}
      />
    </article>
  );
};

export default TestimonialCard;