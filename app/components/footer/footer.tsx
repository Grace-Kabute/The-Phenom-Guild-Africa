import React from 'react'
import Link from 'next/link';
import SocialLinks from '../socials';
import Image from 'next/image';
import './footer.css';



const Footer = () => {
  const src = '/Phenom.png';
  const title = 'Logo';

  return (
    <div className='footer containers'>
      <div className="footer-1">
        <div>
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image
              src={src}
              alt={title}
              fill
              className="object-contain cursor-pointer"
            />
          </div>
            <div className="footer-socials">
              <SocialLinks />
          </div>
        </div>
        <div>
          <h3>Company</h3>
          <nav className="navigation">
          <Link href="/#about" className='link'>About us</Link>
          <Link href="/whyUs" className='link'>Why us</Link>
          <Link href="/contact" className='link'>Contact us</Link>
          </nav>
        </div>
        <div>
          <h3>Products</h3>
          <nav className="navigation">
          <Link href="/gallery" className='link'>Gallery</Link>
          <Link href="/#projects" className='link'>Projects</Link>
          <Link href="/#services" className='link'>Services</Link>
          </nav>
        </div>
        <div>
          <h3>Products</h3>
          <nav className="navigation">
          <Link href="/" className='link'>Request a meeting</Link>
          <Link href="/" className='link'>Careers</Link>
          <Link href="/" className='link'>Partnership</Link>
          </nav>
        </div>
      </div>
      <div className='footer-1'>
        <div className='footer-2'>
          <h3>About us</h3>
          <p>The Phenom Guild is one of Kenya&#39;s leading project development and construction firms. Delivering high-quality results with a focus on durability, innovation, and client satisfaction. We are active all over Kenya!</p>
        </div>
        <div>
          <h3>Talk to us</h3>
          <form action="">
            <input type="email" placeholder='email'/>
            <textarea name="message" id="message" defaultValue="write message" />
            <button className='btn'>Submit</button>
          </form>
        </div>
        
      </div>
      <p className='copyright'>
      <span>Copyright © {new Date().getFullYear()}. The Phenom Guild Africa.</span>
      </p>
    </div>
  )
}

export default Footer