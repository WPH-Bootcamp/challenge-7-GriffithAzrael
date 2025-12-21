import React from 'react';
import ModalOverlay from '../ModalOverlay';

const ProcessingModal: React.FC = () => {
  return (
    <ModalOverlay>
      <div className='modal-card relative w-[min(92vw,560px)] overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)]'>
        <div className='modal-top px-8 md:px-10 py-10 flex flex-col items-center gap-4'>
          <div className='spinner-ring h-12 w-12 rounded-full border-2 animate-spin motion-reduce:animate-none' />
          <p className='font-semibold text-base md:text-lg'>Processing...</p>
          <p className='modal-muted text-sm md:text-base text-center'>
            Please wait while we send your message.
          </p>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default ProcessingModal;
