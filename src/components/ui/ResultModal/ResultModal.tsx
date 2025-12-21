import React from 'react';
import ModalOverlay from '../ModalOverlay';

export type ResultModalVariant = 'success' | 'failed';

export interface ResultModalProps {
  variant: ResultModalVariant;
  onPrimary: () => void;
  successIconSrc?: string;
  failedIconSrc?: string;
}

const ResultModal: React.FC<ResultModalProps> = ({
  variant,
  onPrimary,
  successIconSrc = 'Success_icon.png',
  failedIconSrc = 'Failed_icon.png',
}) => {
  const isSuccess = variant === 'success';
  const iconSrc = isSuccess ? successIconSrc : failedIconSrc;

  return (
    <ModalOverlay>
      <div className='modal-card relative w-[min(92vw,560px)] overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)]'>
        <div className='modal-top px-8 md:px-10 flex flex-col items-center'>
          <img
            src={iconSrc}
            alt={isSuccess ? 'Success Illustration' : 'Failed Illustration'}
            className='modal-icon h-[140px] w-[140px] object-contain md:h-[228px] md:w-[228px]'
          />
        </div>

        <div className='modal-bottom px-8 pb-8 pt-8 text-center md:px-10 md:pb-10 md:pt-10 space-y-4'>
          {isSuccess ? (
            <>
              <h3 className='text-xl md:text-2xl font-bold'>
                Message Received!
              </h3>
              <p className='modal-muted text-sm md:text-base'>
                Thanks for reaching out — we'll get back to you as soon as
                possible.
              </p>
              <button
                type='button'
                onClick={onPrimary}
                className='modal-primary-btn mt-2 inline-flex w-full text-sm leading-7 md:leading-[30px] md:text-base md:w-[361px] items-center justify-center rounded-full bg-[#FF623E] p-2 md:px-5 md:py-3 font-semibold shadow-[inset_4px_4px_4px_0px_#FFFFFF33] hover:brightness-110'
              >
                Back to Home
              </button>
            </>
          ) : (
            <>
              <h3 className='text-xl md:text-2xl font-bold'>
                Oops! Something went wrong.
              </h3>
              <p className='modal-muted text-sm md:text-base'>
                We couldn't send your message. Please try again or check your
                connection.
              </p>
              <button
                type='button'
                onClick={onPrimary}
                className='modal-primary-btn mt-2 inline-flex w-full text-sm leading-7 md:leading-[30px] md:text-base md:w-[361px] items-center justify-center rounded-full bg-[#FF623E] p-2 md:px-5 md:py-3 font-semibold shadow-[inset_4px_4px_4px_0px_#FFFFFF33] hover:brightness-110'
              >
                Try Again
              </button>
            </>
          )}
        </div>
      </div>
    </ModalOverlay>
  );
};

export default ResultModal;
