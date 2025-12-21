import React from 'react';

export type AchievementCardProps = {
  value: string;
  label: string;
  className?: string;
};

const AchievementCard: React.FC<AchievementCardProps> = ({
  value,
  label,
  className = '',
}) => {
  return (
    <div
      className={[
        'achievement-card achievement-card-theme',
        'flex flex-col items-center justify-center',
        'w-[172.5px] h-[172.5px]',
        'border-1 rounded-full p-4',
        'md:w-[275px] md:h-[275px]',
        className,
      ].join(' ')}
    >
      <p className="text-[#FF623E] text-center text-4xl font-bold leading-11 md:text-5xl md:leading-15">
        {value}
      </p>
      <p className="text-center text-sm leading-7 md:text-[20px] md:leading-[34px]">
        {label}
      </p>
    </div>
  );
};

export default AchievementCard;