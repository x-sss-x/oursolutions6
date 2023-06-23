//@ts-nocheck
import Image from 'next/image';
import LoggedImage from '../../public/Images/Icons/successfull.png';
import Button, { ButtonExtendedProps } from './Button';

const buttonProps: ButtonExtendedProps = {
  intent: 'primary',
  width: 35,
};


const Forgotpasssucess = () => {
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
        <a href="http://localhost:3000/"><Button {...buttonProps}>Continue</Button></a>
      </div>
      <a href="/login/[user]"><h1 className=" mt-[260px] text-center font-latin  text-black">
        Back to log in

      </h1></a>

    </center>


  );

};

export default Forgotpasssucess;