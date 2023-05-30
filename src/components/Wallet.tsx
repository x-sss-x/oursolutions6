import React, { useState } from "react";
import { useQuery } from "react-query";
import Image from "next/image";
import WallentIcon from "../../public/Images/Icons/wallent.png";

const WallentButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {!isOpen && (
        <button
          className="flex flex-col items-center bg-zinc-300 w-73 h-73 rounded-[10px] p-4"
          onClick={handleClick}
        >
          <Image src={WallentIcon} alt="Wallent" width={32} height={32} />
          <p className="text-black mt-2">WALLET</p>
        </button>
      )}
   
   
    </div>
  );
};

export default WallentButton;