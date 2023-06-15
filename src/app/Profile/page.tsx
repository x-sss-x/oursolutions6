import ProfilePicture from '@/components/Profilepic'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div><div className="flex justify-center pt-20 item-center"><ProfilePicture /></div>
            <div className="flex justify-center pt-4 item-center">
                <button className="bg-gray-200 text-black  hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit" >Upload new Photo</button></div>
            <div className="flex justify-center pt-4 font-bold item-center">Ram</div>
            <div className="flex justify-between items-center absolute right-1/2 transform translate-x-1/2">
  <Link href="/CustomerUP"><button className="bg-gray-200 text-black hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-1">
    Edit Profile
  </button></Link>
  <button className="bg-gray-200 text-black hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-1">
    Share Profile
  </button>
</div>

        </div>
    )
}

export default page