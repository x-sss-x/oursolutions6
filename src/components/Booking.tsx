import React, { useState } from "react";
import { useQuery } from "react-query";
import Image from "next/image";
import BookingIcon from "../../public/Images/Icons/booking.png";

const BookingButton = () => {
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
          <Image src={BookingIcon} alt="Booking" width={32} height={32} />
          <p className="text-black mt-2">BOOKING</p>
        </button>
      )}
   
   
    </div>
  );
};

export default BookingButton;
