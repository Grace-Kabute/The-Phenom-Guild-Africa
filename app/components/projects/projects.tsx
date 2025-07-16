'use client';

import React from 'react';
import ProjectCard from './projectCard';
import ButtonLink from '../button';
import './projects.css';
import { projectsData } from '../../data';
import { Maven_Pro } from 'next/font/google'

const mavenPro = Maven_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'], // pick what you need
  variable: '--font-maven-pro',
  display: 'swap',
})

const Projects = () => {
  return (
    <section className="projects containers" id='projects'>
      <div className="projects-1">
        <div className='projects-2'>
          <h2 className={`title ${mavenPro.variable}`}>Luxury residences curated for comfort, style, and community.</h2>
          <p>We craft and manage premium homes in prime locations. Designed by architects, built by experts, styled to perfection. Every detail is curated for a lifestyle that feels effortless, inside communities that thrive.</p>
          <ButtonLink href="/work" className='btn'>VIEW ALL PROJECTS</ButtonLink>
        </div>
        <blockquote className='client-review'>
          ❝Phenom Guild Africa didn’t just build our house—they brought our vision to life. Every detail felt intentional, from the first sketch to the final finishes. The team was professional, responsive, and deeply passionate about what they do. We felt supported at every stage of the process, and the result exceeded every expectation.❞
          <br />
          <span className='founder'>__ Mrs. Otieno, Kikambala Beach Residence</span>
        </blockquote>
      </div>
<div className="grid-layout">
  {projectsData.slice(0, 5).map((project, index) => (
    <div key={project.id} className={`grid-item item-${index}`}>
      <ProjectCard
        id={project.id}
        src={project.image}
        title={project.title}
        subtitle={`${project.location} • ${project.totalArea}`}
        large={index === 0}
      />
    </div>
  ))}
</div>
    </section>
  );
};

export default Projects;
