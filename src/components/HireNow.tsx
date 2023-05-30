import { cva } from 'class-variance-authority';

import Button, { ButtonExtendedProps } from './Button';

const HireNowButtonStyle = cva(' flex flex-col items-center justify-center  bg-gray-500 h-[268px]  w-[498px] rounded-2 py-5 px-5');

interface HireNowProps {
  text: string;
}
const buttonProps: ButtonExtendedProps = {
    intent: 'primary',
   width:false,
  };
 

const HireNow: React.FC<HireNow> = ({ text }) => {
  return (
    <center>
    
  
   <button className={HireNowButtonStyle()}>

     <div className="flex items-center justify-center">
    
      <div className="mt-2 text-center font-bold text-black">{text}</div>
      <Button {...buttonProps}>HireNow</Button>

        
      </div>
      
      
    </button>
   
    
  
  
    </center>

    
  );
 
};

export default HireNow;