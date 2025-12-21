import React from 'react';

export interface GhostProcessCardProps {
  align: 'start' | 'end';
}

const GhostProcessCard: React.FC<GhostProcessCardProps> = ({ align }) => {
  return (
    <div
      className={[
        'hidden md:block w-full max-w-[520px] h-full rounded-2xl border',
        'process-card',
        'opacity-0 pointer-events-none',
        align === 'start' ? 'mr-auto' : 'ml-auto',
      ].join(' ')}
    />
  );
};

export default GhostProcessCard;