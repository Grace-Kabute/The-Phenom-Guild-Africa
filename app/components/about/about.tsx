'use client';

import Link from 'next/link';
import './about.css';
import WhyItem from './whyUs';

const whyList = [
  {
    number: '01',
    title: 'End-to-End Control',
    description: 'We handle everything, from architectural design and structural drawings to actual construction ensuring fewer delays, clearer communication, and a smoother experience.',
  },
  {
    number: '02',
    title: 'Future-Ready Design',
    description: 'Our team uses advanced tools like 3D visualizations so clients can see and refine their spaces before construction even begins. It is not just about efficiency, it’s about clarity and confidence.',
  },
  {
    number: '03',
    title: 'Built to Endure',
    description: 'We don’t design in isolation. Every choice we make considers the environment, community, and long-term impact of the build. Good design doesn’t just look great, it respects the world around it.',
  },
  {
    number: '04',
    title: 'People-Centered Process',
    description: 'We listen first. Every project starts with understanding how people will live, work, and move within a space. That insight drives every decision we make.',
  },
];

const AboutSection = () => {

  return (
    <main className='about' id='about'>
      <section>
<div className='company-container'>
    <div className="gradient-overlay"></div>
<div className="company relative inline-block px-6 py-4 sm:px-8 sm:py-6">
  <span className="absolute -top-4 left-0 text-gray-300 text-2xl sm:-top-6 sm:text-4xl tracking-[0.3em] uppercase font-light">
    THE
  </span>
  <span className="text-4xl sm:text-6xl font-extrabold text-black tracking-wide uppercase block">
    PHENOM GUILD
  </span>
  <span className="absolute -bottom-4 right-0 text-lg sm:-bottom-6 sm:right-4 sm:text-2xl italic text-[#ffd700] font-serif">
    AFRICA
  </span>
</div>

</div>
<div className='block'>
        <div className='aboutUs-text'>
          <div>
            <p>
At Phenom Guild Africa, we are a Design & Build Consortium specializing in architectural design, structural engineering, and construction. From the first sketch to the final build, we bring every phase of a project under one roof. Streamlining the process and ensuring consistency from concept to completion.

We design with intention. Every structure we create is built to last, both functionally and aesthetically. Our work blends form and purpose, balancing bold ideas with practical solutions to shape spaces that serve, inspire, and endure.

Whether it’s a home, commercial project, or public space, we approach every brief with curiosity, precision, and a deep respect for the people who will use the space.
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
<div className="flex justify-center">
  <Link href="/contact">
    <button className='cta'>WORK WITH US</button>
  </Link>
</div>
          </div>
        </div>
      <div className='vision'>
        <h2 >Our Vision</h2>
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
        </div>
      </div>
      </div>
      <div className='company-container'>
    <div className="gradient-overlay"></div>
<div className="company relative inline-block px-6 py-4 sm:px-8 sm:py-6">
  <span className="absolute -top-4 left-0 text-gray-300 text-2xl sm:-top-6 sm:text-4xl tracking-[0.3em] uppercase font-light">
    WHY
  </span>

  <span className="text-4xl sm:text-6xl font-extrabold text-black tracking-wide uppercase block">
    CHOOSE
  </span>
  <span className="absolute -bottom-4 right-0 text-lg sm:-bottom-6 sm:right-4 sm:text-2xl italic text-[#ffd700] font-serif">
    US?
  </span>
</div>
</div>
    <div className='chooseUs'>
      <h1>We believe that great design should be accessible, not reserved for the elite, but made for communities, families, businesses, and futures.</h1>
      <div style={{ maxWidth: '800px', minWidth: '300px', margin: '0 auto' }}>
        {whyList.map((item, index) => (
          <WhyItem
            key={index}
            number={item.number}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
</section>
    </main>
  );
};

export default AboutSection;
