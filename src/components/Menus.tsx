import React, { useState } from 'react';
import Image from 'next/image';

import menuIcon from '../../public/Images/Icons/menu.png';

const Menus = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button className="p-2" onClick={handleClick}>
        <Image src={menuIcon} alt="Menu" width={24} height={24} />
      </button>
      {isOpen && (
        <div className="absolute mt-1 py-2  rounded shadow-lg">
          <button className="w-full bg-gray-200 px-4 py-2 text-gray-800 block hover:bg-gray-400 border border-sky-600">
          List Of  Services
          </button>
          <button className="w-full bg-gray-200 px-4 py-2 text-gray-800 block hover:bg-gray-400 border border-sky-600">
          Services Providers
          </button>
          <button className="w-full bg-gray-200 px-4 py-2 text-gray-800 block hover:bg-gray-400 border border-sky-600">
          Feedback
          </button>
          <button className="w-full bg-gray-200 px-4 py-2 text-gray-800 block hover:bg-gray-400 border border-sky-600">
          History
         </button>
         <button className="w-full bg-gray-200 px-4 py-2 text-gray-800 block hover:bg-gray-400 border border-sky-600">
         Booking
         </button>
         <button className="w-full bg-gray-200 px-4 py-2 text-gray-800 block hover:bg-gray-400 border border-sky-600">
         Help and contact
         </button>
        </div>
      )}
    </div>
  );
};

export default Menus;