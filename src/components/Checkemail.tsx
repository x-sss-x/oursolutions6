import { cva } from 'class-variance-authority';
import Image from 'next/image';
import EmailImage from '../../public/Images/Icons/checkemail.png';
import Button, { ButtonExtendedProps } from './Button';
import Clickhere from './Clickhere';
const CheckemailButtonStyle = cva(' flex flex-col items-center justify-center  bg-white h-screen w-screen py-5 px-5');

interface CheckemailProps {
  text: string;
}
const buttonProps: ButtonExtendedProps = {
  intent: 'primary',
 width:35,
};

const Checkemail: React.FC<Checkemail> = ({ text }) => {
  return (
    <center>
  
    <Image src={EmailImage} alt="Check email image" width={104} height={104} />
     
    <h1 className=" mt-3 text-center font-bold  text-black">
             
             Check your email
                        
                                    </h1>
      
                                    <h1 className=" mt-1 text-center font-latin font-size:  text-black">
   anything18@gmail.com
                        
                                    </h1>
        
                                    <div className='mx-auto mt-5'>
              <Button>Open email app</Button>

            </div>
            <h1 className=" mt-2 text-center font-latin  text-black">
Didn't receive the email?
                        
                                    </h1>
                              
                                    <button className="text-secondary text-[20px] font-serif hover:underline focus:outline-none text-sky-700">
       Click here
      </button>
    </center>
  );
};

export default Checkemail;