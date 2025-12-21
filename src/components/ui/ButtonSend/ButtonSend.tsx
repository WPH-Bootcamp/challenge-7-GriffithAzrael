import React from 'react';

const ButtonSend: React.FC = () => {
  return (
    <button
      type='submit'
      className='w-full flex items-center justify-center bg-[#FF623E] text-white leading-7 text-sm shadow-[inset_4px_4px_4px_0px_#FFFFFF50] cursor-pointer hover:shadow-[inset_0_0_0_0] font-bold py-2 px-6 rounded-full md:text-base md:leading-[30px]'
    >
      Send
    </button>
  );
};

export default ButtonSend;
