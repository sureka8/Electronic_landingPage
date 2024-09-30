import React ,{useState}from 'react'
import bgimage from '../img/bg/img1.jpg'
import img from '../img/slimage/img1.png'
import logo from '../img/logo/logo.png'
import { IoMdMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FiRefreshCcw } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShopping } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
const Slider = () => {
    
    const [click,setClick] = useState(true)
      return (
        <div>
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
      
      <div className='w-64 bg-blue-500 text-white text-lg font-semibold py-2 px-8 flex items-center space-x-3 rounded-t-md '
      onClick={() => setClick(!click)}>
         
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
   
    </div>
       
      <div style={{backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover', // Make the image cover the entire background
        backgroundPosition: 'center', // Center the image
        height: '60vh', // Set the height of the component
        width: '100%', // Set the width of the component
        }}>
            <div className='flex'>
                <div className='w-1/3 h-full px-20 pb-5'>
                {click && (
      <div className=' bg-white w-64 h-full py-2'>
        <ul className=''>
            <li className='border-b-[1px] border-b-slate-400 flex justify-between py-2'>
                <p>Mobiles & Tablets</p>
                <MdKeyboardArrowRight className='text-slate-400 font-bold text-xl' /></li>
                <li className='border-b-[1px] border-b-slate-400 flex justify-between py-2'>
                <p>Home & Kitchen Appliances</p>
                <MdKeyboardArrowRight className='text-slate-400 font-bold text-xl' /></li>
                <li className='border-b-[1px] border-b-slate-400 flex justify-between py-2'>
                <p>TV, Home Audio Video</p>
                <MdKeyboardArrowRight className='text-slate-400 font-bold text-xl' /></li>
                <li className='border-b-[1px] border-b-slate-400 flex justify-between py-2'>
                <p>Refrigerators & A/C</p>
                <MdKeyboardArrowRight className='text-slate-400 font-bold text-xl' /></li>
                <li className='border-b-[1px] border-b-slate-400 flex justify-between py-2'>
                <p>Fitness Equipments</p>
                <MdKeyboardArrowRight className='text-slate-400 font-bold text-xl' /></li>
                <li className='border-b-[1px] border-b-slate-400 flex justify-between py-2'>
                <p>Furniture</p>
                <MdKeyboardArrowRight className='text-slate-400 font-bold text-xl' /></li>
                <li className='border-b-[1px] border-b-slate-400 flex justify-between py-2'>
                <p>Motor Bikes & Automobile</p>
                <MdKeyboardArrowRight className='text-slate-400 font-bold text-xl' /></li>
                <li className='border-b-[1px] border-b-slate-400 flex justify-between py-2'>
                <p>Gift Vouchers</p>
                <MdKeyboardArrowRight className='text-slate-400 font-bold text-xl' /></li>
                <li className='border-b-[1px] border-b-slate-400 flex justify-between py-2'>
                <p>Furniture</p>
                <MdKeyboardArrowRight className='text-slate-400 font-bold text-xl' /></li>
                <li className=' flex justify-between py-2'>
                <p>Motor Bikes & Automobile</p>
                <MdKeyboardArrowRight className='text-slate-400 font-bold text-xl' /></li>
               
        </ul>
      </div>
    )}
                </div>

                <div className='w-2/3 flex items-start'>
                <div className='w-2/5 mt-10'>
                <p className='text-5xl capitalize'>THE NEW STANDARD</p>
                <p className='text-xs mt-2 font-bold'>UNDER FAVOURABLE SMARTWATCHES</p>
                <p className='text-sm mt-5'>FROM</p>

                <p className='font-bold text-start '>$ <span className='text-3xl'>749</span>99</p>
                <button className='bg-blue-700 rounded-md px-10 py-2 text-white mt-5'>Buy Now</button>
                <div>
                    <div className='px-8 bg-blue-700 rounded-md'></div>
                </div>
                </div>
                {/* image */}
                <div className='w-3/5'>
                <img src={img} />
                </div>
                </div>
            </div>
        </div>
        </div>)
        
}

export default Slider
