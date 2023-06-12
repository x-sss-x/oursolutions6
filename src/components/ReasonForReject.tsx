import React from "react";
import NextButton from "./NextButton";
import NextIcon from "../../public/Images/Icons/next-button.png";
import Image from "next/image";
interface ReasonForRejectProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const ReasonForReject: React.FC<ReasonForRejectProps> = ({ onChange, value }) => {
  return (
    <div>
      <div className="border-b border-black m-5">
        <input
          placeholder="Reason for Reject 1"
          type="text"
          value={value}
          onChange={onChange}
          className="text-lg border-none focus:outline-none bg-transparent"
        />
      </div>
      <div className="border-b border-black mt-4 m-5">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="text-lg border-none focus:outline-none bg-transparent"
        />
      </div>
      <div className="border-b border-black mt-4 m-5">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="text-lg border-none focus:outline-none bg-transparent"
        />
      </div>
      <button
      className="mt-6 m-auto  w-20 h-20 xs:w-16 xs:h-12 bg-sky-800 rounded-full px-2 py-2 text-white flex items-center justify-center">
      <Image src={NextIcon} alt="Custom Image" className="w-20 h-20 xs:w-12 xs:h-12" />
      </button>
    </div>
  );
};

export default ReasonForReject;