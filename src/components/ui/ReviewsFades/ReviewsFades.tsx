import React from 'react';

const ReviewsFades: React.FC = () => {
  return (
    <>
      <div className="reviews-fade-left pointer-events-none absolute inset-y-0 left-0 w-8 -translate-x-4 md:translate-x-0 md:w-12" />
      <div className="reviews-fade-right pointer-events-none absolute inset-y-0 right-0 w-8 translate-x-4 md:translate-x-0 md:w-12" />
    </>
  );
};

export default ReviewsFades;