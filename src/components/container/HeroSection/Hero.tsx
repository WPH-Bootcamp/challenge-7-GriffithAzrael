import React from 'react';
import ButtonHero from '../../ui/ButtonHero';

// Tailwind CSS properties
const Hero: React.FC = () => {
  return (
    <section
      className="hero relative mb-5 overflow-hidden md:flex md:items-center"
      id="hero"
    >
      <div className="hero-title relative z-10 grid px-4 py-12 gap-10 md:flex md:p-0 md:flex-col md:ml-[140px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold leading-11 md:text-[56px] md:leading-17">
            Your Tech Partner for
            <span className="text-[#FF6C37]"> Smarter Growth</span>
          </h1>

          <p className="text-[16px] font-semibold leading-[30px] md:text-[20px] md:w-[52ch] md:leading-[34px]">
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>
        </div>

        {/* Ensure button text stays white in both themes */}
        <div className="text-white">
          <ButtonHero />
        </div>
      </div>

      <div className="hero-image relative z-0 md:-ml-12">
        {/* Light theme image */}
        <img
          className="show-when-light px-0 w-full h-auto"
          src="hero-light.png"
          alt="Hero image"
        />

        {/* Dark theme image */}
        <img
          className="show-when-dark px-0 w-full h-auto scale-x-[-1]"
          src="Hero_dark.png"
          alt="Hero image"
        />

        {/* Light theme shadows */}
        <div className="show-when-light shadow1 absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/80 to-transparent" />
        <div className="show-when-light shadow2 absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent" />

        {/* Dark theme shadows */}
        <div className="show-when-dark shadow1 absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="show-when-dark shadow2 absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent" />
      </div>
    </section>
  );
};

export default Hero;