'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ServicesSection from './services';
import ButtonLink from '../button';
import './about.css';

const AboutSection = () => {
  const aboutRef  = useRef<HTMLDivElement | null>(null);
  const visionRef  = useRef<HTMLDivElement | null>(null);
  

  const [aboutVisible, setAboutVisible] = useState(false);
  const [visionVisible, setVisionVisible] = useState(false);
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAboutVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => setVisionVisible(entry.isIntersecting),
    { threshold: 0.6 }
  );
  if (visionRef.current) observer.observe(visionRef.current);
  return () => observer.disconnect();
}, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return;

      const section = aboutRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollRatio = 1 - Math.max(0, Math.min(1, rect.top / windowHeight));
      setOverlayOpacity(scrollRatio);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className='about containers' id='about' ref={aboutRef}>
      <section className="aboutUs-background">
        <div
          className="aboutUs-overlay"
          style={{ opacity: overlayOpacity }}
        />
        <div className={`aboutUs-text ${aboutVisible ? 'reveal' : 'hiddenReveal'}`}>
          <h2>Who We Are</h2>
          <p>
            Phenom Guild Africa is a Design & Build Consortium that specializes in architectural
            design, structural engineering, and construction services.
          </p>
          <p>
            We provide comprehensive services, from architectural design and structural drawings
            to full-scale construction. Our focus is on delivering high-quality, sustainable
            designs that stand the test of time.
          </p>
          <div className="aboutUs-1">
            <div>
              <h4>Projects Done</h4>
              <span>50+ Projects</span>
            </div>
            <div>
              <h4>Years of Experience</h4>
              <span>10+ Years</span>
            </div>
          </div>
        <ButtonLink href="/contact" className='btn'>Work with us</ButtonLink>
        </div>
      </section>

      <div className={`vision ${visionVisible ? 'one' : 'two'}`} ref={visionRef}>
        <h2>Our Vision</h2>
        <div className='vision-1'>
          <div >
            <p>
            We envision a future where exceptional design is accessible to all, blending function with artistry to create spaces that inspire and elevate. Our mission is to push the boundaries of architectural excellence while staying rooted in sustainability and community-driven values. We aim to redefine the design process and construction industry by offering innovative solutions that anticipate the needs of tomorrow , from sustainable designs to state-of-the-art 3D visualizations that ensure our clients see their dreams come to life before the first brick is laid.
            </p>
            <blockquote>
            ❝At Phenom Guild, we work with property owners, developers, and institutions to design and deliver buildings that are functional, durable, and cost-effective. From private homes to commercial developments, we focus on getting the details right , drawings that make sense on site, structures that stand the test of time, and clear communication from day one to handover.❞
            <br />
              <span className='founder'>__ Ezra Kayo, Founder</span>
            </blockquote>
          </div>

          <div>
            <Image
              src="/blueP.jpg"
              alt="Our Vision"
              width={800}
              height={800}
              className="rounded-2xl h-auto object-cover img"
            />
          </div>
        </div>
      </div>

      <section className='services'>
        <ServicesSection />
      </section>
    </main>
  );
};

export default AboutSection;
