import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
const Menubar = () => {
  return (
    <div className='py-2 border-b-[1px] border-b-gray-100'>
    <div className='container  mx-auto px-20 flex justify-between items-center '>
     <div>
        <p className='text-gray-400 text-sm'>Welcome to Electronic Store</p>
        </div> 
        <div className='text-gray-600 text-sm flex items-center'>
            <div className='flex items-center space-x-2 border-r-[1px] border-r-gray-200 px-2'>
            <CiLocationOn />
            <p >Store Locator</p>
            </div>
            <div className='flex items-center space-x-2 border-r-[1px] border-r-gray-200 px-2'>
            <TbTruckDelivery />
            <p >Track Your Order</p>
            </div>
            <div className='flex items-center space-x-2 border-r-[1px] border-r-gray-200 px-2'>
            <FaDollarSign />
            <p >USD</p>
            <IoIosArrowDown />
            </div>
            <div className='flex items-center space-x-2 border-r-[1px] border-r-gray-200 px-2'>
           <LuUser2 />
            <p >Register <span className='text-gray-300'>or</span> Sign in</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Menubar
