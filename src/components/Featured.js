import React from 'react'
import img1 from '../img/featured/img1.jpg'
import img2 from '../img/featured/img2.jpg'
import img3 from '../img/featured/img3.jpg'
import img4 from '../img/featured/img4.jpg'
import img5 from '../img/featured/img5.jpg'
import img6 from '../img/featured/img6.jpg'
import img7 from '../img/featured/img7.jpg'
import img8 from '../img/featured/img8.jpg'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import img from '../img/featured1/img1.jpg'
import { IoIosGitCompare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
const Featured = () => {
    const product = [
        {id:1, category:'Tab' , name:'Samsung Tab A43' ,img:img1, price:685.00},
        {id:2, category:'Tablet' , name:'Tablet white EliteBook Revolve 810 G2' ,img:img2, price:1999.00},
        {id:3, category:'Tab' , name:'Purple Tablet S2' ,img:img3, price:685.00},
        {id:4, category:'Laptop' , name:'Macbook 100S 64GB' ,img:img4, price:685.00},
        {id:5, category:'Microphone' , name:'NX MINI F1 SMART NX' ,img:img5, price:685.00},
        {id:6, category:'Monitor' , name:'Full Color Pro M452dn' ,img:img6, price:685.00},
        {id:7, category:'Gaming' , name:'Destiny Special Edition' ,img:img7, price:685.00},
        {id:8, category:'Camera' , name:'Camera C430W 4k Waterproof' ,img:img8, price:685.00}
    ]
  return (
    <div className='h-auto container mx-auto px-20 mt-3 py-4'>
        <div className='flex '>
            
            <div className='w-1/5 border-blue-700 border-[3px] rounded-xl p-4 ' >
            <div className='h-24  flex items-center justify-between'> 
                <p className='text-xl'>Special <br/> Offer</p>
                <div className='bg-blue-700  h-20 w-20 rounded-full flex items-center justify-center text-white flex-col'>
                    <p className='text-center'>Save</p>
                    <p className='font-bold text-xl'>$120</p>
                </div>
            </div>
            <div className='h-52 mt-3'>
                <img src={img} className='w-full h-full  object-cover rounded-xl '/>
                </div>
                <p className='text-sm text-blue-700 text-center mt-5 font-semibold'>Dell XPS 13 9315 Touch i5 <br/> 8GB RAM, 256GB SSD with <br />Microsoft Office</p>
                <p className='text-gray-400 text-center mt-2 '><span className='line-through'>$99.00 </span><span className='text-red-600 text-2xl'>$79.00</span></p>
                <div className='text-gray-400 text-xs  flex items-center justify-between'>
                    <p>Available:<span className='font-semibold text-gray-700'>6</span></p>
                    <p>Already Sold:<span className='font-semibold text-gray-700'>28</span></p>
                </div>
               
                <div className='h-5 rounded-full w-full bg-slate-300 mt-3'>
                    <div className='w-1/4 bg-primary h-full rounded-full'></div>
                </div>
                <p className='text-gray-400 text-center text-xs mt-3'>Hurry Up! Offer end In:</p>
                <div className='flex items-center space-x-2 justify-center mt-2' >
                    <div>
                        <div className='bg-slate-300 h-10 w-10 flex items-center justify-center'>
                            <p className='text-xl'>00</p>
                        </div>
                       
                    </div>
                    <p className='text-2xl'>:</p>
                    <div>
                        <div className='bg-slate-300 h-10 w-10 flex items-center justify-center'>
                            <p className='text-xl'>00</p>
                        </div>
                       
                    </div>
                    <p className='text-2xl'>:</p>
                    <div>
                        <div className='bg-slate-300 h-10 w-10 flex items-center justify-center'>
                            <p className='text-xl'>00</p>
                        </div>
                       
                    </div>
                     
                </div>
                <div className='flex items-center  space-x-8 px-[4.3rem] text-xs text-secondary'>
                    <p>HOURS</p>
                    <p>MINS</p>
                    <p>SECS</p>
                </div>
            </div>

            {/* products */}
            <div className='w-4/5 px-4'>
                <div className='border-b-[1px] border-b-slate-400  '>
                    <ul className='flex items-center justify-center space-x-5'>
                    <li className='hover:font-bold hover:border-b-[3px] hover:border-b-blue-700 py-2'>Featured</li>
                    <li className='hover:font-bold hover:border-b-[3px] hover:border-b-blue-700 py-2'>On Sale</li>
                    <li className='hover:font-bold hover:border-b-[3px] hover:border-b-blue-700 py-2'>Top Rated</li>
                    </ul>
                   
                </div>
                <div className='mt-5 grid grid-cols-4 gap-10'>
      {product.map((product) => (
        <div
          className='border-r-[1px] border-r-slate-300 px-4 h-auto shadow-lg transform transition-transform hover:scale-110 hover:shadow-2xl relative group'
          key={product.id}
        >
          <div className='h-20'>
            <p>{product.category}</p>
            <p className='text-blue-700 font-bold text-sm'>{product.name}</p>
          </div>

          <div className='h-56'>
            <img src={product.img} className='h-full object-cover' alt={product.name} />
          </div>

          <div className='flex items-center justify-between mt-2'>
            <p>${product.price}</p>
            <div>
              <MdOutlineAddShoppingCart className='bg-blue-700 p-1 font-bold h-6 w-6 text-white rounded-full' />
            </div>
          </div>
          <div className='px-4 border-t-[1px] border-slate-300 text-slate-400 flex space-x-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity absolute bg-white w-full left-0'>
            <div className='flex space-x-1 items-center text-sm'>
              <IoIosGitCompare />
              <p>Compare</p>
            </div>
            <div className='flex space-x-1 items-center text-sm'>
              <CiHeart />
              <p>Add to Wishlist</p>
            </div>
          </div>
          {/* Hidden by default, shown on hover */}
        
        </div>
      ))}
    </div>
            </div>
        </div>
 
    </div>
  )
}

export default Featured
