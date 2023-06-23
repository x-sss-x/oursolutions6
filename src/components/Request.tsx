
import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import Image, { StaticImageData } from "next/image";
import { FaAngleRight } from "react-icons/fa";

export type ProfileProps = VariantProps<typeof profileStyles>;

export const profileStyles = cva(
  "flex border border-black items-center w-96 h-28 xs:w-64 xs:h-24 bg-zinc-300 rounded-xl",
  {
    variants: {
      size: {
        default: "w-96 h-12",
      },
    },
  }
);

interface ProfileExtendedProps extends ProfileProps {
  imageSrc: StaticImageData;
  text: string;
  id_no: number;
  request: string;
}

const Profile = ({
  imageSrc,
  text,
  id_no,
  request,
  ...props
}: ProfileExtendedProps) => {
  return (
    <div className={profileStyles()}>
      <div className="w-76 h-76 py-2 px-2">
        <Image
          src={imageSrc}
          alt="Profile Image"
          className="w-24 h-24 xs:w-16 xs:h-16"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <p className="text-center ml-4 text-gray-600 bold">{text}</p>
        <p className="text-center ml-4 text-gray-500">{id_no}</p>
        <p className="text-center ml-4 xs:text-sm text-sky-800">{request}</p>
      </div>

      <div className="flex items-center justify-center">
        <FaAngleRight className="text-gray-500 text-2xl text-bold text-black" />
      </div>
    </div>
  );
};

export default Profile;