import React from 'react';
import './whyUs.css';
const WhyItem = ({ number, title, description }) => {
  return (
    <div className="why-item">
      <div className="why-header">
        <span className="why-number text-[#ffd700]">{number}</span>
        <span className="why-title">{title}</span>
      </div>
      <hr className="why-divider" />
      <p className="why-description">{description}</p>
    </div>
  );
};

export default WhyItem;
