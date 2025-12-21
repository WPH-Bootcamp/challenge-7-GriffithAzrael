import React from 'react';
import TestimonialCard, { type Testimonial } from '../../ui/TestimonialCard';
import ReviewsFades from '../../ui/ReviewsFades';
import ReviewsDots from '../../ui/ReviewsDots';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'review-1',
    quote:
      '“Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.”',
    name: 'John Lee',
    role: 'Creative Director at Innovate Corp',
    avatar: 'reviewer_profile(1).png',
  },
  {
    id: 'review-2',
    quote:
      '“The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.”',
    name: 'Michael Lee',
    role: 'Product Manager at Finovate',
    avatar: 'reviewer_profile(2).png',
  },
  {
    id: 'review-3',
    quote:
      '“The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.”',
    name: 'Emily Chen',
    role: 'Marketing Head at Tech Solutions',
    avatar: 'reviewer_profile(3).png',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      className="reviews flex flex-col items-center justify-center gap-10 px-4 py-10 md:py-20"
      id="testimonials"
    >
      <div className="section-title flex flex-col text-center justify-center gap-[11px]">
        <h1 className="text-[28px] font-bold px-4 leading-[38px] md:text-[40px] md:leading-14">
          What Partners Say About Working With Us
        </h1>
        <p className="reviews-muted text-sm font-medium px-5 leading-7 md:text-[18px] md:leading-[32px]">
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>

      <div className="relative w-full">
        <div
          id="reviewsTrack"
          className="flex gap-4 md:gap-6 overflow-x-auto overflow-y-visible snap-x snap-mandatory scroll-smooth touch-pan-x -mx-4 px-4 md:mx-0 md:px-0 py-12 no-scrollbar"
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>

        <ReviewsFades />
      </div>

      <ReviewsDots ids={TESTIMONIALS.map((t) => t.id)} />

      {/* Only keep the “active dot” behavior here; theme colors live in index.css */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        .reviews:has(#review-1:target) .dot[href='#review-1'],
        .reviews:has(#review-2:target) .dot[href='#review-2'],
        .reviews:has(#review-3:target) .dot[href='#review-3'] {
          background-color: #ff623e;
          transform: scale(1.1);
        }
        .reviews:not(:has(article:target)) .dot[href='#review-1'] {
          background-color: #ff623e;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;