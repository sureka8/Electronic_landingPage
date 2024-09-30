import React, { useState } from 'react'
import logo from '../img/logo/logo.png'
import { IoMdMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FiRefreshCcw } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShopping } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
const Menu = () => {
  const [click,setClick] = useState(false)
  return (
    <div>
    <nav className='container mx-auto  px-20 py-4 flex items-center justify-between '>
      <div className='h-14 w-36'>
        <img src={logo} />
      </div>
      <div>
        <IoMdMenu size={30} />
      </div>
      <div className='h-10 w-3/5 bg-blue-500 rounded-full flex items-center'>
      <div className='w-11/12 bg-white h-9  ml-[0.15rem] rounded-l-full  flex items-center px-8 justify-between'>
      <p className='text-gray-400 text-sm'>Search for products</p>
      <p className='text-gray-400 text-sm'>All Categories</p>
      </div>
      <div  className='w-1/12 text-center '>
      <IoIosSearch size={20} className='ml-7 text-white text-lg' />
      </div>
      </div>
      <div className='flex text-lg space-x-5'  >
        <FiRefreshCcw  />
        <FaRegHeart />
        <AiOutlineShopping />
      </div>
    </nav>
    <div className='container mx-auto px-20  flex items-center space-x-14'>
      
      <div className='w-56 bg-blue-500 text-white text-lg font-semibold py-2 px-8 flex items-center space-x-3 rounded-t-md '
      onClick={() => setClick(true)}>
         
         <div className='flex '>
         
         <IoMdMenu/> </div> 
        <p >products</p>
      </div>
      <ul  className='flex space-x-8 items-center'>
        <li>Brands</li>
        <li>Products</li>
        <li>Gift Cards</li>
        <li>Accessories</li>
        <li>Hot Deals</li>
        <li>Electronics Store</li>
      </ul>

    </div>
    {click && (
      <div className='top-10 bg-slate-100 h-96 left-10'>gjh</div>
    )}
    </div>
  )
}

export default Menu
