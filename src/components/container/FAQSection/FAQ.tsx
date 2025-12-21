import React, { useState } from 'react';
import FaqItem, { type FaqItemData } from '../../ui/FaqItem';
import ConsultationCard from '../../ui/ConsultationCard';

const FAQ: React.FC = () => {
  const items: FaqItemData[] = [
    {
      question: 'What services do you offer?',
      answer:
        'We provide custom web/app development, cloud solutions, UX/UI design, and more.',
    },
    {
      question: 'How do I know if this is right for my business?',
      answer:
        "Book a free consult — we'll assess your goals and recommend the right approach.",
    },
    {
      question: 'How much does a project cost?',
      answer:
        "Every project is different. Let's talk about your needs to get a tailored estimate.",
    },
    {
      question: 'How long does it take?',
      answer:
        'Depends on scope — but we always prioritize quality and deadlines.',
    },
    {
      question: 'Can I start with a small project first?',
      answer: 'Absolutely. We often begin with MVPs or pilot projects.',
    },
  ];

  const [openStates, setOpenStates] = useState<boolean[]>(items.map(() => false));

  const toggleItem = (index: number) => {
    setOpenStates((prev) => prev.map((isOpen, i) => (i === index ? !isOpen : isOpen)));
  };

  const scrollToMessageForm = () => {
    const el = document.getElementById('messageform');
    if (!el) return;

    const headerOffset = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <section
      className="faq flex flex-col justify-center gap-6 px-4 py-10 md:px-30 md:py-20 md:gap-12"
      id="faq"
    >
      <div className="section-title flex flex-col relative text-left gap-4 md:flex-row md:justify-between md:gap-0">
        <h1 className="text-[28px] font-bold leading-[38px] md:w-[16ch] md:text-left md:text-[40px] md:leading-14">
          Need Help? Start Here.
        </h1>
        <p className="faq-muted text-sm font-medium leading-7 md:text-right md:w-[20ch] md:text-[18px] md:leading-8 md:absolute md:bottom-0 md:right-0">
          Everything you need to know — all in one place.
        </p>
      </div>

      <div className="w-full border-1 faq-divider" />

      <div className="grid gap-6 md:flex md:w-full md:gap-[73px]">
        {/* Left: FAQ accordion */}
        <div className="faq-accordion-container flex flex-col md:w-full">
          {items.map((item, index) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openStates[index]}
              onToggle={() => toggleItem(index)}
              showDivider={index < items.length - 1}
            />
          ))}
        </div>

        {/* Right: consultation card */}
        <ConsultationCard
          imageSrc="small_meeting.png"
          imageAlt="Image"
          onButtonClick={scrollToMessageForm}
        />
      </div>
    </section>
  );
};

export default FAQ;