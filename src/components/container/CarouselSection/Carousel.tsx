import React from 'react';
import LogoMarquee from '../../ui/LogoMarquee';

const logos = [
  'Company logo.svg',
  'Company logo (1).svg',
  'Company logo (2).svg',
  'Company logo (3).svg',
  'Company logo (4).svg',
  'Company logo (5).svg',
  'Company logo (6).svg',
  'Company logo (7).svg',
];

const Carousel: React.FC = () => {
  return (
    <section className="brands-portfolio grid items-center justify-center px-0">
      <p className="text-base text-center font-bold m-0 md:mb-10">
        Trusted by Global Innovators & Leading Brands
      </p>

      <LogoMarquee logos={logos} alt="Company logo" />
    </section>
  );
};

export default Carousel;