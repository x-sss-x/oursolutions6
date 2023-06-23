//@ts-nocheck
import { cva } from 'class-variance-authority';
import Image from 'next/image';
import ErrorImage from '../../public/Images/Icons/error.png';
import Button, { ButtonExtendedProps } from './Button';

interface  CreateerrorProps {
  text: string;
}
const buttonProps:  ButtonExtendedProps = {
    intent: 'primary',
   width:true,
  };
 

const  Createerror = () => {
  return (
    <center>
    <h1 className=" mt-9 text-center font-bold text-black">
             
    Ooops.something wrong ,try 
      </h1>
      <h1 className=" mt-2 text-center font-bold text-black">
             
            one more time
               </h1>
     
    <Image src={ErrorImage} alt="Set your password" width={104} height={104} />
  <div className='mx-auto my-2'>
      <Button {...buttonProps}>Try again</Button>
   
   </div>

    </center>

    
  );
 
};

export default  Createerror;