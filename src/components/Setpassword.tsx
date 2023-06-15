import Image from 'next/image';
import SetemailImage from '../../public/Images/Icons/lock.png';
import Button from './Button';
import React, { useState } from 'react';

const Setpassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Perform form submission logic here
    console.log('Submitting form...');
  };
  return (
    <div className="flex justify-center  pt-14 h-screen">
      <form className="w-full max-w-md bg-white  rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className='pt-2 pb-2 pl-20 container center-0'><div className='pt-2 pb-2 pl-12 container center-0'>
          <Image src={SetemailImage} alt="Set your password" width={104} height={104} /></div>

          <h1 className=" mt-3 text-center font-bold  text-black">
            Set new password        </h1>
          <h1 className=" mt-1 text-center font-latin font-size:  text-black">
            Your new password must be different
          </h1>
          <h1 className=" mt-1 text-center font-latin font-size:  text-black">
            to previously used password
          </h1>
          <div className="mb-6">

            <input
              className="appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="New Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">

            <input
              className="appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className='flex items-center mb-6 justify-center'>
           <button className=" bg-blue-500 hover:bg-sky-700 text-white  justify-centerflex items-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" > <a href="/forgotpage/Forgotpassstep4"> Reset password</a></button>
          </div>
        </div> </form></div>
  );
};

export default Setpassword;