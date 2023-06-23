//@ts-nocheck
import { cva } from 'class-variance-authority';
import Image from 'next/image';
import LoggedImage from '../../public/Images/Icons/successfull.png';
import Button, { ButtonExtendedProps } from './Button';

const LoginSuccessfullyButtonStyle = cva(' flex flex-col items-center justify-center  bg-white h-screen w-screen py-5 px-5');

const buttonProps: ButtonExtendedProps = {
    intent: 'primary',
    width: 35,
  };
 

const LoginSuccessfully: React.FC<LoginSuccessfully> = ({ text }) => {
  return (
    <center>
   <button className={LoginSuccessfullyButtonStyle()}>
    <Image src={LoggedImage} alt="Set your password" width={104} height={204} />
    <h1 className=" mt-2 text-center font-light text-black">
      Logged in successfully.
    </h1>
         
    <Button {...buttonProps}>Continue</Button>
      
    </button>


  
  
    </center>

    
  );
 
};

export default LoginSuccessfully;