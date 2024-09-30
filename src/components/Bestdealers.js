import React from 'react'
import img1 from '../img/bestsellers/img1.jpg'
import img2 from '../img/bestsellers/img2.jpg'
import img3 from '../img/bestsellers/img3.jpg'
import img4 from '../img/bestsellers/img4.jpg'
import img5 from '../img/bestsellers/img5.jpg'
import img6 from '../img/bestsellers/img6.jpg'
import img7 from '../img/bestsellers/img7.jpg'
import img8 from '../img/bestsellers/img8.jpg'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
const Bestdealers = () => {
  const product =[
    {id:1,name:'Tablet Air 3 WiFi 64GB Gold',category:'Tablet',image:img1,price:629.00},
    {id:2,name:'Tablet Air 3 WiFi 64GB Gold',category:'Tablet',image:img2,price:629.00},
    {id:3,name:'Tablet Air 3 WiFi 64GB Gold',category:'Tablet',image:img3,price:629.00},
    {id:4,name:'Tablet Air 3 WiFi 64GB Gold',category:'Tablet',image:img4,price:629.00},
    {id:5,name:'Tablet Air 3 WiFi 64GB Gold',category:'Tablet',image:img5,price:629.00},
    {id:6,name:'Tablet Air 3 WiFi 64GB Gold',category:'Tablet',image:img6,price:629.00},
    {id:7,name:'Tablet Air 3 WiFi 64GB Gold',category:'Tablet',image:img7,price:629.00},
    {id:8,name:'Tablet Air 3 WiFi 64GB Gold',category:'Tablet',image:img8,price:629.00},

  ]
  return (
    <div className='container px-20 py-10 h-auto '>
    <div className=' border-b-2 border-b-gray-300 flex items-center justify-between '>
        <p className='text-gray-500 text-xl hover:font-bold hover:text-gray-700 hover:border-b-2 hver: border-b-primary py-5'>Bestsellers</p>
        <ul className='flex space-x-5'>
            <li className='text-gray-500  hover:font-bold hover:text-gray-700 hover:border-2 hver: border-primary rounded-full py-1 px-5 '>Top20</li>
            <li className='text-gray-500  hover:font-bold hover:text-gray-700 hover:border-2 hver: border-primary rounded-full py-1 px-5 '>Phones & Tablet</li>
            <li className='text-gray-500  hover:font-bold hover:text-gray-700 hover:border-2 hver: border-primary rounded-full py-1 px-5 '>Laptops & Computers</li>
            <li className='text-gray-500  hover:font-bold hover:text-gray-700 hover:border-2 hver: border-primary rounded-full py-1 px-5 '>Video Cameras</li>
        </ul>
    </div>
    <div className='grid grid-cols-4 gap-10  py-10'>
      {product.map((product) =>(
        <div className='border-r-[1px] border-r-slate-300 px-4 h-40 flex space-x-3 items-center shadow-lg transform transition-transform hover:scale-110 hover:shadow-2xl relative group'>
          <div>
            <img src={product.image} />
          </div>
          <div className=''>
            <p className='text-gray-400'>{product.category}</p>
            <p className='text-primary mt-3'>{product.name}</p>
            <div className='flex justify-between items-center mt-3'>
              <p className='text-gray-700'>${product.price}</p>
              <MdOutlineAddShoppingCart className='bg-blue-700 p-1 font-bold h-6 w-6 text-white  rounded-full '   />
            </div>
            <div className='px-4 border-t-[1px] border-slate-300 text-slate-400 flex space-x-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity absolute bg-white w-full left-0 pl-24'>
            <div className='flex space-x-1 items-center justify-between text-sm'>
              <IoIosGitCompare />
              <p>Compare</p>
            </div>
            <div className='flex space-x-1 items-center text-sm'>
              <CiHeart />
              <p>Add to Wishlist</p>
            </div>
          </div>
          </div>
        </div>
      ))}
      
    
    </div>
    </div>
  )
}

export default Bestdealers