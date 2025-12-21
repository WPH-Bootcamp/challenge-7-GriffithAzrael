import React from 'react';
import ProjectCard from '../../ui/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      imageSrc: 'Portfolio_1.png',
      imageAlt: 'Landing page image',
      category: 'Landing Page',
      title: 'Portfolio 1',
    },
    {
      imageSrc: 'Portfolio_2.png',
      imageAlt: 'Landing page image',
      category: 'Landing Page',
      title: 'Portfolio 2',
    },
    {
      imageSrc: 'Portfolio_3.png',
      imageAlt: 'Landing page image',
      category: 'Landing Page',
      title: 'Portfolio 3',
    },
  ];

  return (
    <section
      className="projects flex flex-col items-center justify-center gap-6 px-4 py-10 md:px-[140px] md:py-20 md:gap-16"
      id="projects"
    >
      <div className="section-title flex flex-col text-center justify-center gap-[11px]">
        <h1 className="text-[28px] font-bold px-4 leading-[38px] md:text-[40px] md:leading-14">
          From Vision to Launch! Projects We're Proud Of
        </h1>
        <p className="text-sm font-medium px-5 leading-7 text-[#A4A7AE] md:text-[18px] md:leading-8">
          Take a closer look at our recent work powering startups, enterprises,
          and everything in between.
        </p>
      </div>

      <div className="grid gap-5 md:flex">
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            imageSrc={p.imageSrc}
            imageAlt={p.imageAlt}
            category={p.category}
            title={p.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;