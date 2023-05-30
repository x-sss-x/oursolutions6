import { cva } from 'class-variance-authority';
import Image from 'next/image';
import LoggedImage from '../../public/Images/Icons/successfull.png';
import Button, { ButtonExtendedProps } from './Button';

const LoginSuccessfullyButtonStyle = cva(' flex flex-col items-center justify-center  bg-white h-[323px] w-[368px] py-5 px-5');

interface LoginSuccessfullyProps {
  text: string;
}
const buttonProps: ButtonExtendedProps = {
    intent: 'primary',
   width:35,
  };
 

const LoginSuccessfully: React.FC<LoginSuccessfully> = ({ text }) => {
  return (
    <center>
    
  
   <button className={LoginSuccessfullyButtonStyle()}>
    <Image src={LoggedImage} alt="Set your password" width={104} height={104} />
     <div className="flex items-center justify-center">
    
      <div className="mt-2 text-center font-light text-black">{text}</div>

        
      </div>
      
      
    </button>
   
    <Button {...buttonProps}>Continue</Button>

  
  
    </center>

    
  );
 
};

export default LoginSuccessfully;