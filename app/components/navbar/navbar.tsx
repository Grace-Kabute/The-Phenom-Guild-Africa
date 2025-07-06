'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import RevealEmail from './email'
import Image from 'next/image';
import './navbar.css';


const Navbar = ({ className = '' }) => {
  const src = '/Phenom.png';
  const title = 'Logo';
  
  return (
    <header className={`navbar ${className}`}>
      <div className="logo">
        <Link href="/" className='link'>
        <Image
        src={src}
        alt={title}
        width={80}
        height={80}
        className="cursor-pointer"
        />
        </Link>
      </div>
      <nav className="nav-links">
        <Link href="/" className='link'>Home</Link>
        <Link href="/#about" className='link'>About</Link>
        <Link href="/#projects" className='link'>Projects</Link>
        <Link href="/#services" className='link'>Services</Link>
      </nav>

      <div className="nav-icons flex items-center gap-2 ">
        <a href="https://wa.me/254702352806" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <RevealEmail/>
      </div>
    </header>
  );
};

export default Navbar;
