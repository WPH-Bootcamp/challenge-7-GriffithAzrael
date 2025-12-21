import React from 'react';

export type ProjectCardProps = {
  imageSrc: string;
  imageAlt: string;
  category: string;
  title: string;
  className?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  imageAlt,
  category,
  title,
  className = '',
}) => {
  return (
    <div className={['project-card flex flex-col gap-2 md:gap-3', className].join(' ')}>
      <img
        className="rounded-2xl md:h-[343px] md:w-auto"
        src={imageSrc}
        alt={imageAlt}
      />
      <div className="flex flex-col">
        <p className="text-sm text-[#FF623E] leading-7 font-medium">{category}</p>
        <p className="font-bold leading-[30px]">{title}</p>
      </div>
    </div>
  );
};

export default ProjectCard;