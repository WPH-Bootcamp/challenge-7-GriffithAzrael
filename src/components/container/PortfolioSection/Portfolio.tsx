import React from 'react';
import AchievementCard from '../../ui/AchievementCard';

const Portfolio: React.FC = () => {
  const achievements = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '5+', label: 'Years of Experience' },
    { value: '10+', label: 'Industry Awards Won' },
    { value: '100%', label: 'Client Satisfaction Rate' },
  ];

  return (
    <section className="portfolio flex flex-col items-center justify-center px-4 py-20 gap-6 md:px-[140px] md:py-20 md:gap-16">
      <div className="section-title flex flex-col text-center px-4 justify-center gap-[11px]">
        <h1 className="text-[28px] font-bold leading-[38px] md:text-[40px] md:leading-14">
          End-to-End IT Solutions That Drive Results
        </h1>

        <p className="portfolio-subtitle text-sm font-medium leading-7 md:text-[18px] md:leading-[32px]">
          From strategy to execution, we deliver solutions that grow your business.
        </p>
      </div>

      <div className="achievements grid items-center grid-cols-2 gap-4 md:flex md:gap-5">
        {achievements.map((item) => (
          <AchievementCard key={item.label} value={item.value} label={item.label} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;