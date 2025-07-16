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
          <Link href="/#about" className='links'>About us</Link>
          <Link href="/whyUs" className='links'>Why us</Link>
          <Link href="/contact" className='links'>Contact us</Link>
          </nav>
        </div>
        <div>
          <h3>Products</h3>
          <nav className="navigation">
          <Link href="/gallery" className='links'>Gallery</Link>
          <Link href="/#projects" className='links'>Projects</Link>
          <Link href="/#services" className='links'>Services</Link>
          </nav>
        </div>
        <div>
          <h3>Products</h3>
          <nav className="navigation">
          <Link href="/" className='links'>Request a meeting</Link>
          <Link href="/" className='links'>Careers</Link>
          <Link href="/" className='links'>Partnership</Link>
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