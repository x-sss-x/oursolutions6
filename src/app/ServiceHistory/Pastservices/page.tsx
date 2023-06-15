"use client"

import PastServiceHistory from '@/components/PastServiceHistory'
import SearchBar from '@/components/SearchBar'

import React from 'react'

const page = () => {
  return (
    <div>
        <div className="flex items-center pt-4 justify-center">
            <SearchBar placeholder={''}/>
        </div>
       <a href="/ServiceHistory/CustomerReq"> <div className="flex items-center pt-8  justify-center">
            <PastServiceHistory />
        </div></a>
    </div>
  )
}

export default page