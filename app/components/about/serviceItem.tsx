'use client';

import React, { useState } from 'react';
import EllipsisText from '../ellipsis';
import { ArrowUp, ArrowDown } from 'lucide-react';


type ServiceItemProps = {
  title: string;
  description: string;
  image: string;
  defaultShow?: boolean;
  setCurrentImage: (imgUrl: string) => void;
};

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  description,
  image,
  defaultShow,
  setCurrentImage,
}) => {
const [showDescription, setShowDescription] = useState(defaultShow || false);

  const handleToggle = () => {
    const next = !showDescription;
    setShowDescription(next);
    if (next) setCurrentImage(image);
  };

  return (
    <div className="pt-4 pb-6 w-full ">
      <div className="flex justify-between items-start w-full">
        <h3 className="text-bold text-lg text-gray-800 tracking-tight">{title}</h3>
        <button
          onClick={handleToggle}
          className="text-sm text-emerald-600"
        >
          {showDescription ? <ArrowUp className="border-2 border-emerald-600 text-emerald-600 rounded-full p-2 hover:bg-emerald-50 transition"/> : <ArrowDown className="border-2 border-emerald-600 text-emerald-600 rounded-full p-2 hover:bg-emerald-50 transition"/>}
        </button>
      </div>

      <div className="mt-2 w-full min-h-[1rem]">
        {showDescription && <EllipsisText text={description} lines={4} />}
      </div>
    </div>
  );
};

export default ServiceItem;
