import React from 'react'
import img1 from '../img/featured/img1.jpg'
import img2 from '../img/featured/img2.jpg'

import img7 from '../img/featured/img7.jpg'
import img3 from '../img/bestdeal/img2.jpg'
import pc1 from '../img/bestdealsmall/img1.jpg'
import pc2 from '../img/bestdealsmall/img2.jpg'
import pc3 from '../img/bestdealsmall/img3.jpg'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
const Bestdeal = () => {
    const product = [
        {id:1, category:'Tab' , name:'Samsung Tab A43' ,img:img1, price:685.00},
        {id:2, category:'Tablet' , name:'Tablet white EliteBook Revolve 810 G2' ,img:img2, price:1999.00},
        {id:3, category:'Laptop' , name:'Dell XPS 13 9315 Touch i5  8GB RAM, 256GB SSD', img:img3, price:685.00},
        {id:4, category:'Tab' , name:'Samsung Tab A43' ,img:img1, price:685.00},
        {id:5, category:'Tablet' , name:'Tablet white EliteBook Revolve 810 G2' ,img:img2, price:1999.00},
        {id:4, category:'Tab' , name:'Samsung Tab A43' ,img:img1, price:685.00},
        {id:7, category:'Gaming' , name:'Destiny Special Edition' ,img:img7, price:685.00},
        {id:8, category:'Tab' , name:'Samsung Tab A43' ,img:img1, price:685.00},
        {id:9, category:'Gaming' , name:'Destiny Special Edition' ,img:img7, price:685.00},
   
    ]
  return (
    <div className='container px-20 py-8 h-auto bg-gray-100'>
        <div className=' border-b-2 border-b-gray-300'>
            <ul className='flex items-center justify-center space-x-8 '>
                <li className='text-gray-500 text-sm hover:font-bold hover:text-gray-700 hover:border-b-2 hver: border-b-primary py-2'>Best Deals</li>
                <li className='text-gray-500 text-sm hover:font-bold hover:text-gray-700 hover:border-b-2 hver: border-b-primary py-2'>TV & Video</li>
                <li className='text-gray-500 text-sm hover:font-bold hover:text-gray-700 hover:border-b-2 hver: border-b-primary py-2'>Cameras</li>
                <li className='text-gray-500 text-sm hover:font-bold hover:text-gray-700 hover:border-b-2 hver: border-b-primary py-2'>Audio</li>
                <li className='text-gray-500 text-sm hover:font-bold hover:text-gray-700 hover:border-b-2 hver: border-b-primary py-2'>Smartphones</li>
                <li className='text-gray-500 text-sm hover:font-bold hover:text-gray-700 hover:border-b-2 hver: border-b-primary py-2'>GPS & Navi</li>
                <li className='text-gray-500 text-sm hover:font-bold hover:text-gray-700 hover:border-b-2 hver: border-b-primary py-2'>Computers</li>
                <li className='text-gray-500 text-sm hover:font-bold hover:text-gray-700 hover:border-b-2 hver: border-b-primary py-2'>Portable Audio</li>
                <li className='text-gray-500 text-sm hover:font-bold hover:text-gray-700 hover:border-b-2 hver: border-b-primary py-2'>Accessories</li>
            </ul>
        </div>
        <div className='grid grid-cols-6 gap-2 py-3'>
            {product.map((product) =>(
                
  <div className={`bg-white h-72 p-2 shadow-lg transform transition-transform hover:scale-110 hover:shadow-2xl relative group ${product.id === 3 ? 'col-span-2 row-span-2 h-auto' : ''}`}>
    <div className='h-20'> <p className='text-secondary text-sm'>{product.category}</p>
    <p className='text-primary text-sm font-bold'>{product.name}</p></div>
   
    <div className={` bg-black ${product.id === 3 ? 'h-96' : 'h-36'}`}>
        <img src={product.img} className='h-full w-full object-cover' />
    </div>
    {product.id == 3 ? 
    <div className='mt-2 px-3'  >
        <div className='flex items-center space-x-3 '>
            <div className='h-16 w-16 border-2 border-gray-300'>
                <img src={pc1} className='h-full w-full  object-cover' />
            </div>
            <div className='h-16 w-16 border-2 border-gray-300'>
                <img src={pc2} className='h-full w-full  object-cover' />
            </div>
            <div className='h-16 w-16 border-2 border-gray-300'>
                <img src={pc3} className='h-full w-full  object-cover' />
            </div>
        </div>
        <div className='mt-2 flex items-center justify-between'>
        <p className='text-gray-700'>${product.price}</p>
        <div className='bg-blue-700 p-1 py-2 h-7 w-40 text-white  rounded-full flex items-center justify-center '>
        <MdOutlineAddShoppingCart  />
        <p>Add to Cart</p>
        </div>
        </div>
    </div> : <div className=' h-14  flex items-center justify-between'>
        <p className='text-gray-700'>${product.price}</p>
        
        <MdOutlineAddShoppingCart className='bg-blue-700 p-1 font-bold h-7 w-7 text-white  rounded-full ' />
        </div>}

        <div className='px-4 border-t-[1px] border-slate-300 text-slate-400 flex space-x-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity  bg-white w-full left-0'>
            <div className='flex space-x-1 items-center text-sm'>
              <IoIosGitCompare />
              <p>Compare</p>
            </div>
            <div className='flex space-x-1 items-center text-sm'>
              <CiHeart />
              <p>Add to Wishlist</p>
            </div>
          </div>
  </div>

            ))}
          
        </div>
    </div>
  )
}

export default Bestdeal