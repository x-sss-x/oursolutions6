"use client"
import Image from 'next/image';
import lockImage from '../../public/Images/Icons/lock.png';
import { FormEvent, useState } from 'react';

const Forgot = () => {
  const [email, setEmail] = useState('');
  function handleSubmit(_event: FormEvent<HTMLFormElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="flex justify-center  pt-14 h-screen">
      <form className="w-full max-w-md bg-white  rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h1 className=" mt-2 text-center font-bold text-black">

          Forgot password?
        </h1><div className='pt-2 pb-2 pl-20 container center-0'><div className='pt-2 pb-2 pl-12 container center-0'>
        <Image src={lockImage} alt="lock image" width={104} height={104} className='justify-center'/></div></div>
        <h1 className=" mt-2 text-center font-light text-black">

          No worries, we'll send you a reset instructions

        </h1>
        <div className="mb-6">

          <input
            className="appearance-none border rounded w-full bg-gray-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='flex items-center mb-6 justify-center'>
          <button
            className=" bg-blue-500 hover:bg-sky-700 text-white   font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            <a href='/forgotpage/Forgotpassstep2'>Reset Password</a>
          </button>

        </div>
      </form></div>
  );
};

export default Forgot;