import React from 'react';

export interface MobileProcessRailProps {
  index: number;
  isFirst: boolean;
  isLast: boolean;
}

const MobileProcessRail: React.FC<MobileProcessRailProps> = ({
  index,
  isFirst,
  isLast,
}) => {
  return (
    <div className="relative w-10 shrink-0 self-stretch flex items-center justify-center">
      {/* Line segment behind the circle */}
      <div
        className={[
          'absolute left-1/2 -translate-x-1/2 w-px z-0',
          'process-line',
          isFirst ? 'top-1/2' : 'top-0',
          isLast ? 'bottom-1/2' : 'bottom-0',
        ].join(' ')}
      />

      {/* Circle */}
      <div className="relative z-10 process-number flex items-center justify-center bg-[#FF623E] text-white text-xs font-bold rounded-full w-10 h-10">
        {index}
      </div>
    </div>
  );
};

export default MobileProcessRail;