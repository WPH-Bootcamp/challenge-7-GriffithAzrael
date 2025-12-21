import React from 'react';

const ButtonHero: React.FC = () => {
  const handleClick = () => {
    const target = document.getElementById('messageform');
    if (!target) return;

    // Offset so the section isn’t hidden behind the sticky header
    const headerOffset = 10;
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button
        type='button'
        onClick={handleClick}
        className="let's-talk-button w-full flex bg-[#FF623E] leading-7 text-sm shadow-[inset_4px_4px_4px_0px_#FFFFFF50] cursor-pointer md:hover:shadow-[inset_0_0_0_0] font-bold items-center justify-center py-2 rounded-full md:w-[200px] md:text-base md:leading-[30px]"
      >
        Let's Talk
      </button>
    </>
  );
};

export default ButtonHero;
