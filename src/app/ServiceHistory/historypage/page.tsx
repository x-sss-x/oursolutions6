"use client"
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import React from 'react';

const page = () => {
  return (
    <div> <div className="flex-cols pl-[500px] items-center justify-center pt-12">
   <a href="/ServiceHistory/Pastservices"> <button className=" border-2 flex items-center w-[360px] space-x-40 border-sky-600 bg-gray-200 hover:border-gray-500 text-black py-2 px-4 ">
      <span>Past services list</span>
      <ArrowRightIcon className="h-5 w-5" />
    </button></a>
    <br/>
    <button className=" border-2 flex items-center space-x-[140px] border-sky-600 bg-gray-200 w-[360px]  text-black py-2 px-4  ml-[80px]">
      <span>Todays services list</span>
      <ArrowRightIcon className="h-5 w-5" />
    </button>
  </div></div>
  )
}

export default page;