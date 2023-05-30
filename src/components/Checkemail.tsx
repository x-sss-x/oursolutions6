import { cva } from 'class-variance-authority';
import Image from 'next/image';
import EmailImage from '../../public/Images/Icons/checkemail.png';

const CheckemailButtonStyle = cva(' flex flex-col items-center justify-center  bg-white h-[323px] w-[368px] py-5 px-5');

interface CheckemailProps {
  text: string;
}

const Checkemail: React.FC<Checkemail> = ({ text }) => {
  return (
    <center>
   <button className={CheckemailButtonStyle()}>
    <Image src={EmailImage} alt="Check email image" width={104} height={104} />
     <div className="flex items-center justify-center">
    
      <div className="mt-2 text-center font-bold text-black">{text}</div>

        
      </div>
      
      
    </button>
    </center>
  );
};

export default Checkemail;