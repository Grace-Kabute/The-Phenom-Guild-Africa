'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import Image from 'next/image';
import Link from 'next/link';
import 'aos/dist/aos.css';
import { projectsData } from '../data';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const extractAllGalleryImages = (): { src: string; id: string }[] => {
  const allImages: { src: string; id: string }[] = [];

  projectsData.forEach((project) => {
    const galleryImages = Object.values(project.gallery || {});
    galleryImages.forEach((img) => {
      allImages.push({ src: img, id: project.id });
    });
  });

  return allImages;
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Gallery = () => {
  const [images, setImages] = useState<{ src: string; id: string }[]>([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const galleryImages = extractAllGalleryImages();
    const shuffledImages = shuffleArray(galleryImages);
    setImages(shuffledImages);
  }, []);

  return (
    <section className="p-6 mt-24">
      <Navbar/>
      <h2 className="text-3xl font-bold text-center mb-6">Project Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map(({ src, id }, i) => (
          <Link href={`/mansion/${id}`} key={i}>
            <div data-aos="zoom-in" className="relative w-full h-100 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={src}
                alt={`Gallery image ${i}`}
                width={600}
                height={600}
                loading="lazy"
                className="rounded-lg w-full h-100 object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
      <Footer/>
    </section>
  );
};

export default Gallery;
