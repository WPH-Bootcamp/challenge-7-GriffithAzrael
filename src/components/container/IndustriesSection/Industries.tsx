import React, { useMemo, useState } from 'react';
import IndustryTab from '../../ui/IndustryTab';
import IndustryDetails from '../../ui/IndustryDetails';

type Industry = {
  id: 'fintech' | 'ecommerce' | 'healthcare';
  label: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const Industries: React.FC = () => {
  const industries: Industry[] = useMemo(
    () => [
      {
        id: 'fintech',
        label: 'Fintech',
        description:
          'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
        imageSrc: 'Credit_card.png',
        imageAlt: 'Fintech',
      },
      {
        id: 'ecommerce',
        label: 'E-Commerce',
        description:
          'Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.',
        imageSrc: 'E-commerce.png',
        imageAlt: 'E-Commerce',
      },
      {
        id: 'healthcare',
        label: 'Healthcare',
        description:
          'Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.',
        imageSrc: 'Healthcare.png',
        imageAlt: 'Healthcare',
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState<Industry['id']>('fintech');

  const activeIndustry = industries.find((i) => i.id === activeId) ?? industries[0];

  return (
    <section className="built-for-industry flex flex-col justify-center gap-6 px-4 py-10 md:px-[140px] md:py-20 md:gap-16">
      <div className="section-title flex flex-col text-left gap-[11px]">
        <h1 className="text-[32px] font-bold leading-[42px] md:text-[40px] md:leading-14">
          Built for Your Industry
        </h1>

        <p className="industry-muted text-sm font-medium leading-7 w-[40ch] md:w-full md:text-[18px] md:leading-8">
          We've helped companies across industries launch smarter, faster, and more securely.
        </p>
      </div>

      <div className="grid gap-6 md:flex md:gap-16">
        {/* Left menu */}
        <div className="grid gap-6 md:w-3xs">
          <div className="flex flex-col gap-3 md:gap-6" role="tablist" aria-label="Industries">
            {industries.map((industry) => (
              <IndustryTab
                key={industry.id}
                label={industry.label}
                isActive={industry.id === activeId}
                onClick={() => setActiveId(industry.id)}
              />
            ))}
          </div>
        </div>

        {/* Right content */}
        <IndustryDetails
          label={activeIndustry.label}
          description={activeIndustry.description}
          imageSrc={activeIndustry.imageSrc}
          imageAlt={activeIndustry.imageAlt}
        />
      </div>
    </section>
  );
};

export default Industries;