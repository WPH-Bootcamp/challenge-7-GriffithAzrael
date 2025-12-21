import React from 'react';
import ServiceCard from '../../ui/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: 'Property 1=Web Development.svg',
      title: 'Web Development',
      desc: 'Build fast, scalable, and SEO-friendly websites.',
    },
    {
      icon: 'Property 1=Mobile App Development.svg',
      title: 'Mobile App Development',
      desc: 'Native & cross-platform apps tailored to user needs.',
    },
    {
      icon: 'Property 1=UI, Property 2=UX Design.svg',
      title: 'UI/UX Design',
      desc: 'Delight users with intuitive and beautiful interfaces.',
    },
    {
      icon: 'Property 1=Cloud Solutions.svg',
      title: 'Cloud Solutions',
      desc: 'Secure and flexible cloud infrastructure for your growth.',
    },
    {
      icon: 'Property 1=Software Development.svg',
      title: 'Software Development',
      desc: 'Custom solutions built around your business logic.',
    },
    {
      icon: 'Property 1=IT Infrastructure.svg',
      title: 'IT infrastructure',
      desc: 'Scale your backend with reliable tech foundations.',
    },
    {
      icon: 'Property 1=Cybersecurity Services.svg',
      title: 'Cybersecurity Services',
      desc: 'Stay protected with enterprise-grade security.',
    },
    {
      icon: 'Property 1=QA Solutions.svg',
      title: 'QA Solutions',
      desc: 'Ensure performance with rigorous testing frameworks.',
    },
    {
      icon: 'Property 1=IT Consulting & Support.svg',
      title: 'IT Consulting & Support',
      desc: 'Make smarter tech decisions with expert guidance.',
    },
  ];

  return (
    <section
      className='services flex flex-col items-center justify-center gap-10 px-4 py-10 md:px-[140px] md:py-20'
      id='service'
    >
      <div className='section-title flex flex-col text-center justify-center gap-[11px]'>
        <h1 className='text-[28px] font-bold px-4 leading-[38px] md:text-[40px] md:leading-14'>
          Smart IT Solutions That Grow With You
        </h1>

        <p className='services-muted text-sm font-medium px-5 leading-7 md:text-[18px] md:leading-[32px]'>
          Tailored tech to boost efficiency, security, and results.
        </p>
      </div>

      <div className='grid gap-10 md:grid-cols-3 md:gap-x-5'>
        {services.map((item) => (
          <ServiceCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
