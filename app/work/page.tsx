'use client';

import React, { useEffect } from 'react'
import ProjectCard from '../components/projects/projectCard';
import { projectsData } from '../data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';




const Work = () => {
    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
<>
  <Navbar />
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-36 px-4">
    {projectsData.map((project) => (
      <div key={project.id} data-aos="zoom-in">
        <ProjectCard
          id={project.id}
          src={project.image}
          title={project.title}
          subtitle={`${project.location} • ${project.totalArea}`}
        />
      </div>
    ))}
  </div>
  <Footer />
</>
      )
}

export default Work