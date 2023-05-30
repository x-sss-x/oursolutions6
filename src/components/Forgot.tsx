import { cva } from 'class-variance-authority';
import Image from 'next/image';
import lockImage from '../../public/Images/Icons/lock.png';

const ForgotButtonStyle = cva(' flex flex-col items-center justify-center bg-white h-[323px] w-[368px] py-4 px-4');

interface ForgotProps {
  text: string;
}

const Forgot: React.FC<ForgotProps> = ({ text }) => {
  return (
    <center>
   <button className={ForgotButtonStyle()}>
     <div className="flex items-center justify-center">
      <div className="mt-2 text-size-2 text-center text-black">{text}</div>

        
      </div>
      
      <Image src={lockImage} alt="lock image" width={104} height={104} />
    </button>
    </center>
  );
};

export default Forgot;