import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineLock, AiOutlineArrowUp } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Image from 'next/image';
import SpecializationIcon from "../../public/Images/Icons/specialization.png";
import IdIcon from "../../public/Images/Icons/id.png";
export type InputProps = VariantProps<typeof inputStyles>;

export const inputStyles = cva('relative flex items-center w-96 xs:w-48 mx-auto', {
  variants: {
    inputVariant: {
      default: 'bg-stone-200 border border-gray-300 rounded-lg px-4 py-2',
      email: 'bg-stone-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2',
      username: 'bg-stone-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2',
      phoneNumber: 'bg-stone-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2',
      age: 'bg-stone-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2',
      address: 'bg-stone-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2',
      password: 'bg-stone-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2',
      confirmPassword: 'bg-stone-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2',
      specialization: 'bg-stone-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2',
      idproff: 'bg-stone-200 border border-gray-300 rounded-lg pl-10 pr-4 py-2',
    },
  },
});

export interface InputExtendedProps extends InputProps {
  placeholder: string;
  inputVariant?:
    | 'default'
    | 'email'
    | 'username'
    | 'phoneNumber'
    | 'age'
    | 'address'
    | 'password'
    | 'confirmPassword'
    | 'specialization'
    | 'idproff';
}

export default function Input({ placeholder, inputVariant = 'default', ...props }: InputExtendedProps) {
  const renderIcon = () => {
    switch (inputVariant) {
      case 'email':
        return <AiOutlineMail className="text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2" />;
      case 'username':
        return <AiOutlineUser className="text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2" />;
      case 'phoneNumber':
        return <AiOutlinePhone className="text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2" />;
      case 'age':
        return <AiOutlineArrowUp className="text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2" />;
      case 'address':
        return <HiOutlineLocationMarker className="text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2" />;
      case 'password':
      case 'confirmPassword':
        return <AiOutlineLock className="text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2" />;
      case 'specialization':
        return (
          <Image
            src={SpecializationIcon}
            alt="Specialization Icon"
            className="text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
            width={24}
            height={24}
          />
        );
      case 'idproff':
        return (
          <Image
            src={IdIcon}
            alt="Var123 Icon"
            className="text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6"
            width={24}
            height={24}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={inputStyles()}>
      <input
        type={inputVariant === 'password' || inputVariant === 'confirmPassword' ? 'password' : 'text'}
        placeholder={placeholder}
        className={inputStyles({ inputVariant })}
        {...props}
      />
      {renderIcon()}
    </div>
  );
}
