import React from 'react';

export type ServiceCardProps = {
  icon: string;
  title: string;
  desc: string;
  className?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, desc, className = '' }) => {
  return (
    <div
      className={[
        'service-card service-card-theme',
        'flex relative flex-col text-left',
        'pt-12 p-5 w-full',
        'border-1 rounded-2xl',
        className,
      ].join(' ')}
    >
      <img className="absolute -top-5 w-16 h-auto" src={icon} alt={title} />
      <p className="font-bold leading-[30px]">{title}</p>
      <p className="services-muted text-sm leading-7">{desc}</p>
    </div>
  );
};

export default ServiceCard;