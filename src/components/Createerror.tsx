import { cva } from 'class-variance-authority';
import Image from 'next/image';
import ErrorImage from '../../public/Images/Icons/error.png';
import Button, { ButtonExtendedProps } from './Button';

const CreateerrorButtonStyle = cva(' flex flex-col items-center justify-center  bg-white  h-[323pxl] w-[368pxl] py-5 px-5');

interface  CreateerrorProps {
  text: string;
}
const buttonProps:  ButtonExtendedProps = {
    intent: 'primary',
   width:true,
  };
 

const  Createerror: React.FC< Createerror> = ({ text }) => {
  return (
    <center>
    
  
   <button className={ CreateerrorButtonStyle()}>
   
     <div className="flex items-center justify-center">
    
      <div className="mt-2 text-center font-bold text-black">{text}</div>

      </div>
      
      <Image src={ErrorImage} alt="Set your password" width={104} height={104} />
      
    </button>
   
    <Button {...buttonProps}>Try again</Button>
    </center>

    
  );
 
};

export default  Createerror;