import { cva } from 'class-variance-authority';
import Image from 'next/image';
import SetemailImage from '../../public/Images/Icons/lock.png';

const SetpasswordButtonStyle = cva(' flex flex-col items-center justify-center  bg-white h-[323px] w-[368px] py-5 px-5');

interface CheckemailProps {
  text: string;
}

const Setpassword: React.FC<Setpassword> = ({ text }) => {
  return (
    <center>
    
   <button className={SetpasswordButtonStyle()}>
    <Image src={SetemailImage} alt="Set your password" width={104} height={104} />
     <div className="flex items-center justify-center">
    
      <div className="mt-2 text-center font-bold text-black">{text}</div>

        
      </div>
      
      
    </button>
    </center>
  );
};

export default Setpassword;