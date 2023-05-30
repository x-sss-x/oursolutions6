import { cva } from 'class-variance-authority';
import Image from 'next/image';
import StartImage from '../../public/Images/Icons/happy.png';

const StartingButtonStyle = cva(' flex flex-col items-center justify-center  bg-white h-[323px] w-[368px] py-5 px-5');

interface StartingProps {
  text: string;
}

const Starting: React.FC<Starting> = ({ text }) => {
  return (
    <center>
   <button className={StartingButtonStyle()}>
    <Image src={StartImage} alt="starting page" width={104} height={104} />
     <div className="flex items-center justify-center">
    
      <div className="mt-2 text-center font-bold text-black ">{text}</div>

        
      </div>
      
      
    </button>
    </center>
  );
};

export default Starting;