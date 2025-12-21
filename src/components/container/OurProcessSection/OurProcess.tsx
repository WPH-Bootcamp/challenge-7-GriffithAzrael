import React, { useState } from 'react';
import ProcessCard from '../../ui/ProcessCard';
import GhostProcessCard from '../../ui/GhostProcessCard';
import MobileProcessRail from '../../ui/MobileProcessRail';

type Step = {
  title: string;
  description: string;
  side: 'left' | 'right';
};

const STEPS: Step[] = [
  { title: 'Discovery & Consultation', description: 'Understand Your Needs And Goals', side: 'left' },
  { title: 'Planning & Strategy', description: 'Build a Clear, Scalable Roadmap', side: 'right' },
  { title: 'Design & Prototyping', description: 'Craft UX That Converts', side: 'left' },
  { title: 'Development & Implementation', description: 'Deliver With Speed & Precision', side: 'right' },
  { title: 'Testing & Optimization', description: 'Ensure Quality at Every Step', side: 'left' },
  { title: 'Launch & Growth', description: 'Scale Measure & Improve Continuously', side: 'right' },
];

const OurProcess: React.FC = () => {
  const [openSteps, setOpenSteps] = useState<boolean[]>(Array(STEPS.length).fill(false));

  const toggleStep = (index: number) => {
    setOpenSteps((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  return (
    <section className="our-process flex flex-col items-center justify-center px-4 py-10 gap-6 md:px-[140px] md:py-20">
      <div className="section-title flex flex-col text-center justify-center gap-[11px]">
        <h1 className="text-[28px] font-bold px-4 leading-[38px] md:text-[40px] md:leading-14">
          Our Process
        </h1>
        <p className="process-muted text-sm font-medium px-5 leading-7 md:text-[18px] md:leading-[32px]">
          Clear steps. Smart execution. Results you can count on.
        </p>
      </div>

      <div className="process-tree relative w-full overflow-visible">
        {/* MOBILE */}
        <div className="md:hidden relative overflow-visible">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="relative z-10 flex gap-3 items-stretch pb-4 last:pb-0"
            >
              <MobileProcessRail
                index={i + 1}
                isFirst={i === 0}
                isLast={i === STEPS.length - 1}
              />

              <div className="flex-1">
                <ProcessCard
                  title={step.title}
                  description={step.description}
                  isOpen={openSteps[i]}
                  onToggle={() => toggleStep(i)}
                  overlayOnDesktop={false}
                  align="start"
                />
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex w-full items-start justify-between gap-6 overflow-visible">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-10 items-start overflow-visible">
            {STEPS.map((step, i) => (
              <div key={`left-slot-${i}`} className="relative w-full overflow-visible md:h-[96px]">
                {step.side === 'left' ? (
                  <ProcessCard
                    title={step.title}
                    description={step.description}
                    isOpen={openSteps[i]}
                    onToggle={() => toggleStep(i)}
                    overlayOnDesktop
                    align="start"
                  />
                ) : (
                  <GhostProcessCard align="start" />
                )}
              </div>
            ))}
          </div>

          {/* Numbers + line */}
          <div className="relative w-12 flex flex-col gap-10 items-center overflow-visible">
            <div className="process-line absolute top-6 bottom-6 left-1/2 -translate-x-1/2 z-0 w-px" />
            {STEPS.map((_, i) => (
              <div key={`num-${i}`} className="relative z-10 md:h-[96px] flex items-center justify-center">
                <div className="process-number flex items-center justify-center bg-[#FF623E] text-white text-xs font-bold rounded-full w-12 h-12 md:text-base md:leading-[30px]">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex-1 flex flex-col gap-10 items-end overflow-visible">
            {STEPS.map((step, i) => (
              <div key={`right-slot-${i}`} className="relative w-full overflow-visible md:h-[96px]">
                {step.side === 'right' ? (
                  <ProcessCard
                    title={step.title}
                    description={step.description}
                    isOpen={openSteps[i]}
                    onToggle={() => toggleStep(i)}
                    overlayOnDesktop
                    align="end"
                  />
                ) : (
                  <GhostProcessCard align="end" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;