'use client';

import Navbar from '../navbar/navbar'
import ButtonLink from '../button';
import {useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './hero.css';
import { ChevronDown } from 'lucide-react';
import { Montserrat  } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Maven_Pro } from 'next/font/google'

const mavenPro = Maven_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'], // pick what you need
  variable: '--font-maven-pro',
  display: 'swap',
})
const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
});

const Hero = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showArrow, setShowArrow] = useState(true);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const current = window.scrollY;


      if (currentScrollTop < lastScrollTop) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      setLastScrollTop(currentScrollTop);
      setShowArrow(current < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);
  return (
    <main className='hero containers'>
      <Navbar className={isScrollingUp ? '' : 'navbar-hidden'} />
        <video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
      >
        <source src="https://res.cloudinary.com/dn40xyabf/video/upload/v1752491746/trimmed_nfh8be.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="grid-overlay"></div>
      <div className="hero-content">        
        <h1 className={montserrat.className}>
          WE DESIGN. WE ENGINEER. WE DELIVER.
        </h1>
        <h2 className={mavenPro.className}>WE ARE BUILT FOR THIS</h2>
        <p className={inter.className}>
           From concept to concrete, we craft architectural plans, structural designs, BoQs, and deliver complete builds. You dream it. We build it.
           </p>
        <p className='span'><span>Trusted by homeowners and developers across Kenya.</span></p>
        <ButtonLink href="/work" className='btn'>See our work</ButtonLink>
        </div>
        {showArrow && (
        <div className="scroll-arrow">
          <ChevronDown size={60} />
        </div>
      )}
    </main>
  )
}

export default Hero