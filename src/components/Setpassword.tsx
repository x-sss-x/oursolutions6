import { cva } from 'class-variance-authority';
import Image from 'next/image';
import SetemailImage from '../../public/Images/Icons/lock.png';
import Input from './Input';
import Button, { ButtonExtendedProps } from './Button';

const SetpasswordButtonStyle = cva(' flex flex-col items-center justify-center  bg-white h-[323px] w-[368px] py-5 px-5');

interface CheckemailProps {
  text: string;
}
const buttonProps: ButtonExtendedProps = {
  intent: 'primary',
 width:35,
};

const Setpassword: React.FC<Setpassword> = ({ text }) => {
  return (
    <center>
  
    <Image src={SetemailImage} alt="Set your password" width={104} height={104} />
        
    <h1 className=" mt-3 text-center font-bold  text-black">
             
          Set new password
                        
                                    </h1>
    <h1 className=" mt-1 text-center font-latin font-size:  text-black">
  Your new password must be different
                        
                                    </h1>
    

        
                                    <h1 className=" mt-1 text-center font-latin font-size:  text-black">
to previously used password
                        
                                    </h1>
                                    
                                    <div className='mx-auto mt-5'>
                                    <Input inputVariant="password" placeholder="password" />
</div>

<h1 className=" mt-1 text-center font-latin font-size:  text-black">
Must be at least 8 characters
                        
                                    </h1>
<div className='mx-auto mt-5'>
                                    <Input inputVariant="confirmPassword" placeholder="confirmpassword" />
    </div>
    
    <div className='mx-auto mt-5'>
              <Button>Reset password</Button>

            </div>
   </center>
  );
};

export default Setpassword;