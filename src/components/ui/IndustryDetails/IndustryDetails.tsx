import React from 'react';

export interface IndustryDetailsProps {
  label: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const IndustryDetails: React.FC<IndustryDetailsProps> = ({
  label,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="flex flex-col gap-5" role="tabpanel" aria-label={`${label} details`}>
      <p className="text-sm w-[40ch] leading-7 md:text-[18px] md:leading-8 md:w-[840px]">
        {description}
      </p>

      <img
        className="h-[200px] object-cover object-[50%_60%] rounded-[12px] md:h-[351px] md:object-[45%_55%] md:rounded-3xl"
        src={imageSrc}
        alt={imageAlt}
      />
    </div>
  );
};

export default IndustryDetails;