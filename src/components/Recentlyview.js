import React, { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdOutlineAddShoppingCart } from 'react-icons/md';
import img1 from '../img/featured/img1.jpg';
import img2 from '../img/featured/img2.jpg';
import img3 from '../img/featured/img3.jpg';
import img4 from '../img/featured/img4.jpg';
import img5 from '../img/featured/img5.jpg';
import img6 from '../img/featured/img6.jpg';
import img7 from '../img/featured/img7.jpg';
import img8 from '../img/featured/img8.jpg';
import { IoIosGitCompare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
const Recentlyview = () => {
  const product = [
    { id: 1, category: 'Tab', name: 'Samsung Tab A43', img: img1, price: 685.00 },
    { id: 2, category: 'Tablet', name: 'Tablet white EliteBook Revolve 810 G2', img: img2, price: 1999.00 },
    { id: 3, category: 'Tab', name: 'Purple Tablet S2', img: img3, price: 685.00 },
    { id: 4, category: 'Laptop', name: 'Macbook 100S 64GB', img: img4, price: 685.00 },
    { id: 5, category: 'Microphone', name: 'NX MINI F1 SMART NX', img: img5, price: 685.00 },
    { id: 6, category: 'Monitor', name: 'Full Color Pro M452dn', img: img6, price: 685.00 },
    { id: 7, category: 'Gaming', name: 'Destiny Special Edition', img: img7, price: 685.00 },
    { id: 8, category: 'Camera', name: 'Camera C430W 4k Waterproof', img: img8, price: 685.00 }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 5; // Number of items to show at a time

  const handleNext = () => {
    if (startIndex + 1 < product.length - itemsToShow + 1) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className='py-10 px-20'>
      <div className='flex items-center justify-between border-b-[1px] border-b-gray-300'>
        <p className='text-gray-400 hover:border-b-2 hover:border-b-primary py-2'>Recently Views</p>
        <div className='flex items-center space-x-3'>
          <MdKeyboardArrowLeft
            className={`text-gray-400 hover:text-gray-700 cursor-pointer ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handlePrevious}
          />
          <MdKeyboardArrowRight
            className={`text-gray-400 hover:text-gray-700 cursor-pointer ${startIndex + 1 >= product.length - itemsToShow + 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleNext}
          />
        </div>
      </div>
      <div className='flex py-5'>
        {product.slice(startIndex, startIndex + itemsToShow).map((item) => (
          <div key={item.id} className='border-r-[1px] border-r-slate-300 hover:border-r-0 px-4 w-80 shadow-lg transform transition-transform  hover:shadow-2xl relative group'>
            <div className='h-16'>
              <p className='text-xs text-gray-400'>{item.category}</p>
              <p className='text-xs font-bold text-primary mt-3'>{item.name}</p>
            </div>
            <div className='h-32'>
              <img src={item.img} alt={item.name} className='h-full object-cover' />
            </div>
            <div className='flex items-center justify-between h-16'>
              <p>${item.price.toFixed(2)}</p>
              <div>
                <MdOutlineAddShoppingCart className='bg-blue-700 p-1 font-bold h-6 w-6 text-white rounded-full' />
              </div>
            </div>
            <div className='px-4 border-t-[1px] border-slate-300 text-slate-400 flex space-x-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity absolute bg-white w-full left-0 '>
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
        ))}
      </div>
    </div>
  );
};

export default Recentlyview;
