import React from 'react';

export interface ReviewsDotsProps {
  ids: string[];
}

const ReviewsDots: React.FC<ReviewsDotsProps> = ({ ids }) => {
  return (
    <div className="selector mt-10 flex items-center gap-3">
      {ids.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className="dot reviews-dot block size-2.5 rounded-full transition-colors"
        />
      ))}
    </div>
  );
};

export default ReviewsDots;