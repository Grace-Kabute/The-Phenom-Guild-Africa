'use client';

import Link from 'next/link';
import { FaWhatsapp,FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import RevealEmail from './email'
import Image from 'next/image';
import './navbar.css';
import { useState } from 'react';


const Navbar = ({ className = '' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileContacts, setShowMobileContacts] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleContacts = () => setShowMobileContacts(!showMobileContacts);

  const closeMenu = () => setMenuOpen(false);
  const src = 'https://res.cloudinary.com/dn40xyabf/image/upload/v1752491823/Phemon_eoeilf.png';
  const title = 'Logo';
  
  return (
    <header className={`navbar ${className}`}>
<div className="relative w-16 h-16 md:w-20 md:h-20">
  <Image
    src={src}
    alt={title}
    fill
    className="object-contain cursor-pointer"
  />
</div>

      <div>
        <nav className="nav-links">
          <Link href="/" className='link'>Home</Link>
          <Link href="/#about" className='link'>About</Link>
          <Link href="/#projects" className='link'>Projects</Link>
          <Link href="/#services" className='link'>Services</Link>
          <Link href="/gallery" className='link'>Gallery</Link>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        {menuOpen && (
          <nav className="dropdown-menu">
            <Link href="/" className="link" onClick={closeMenu}>Home</Link>
            <Link href="/#about" className="link" onClick={closeMenu}>About</Link>
            <Link href="/#projects" className="link" onClick={closeMenu}>Projects</Link>
            <Link href="/#services" className="link" onClick={closeMenu}>Services</Link>
            <Link href="/gallery" className="link" onClick={closeMenu}>Gallery</Link>
          </nav>
        )}
      </div>
      <div>
        <div className="nav-icons flex items-center text-xl md:text-2xl">
          <a
          href="https://wa.me/254702352806"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>
          <RevealEmail/>
        </div>
          <div className="mobile-icons">
          <div
            onClick={toggleContacts}
            aria-label="Show contact options"
          >
            <FaPhone />
          </div>
  
          {showMobileContacts && (
            <div className="show-icons">
              <a
                href="https://wa.me/254702352806"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-green-400 transition"
              >
                <FaWhatsapp />
              </a>
              <RevealEmail />
            </div>
          )}
        </div>
</div>
    </header>
  );
};

export default Navbar;
