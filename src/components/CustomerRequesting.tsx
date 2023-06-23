//@ts-nocheck
import React from "react";
import Image, { StaticImageData } from "next/image";
import { VariantProps, cva } from "class-variance-authority";
import Clickhere from './Clickhere';
import Button, { ButtonExtendedProps } from './Button';
export type CustomerRequestingProps = VariantProps<typeof customerRequestingStyles>;
const buttonProps: ButtonExtendedProps = {
  intent: 'green',
  width: 35,
};
export const customerRequestingStyles = cva(
  "my-9 mx-auto  bg-zinc-300 w-1/2 h-96 border border-black xs:w-full rounded-2xl",
  {
    variants: {
      size: {
        default: "",
      },
    },
  }
);

interface CustomerRequestingExtendedProps extends CustomerRequestingProps {
  imageSrc: StaticImageData;
  name: string;
  id: string;
  pickupTime: string;
  fromLocation: string;
  toLocation: string;
  date: string;
  status: string;
}

const CustomerRequesting = ({
  imageSrc,
  name,
  id,
  pickupTime,
  fromLocation,
  toLocation,
  date,
  status,
  ...props
}:
  CustomerRequestingExtendedProps) => {
  return (
    <div className={customerRequestingStyles()} {...props}>
      <div className="my-9 mx-auto flex flex-col items-center justify-center">

        <Image src={imageSrc} alt="Set your password" />
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

      </div>
      <center>
        <div className="mt-[60px] mx-auto">
          <Button className='border-2 bg-red-700 border-black text-white hover:text-black transition-all duration-75 w-[270px] h-[40px] rounded-2xl'> Reject</Button>
        </div>
        <div className="mt-[40px] mx-auto">
          <Button className='border-2 bg-lime-700 border-black text-white hover:text-black transition-all duration-75 w-[270px] h-[40px] rounded-2xl'> Accept</Button>
        </div>
      </center>
    </div>

  );
};

export default CustomerRequesting;