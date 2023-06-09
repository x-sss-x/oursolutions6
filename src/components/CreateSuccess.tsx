import { cva } from 'class-variance-authority';
import Image from 'next/image';
import LoggedImage from '../../public/Images/Icons/successfull.png';
import Button, { ButtonExtendedProps } from './Button';

const CreateSuccessButtonStyle = cva(' flex flex-col items-center justify-center  bg-white h-screen w-screen py-5 px-5');

interface CreateSuccessProps {
  text: string;
}
const buttonProps: ButtonExtendedProps = {
    intent: 'primary',
   width:35,
  };
 

const CreateSuccess: React.FC<CreateSuccess> = ({ text }) => {
  return (
    <center>
    
  
   <h1 className=" mt-9 text-center font-bold text-black">
             
   Congratulations your account has 
   
               </h1>
               <h1 className=" mt-2 text-center font-bold text-black">
             
       been successfully created
             
                         </h1>
           
    <Image src={LoggedImage} alt="Set your password" width={104} height={104} />
     <div className="flex items-center justify-center">
    
      <div className="mt-2 text-center font-bold text-black">{text}</div>

        
      </div>
      
      
  
   
    <Button {...buttonProps}>Continue</Button>

  
  
    </center>

    
  );
 
};

export default CreateSuccess;