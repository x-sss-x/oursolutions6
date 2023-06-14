import { cva } from 'class-variance-authority';
import Image from 'next/image';
import ErrorImage from '../../public/Images/Icons/error.png';
import Button, { ButtonExtendedProps } from './Button';

const ForgotpasserrorButtonStyle = cva(' flex flex-col items-center justify-center  bg-white  h-screen w-screen py-5 px-5');

interface ForgotpasserrorProps {
  text: string;
}
const buttonProps:  ButtonExtendedProps = {
    intent: 'primary',
   width:true,
  };
 

const  Forgotpasserror: React.FC<Forgotpasserror> = ({ text }) => {
  return (
    <center>
    
  
   
     
    
      
      
      <Image src={ErrorImage} alt="Set your password" width={104} height={104} />
      
      <h1 className=" mt-2 text-center font-latin text-black">
             
          Failed to reset your password.
                   
                               </h1>
                               <h1 className=" mt-1 text-center font-latin text-black">
             
        Click below to try again
                   
                               </h1>
                               <div className='mx-auto mt-7'>
    <Button {...buttonProps}>Try again</Button>
    </div>
    </center>

    
  );
 
};

export default Forgotpasserror;