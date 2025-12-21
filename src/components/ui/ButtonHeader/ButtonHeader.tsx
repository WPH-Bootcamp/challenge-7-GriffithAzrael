import React from 'react';

const ButtonHeader: React.FC = () => {
  const handleClick = () => {
    const target = document.getElementById('messageform');
    if (!target) return;

    const headerOffset = 20;
    const y = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="hidden md:flex md:items-center md:justify-center md:h-11 md:w-[197px] md:bg-[#FF623E] md:shadow-[inset_4px_4px_4px_0px_#FFFFFF50] md:hover:shadow-[inset_0_0_0_0] cursor-pointer md:p-2 md:rounded-full md:leading-7 md:font-bold md:text-sm text-white"
    >
      Let's Talk
    </button>
  );
};

export default ButtonHeader;