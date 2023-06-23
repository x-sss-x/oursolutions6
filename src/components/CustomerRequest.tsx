//@ts-nocheck
import React from "react";
import Image, { StaticImageData } from "next/image";
import { VariantProps, cva } from "class-variance-authority";

export type CustomerRequestProps = VariantProps<typeof customerRequestStyles>;

export const customerRequestStyles = cva(
  " bg-zinc-300 w-1/2 h-96 border border-black xs:w-full rounded-2xl",
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
  status: string;
}

const CustomerRequest = () => {
  return (
    <div >
      <div className="my-4 flex">
        <Image src={imageSrc} alt="Profile Image" />
      </div>
      <div className="my-4 flex flex-col items-center absolute justify-center">
        <p className="text-xl">ServiceProvider     : Varshitha</p>
        <p className="text-lg ">Sercive ID     : 460</p>
        <p className="m-3">Pick Up time     : </p>
        <p className="m-3">From      :</p>
        <p className="m-3">To        : </p>
        <p className="m-3">Date      : </p>
        <p className="my-4 flex flex-col items-center justify-center text-lime-800">{status}</p>
      </div>
    </div>
  );
};

export default CustomerRequest;