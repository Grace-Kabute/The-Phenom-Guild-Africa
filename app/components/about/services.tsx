'use client';

import React, {useState} from 'react';
import ServiceItem from './serviceItem';
import Image from 'next/image';


const ServicesSection = (title:string) => {
  const [currentImage, setCurrentImage] = useState<string>(
    'https://res.cloudinary.com/dn40xyabf/image/upload/v1752509173/02-Membley-Estate_ldbpjb.jpg'
  );
  const services = [
    {
      title: 'Architectural design',
      description:
        'We handle both the creative and technical sides. Our architects focus on layouts that are functional, aesthetic, and tailored to your needs, while our structural engineers ensure that every design is safe, durable, and compliant with building codes. From early concepts to construction-ready drawings, we deliver integrated solutions that are buildable, efficient, and cost-conscious. With cutting-edge 3D visualization, we bring your vision to life before construction begins. This allows you to fully experience the space, providing clarity and confidence throughout the design process.',
      image:'https://res.cloudinary.com/dn40xyabf/image/upload/v1752509173/02-Membley-Estate_ldbpjb.jpg'
    },
    {
      title: 'Construction',
      description:
        'We build what we design. With experienced crews and solid project management, we deliver quality construction , on time, and on budget.',
      image:'https://res.cloudinary.com/dn40xyabf/image/upload/v1752069812/10-Bungalow-Flat-Roof_ewnevy.jpg'
    },
    {
      title: 'Interior design',
      description:
        'We build what we design. With experienced crews and solid project management, we deliver quality construction , on time, and on budget.',
      image: 'https://res.cloudinary.com/dn40xyabf/image/upload/v1752509154/474477207_1031845565627062_2151437912006822777_n_ohjm4x.jpg'
    },
    {
      title: 'Project Management',
      description:
        'We stay hands-on from start to finish. We coordinate teams, track timelines, and keep you updated every step of the way, so you always know what’s happening on your project.',
      image:'https://res.cloudinary.com/dn40xyabf/image/upload/v1752486496/3553eeba-24d7-40bf-b103-f5e96c82c1a5.png'
    },
    {
      title: 'Renovations',
      description:
        'Upgrading an old space? We handle everything from design changes to full makeovers , whether it’s residential or commercial, we make it smooth and stress-free.',
      image:'https://res.cloudinary.com/dn40xyabf/image/upload/v1752069807/09-Bungalow-Flat-Roof_ngynnb.jpg'
    }
  ];

  return (
    <main id='services'>
      <section className="services flex flex-col md:flex-row gap-8 w-full">
      <div className='services-1'>
        <h2>Our Services</h2>
        <div className="service-items flex-1 max-w-3xl w-full ">
          {services.map((service, idx) => (
            <ServiceItem
              key={idx}
              title={service.title}
              description={service.description}
              image={service.image}
              setCurrentImage={setCurrentImage}
              defaultShow={idx === 0}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 h-[600px]">
        <Image
        src={currentImage}
        alt={title}
        width={500}
        height={800}
        className="object-cover rounded-lg w-full h-full"
  />      
</div>

    </section>
    </main>

  );
};

export default ServicesSection;
