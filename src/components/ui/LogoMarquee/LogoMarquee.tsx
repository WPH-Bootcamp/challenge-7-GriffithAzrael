import React from 'react';

export interface LogoMarqueeProps {
  logos: string[];
  alt?: string;
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ logos, alt = 'Company logo' }) => {
  return (
    <div className="overflow-x-hidden relative group">
      {/* Track that moves left via CSS keyframes */}
      <div className="relative flex shrink-0 w-max gap-12 py-10 items-center whitespace-nowrap will-change-transform animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {/* Light theme background */}
        <div className="show-when-light absolute inset-0 bg-white" aria-hidden="true" />
        {/* Dark theme background */}
        <div className="show-when-dark absolute inset-0 bg-black" aria-hidden="true" />

        {/* First copy */}
        <div className="relative flex items-center gap-12 mix-blend-luminosity shrink-0">
          {logos.map((src, i) => (
            <img key={i} className="mix-blend-luminosity md:h-12 md:w-auto" src={src} alt={alt} />
          ))}
        </div>

        {/* Second copy for seamless loop */}
        <div className="relative flex items-center gap-12 shrink-0" aria-hidden="true">
          {logos.map((src, i) => (
            <img
              key={`dup-${i}`}
              className="mix-blend-luminosity md:h-12 md:w-auto"
              src={src}
              alt={alt}
            />
          ))}
        </div>
      </div>

      {/* Gradient fades on left & right (theme swapped) */}
      <div className="show-when-light pointer-events-none absolute inset-y-0 left-0 w-12 z-10 bg-gradient-to-r from-white to-transparent md:w-[260px]" />
      <div className="show-when-light pointer-events-none absolute inset-y-0 right-0 w-12 z-10 bg-gradient-to-l from-white to-transparent md:w-[260px]" />

      <div className="show-when-dark pointer-events-none absolute inset-y-0 left-0 w-12 z-10 bg-gradient-to-r from-black to-transparent md:w-[260px]" />
      <div className="show-when-dark pointer-events-none absolute inset-y-0 right-0 w-12 z-10 bg-gradient-to-l from-black to-transparent md:w-[260px]" />
    </div>
  );
};

export default LogoMarquee;