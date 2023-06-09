import { cva } from 'class-variance-authority';
import Image from 'next/image';
import LoggedImage from '../../public/Images/Icons/successfull.png';
import Button, { ButtonExtendedProps } from './Button';

const ForgotpasssucessButtonStyle = cva(' flex flex-col items-center justify-center  bg-white h-screen w-screen py-5 px-5');

interface ForgotpasssucessProps {
  text: string;
}
const buttonProps: ButtonExtendedProps = {
    intent: 'primary',
   width:35,
  };
 

const Forgotpasssucess: React.FC<Forgotpasssucess> = ({ text }) => {
  return (
    <center>
    
  
    <Image src={LoggedImage} alt="Set your password" width={104} height={104} />

    <h1 className=" mt-2 text-center font-latin  text-black">
Your password has been successfully
                        
                                    </h1>
                                    <h1 className=" mt-2 text-center font-latin  text-black">
reset.
                        
                                    </h1>
                                    <h1 className=" mt-2 text-center font-latin  text-black">
Click below to login in
                        
                                    </h1>
        
      
      
      
                                    <div className='mx-auto mt-5'>
   
    <Button {...buttonProps}>Continue</Button>
</div>
    <h1 className=" mt-[260px] text-center font-latin  text-black">
Back to log in
                        
                                    </h1>
  
    </center>

    
  );
 
};

export default Forgotpasssucess;