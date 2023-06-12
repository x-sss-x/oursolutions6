import React from "react";
import Image, { StaticImageData } from "next/image";
import { VariantProps, cva } from "class-variance-authority";
import Clickhere from './Clickhere';
export type CustomerRequestProps = VariantProps<typeof customerRequestStyles>;

export const customerRequestStyles = cva(
  "my-9 mx-auto  bg-zinc-300 w-1/2 h-96 border border-black xs:w-full rounded-2xl",
  {
    variants: {
      size: {
        default: "",
      },
    },
  }
);

interface CustomerRequestExtendedProps extends CustomerRequestProps {
  imageSrc: StaticImageData;
  name: string;
  id: string;
  pickupTime: string;
  fromLocation: string;
  toLocation: string;
  date: string;
  status:string;
}

const CustomerRequest = ({
  imageSrc,
  name,
  id,
  pickupTime,
  fromLocation,
  toLocation,
  date,
  status,
  ...props
}: CustomerRequestExtendedProps) => {
  return (
    <div className={customerRequestStyles()} {...props}>
      <div className="my-9 mx-auto flex flex-col items-center justify-center">
         
    <Image src={imageSrc} alt="Set your password"  />
      </div>
      <div className="my-4 flex flex-col items-center justify-center">
        <p className="text-xl font-bold">Name:John {name}</p>
        <p className="text-lg font-bold">ID:200303 {id}</p>
      </div>
      <div className="">
        <p className="m-3">Pick Up time:11:00AM{pickupTime}</p>
        <p className="m-3">From:Bangalore {fromLocation}</p>
        <p className="m-3">To:Airport {toLocation}</p>
        <p className="m-3">Date:2/3/23 {date}</p>
        <p className="my-4 flex flex-col items-center justify-center font-bold text-lime-800">Accepted{status}</p>
      </div>
      <center>
       <button className="mt-7 mx-auto text-secondary text-[20px] font-bold hover:underline focus:outline-none text-sky-700">
      Back
      </button>
    </center>
    </div>
   
  );
};

export default CustomerRequest;