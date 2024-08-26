import React from 'react'
import img1 from '../img/dealimg/img1.png'
import img2 from '../img/dealimg/img2.png'
import img3 from '../img/dealimg/img3.png'
import img4 from '../img/dealimg/img4.png'
import { IoIosArrowForward } from "react-icons/io";
const Deal = () => {
  return (
    <div>
       <div className='container mx-auto px-20 grid grid-cols-4 py-8' >
      <div className='bg-slate-300 h-32 w-72 flex items-center justify-center px-2 space-x-3'>
        <div className='w-1/2 ' >
        <img src={img1} alt="" />
        </div>
        <div className='w-1/2'>
        <p>CATCH BIG <span className='font-bold'><br/>DEALS </span>ON THE CAMERAS</p>
        <div className='mt-3 flex items-center space-x-3'>
          <p className='text-xs font-bold'>Shop Now</p>
          <IoIosArrowForward  className='bg-blue-700 p-1 text-white  rounded-full'/>
        </div>
        </div>
      </div>
      <div className='bg-slate-300 h-32 w-72 flex items-center justify-center px-2 space-x-3'>
        <div className='w-1/2 ' >
        <img src={img2} alt="" />
        </div>
        <div className='w-1/2'>
        <p>CATCH BIG <span className='font-bold'><br/>DEALS </span>ON THE CAMERAS</p>
        <div className='mt-3 flex items-center space-x-3'>
          <p className='text-xs font-bold'>Shop Now</p>
          <IoIosArrowForward  className='bg-blue-700 p-1 text-white  rounded-full'/>
        </div>
        </div>
      </div>
      <div className='bg-slate-300 h-32 w-72 flex items-center justify-center px-2 space-x-3'>
        <div className='w-1/2 ' >
        <img src={img3} alt="" />
        </div>
        <div className='w-1/2'>
        <p>CATCH BIG <span className='font-bold'><br/>DEALS </span>ON THE CAMERAS</p>
        <div className='mt-3 flex items-center space-x-3'>
          <p className='text-xs font-bold'>Shop Now</p>
          <IoIosArrowForward  className='bg-blue-700 p-1 text-white  rounded-full'/>
        </div>
        </div>
      </div>
      <div className='bg-slate-300 h-32 w-72 flex items-center justify-center px-2 space-x-3'>
        <div className='w-1/2 ' >
        <img src={img4} alt="" />
        </div>
        <div className='w-1/2'>
        <p>CATCH BIG <span className='font-bold'><br/>DEALS </span>ON THE CAMERAS</p>
        <div className='mt-3 flex items-center space-x-3'>
          <p className='text-xs font-bold'>Shop Now</p>
          <IoIosArrowForward  className='bg-blue-700 p-1 text-white  rounded-full'/>
        </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Deal
