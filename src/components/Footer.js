import React from 'react'
import logo from '../img/logo/logo.png'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='py-10 container px-20 flex space-x-10 justify-between h-auto'> 
    <div>
    <div className='h-14 w-36'>
        <img src={logo} />
      </div>
      <div className='mt-5 flex space-x-3 items-center'>
        <TfiHeadphoneAlt  size={34} className='text-primary'/>
        <p><span className='text-xs text-gray-400'>Got Questions? call us 24/7!</span><br/> +01 123 456 789</p>
      </div>
      <div className='mt-5'>
        <p className='text-sm font-bold'>Contact info</p>
        <p className='text-sm'>123, Your Street, Your City, <br/> Your Country</p>
      </div>
      <div className='mt-8 flex space-x-6'>
 <FaFacebookF />
 <FaInstagram />
 <FaYoutube />
 <FaLinkedinIn />
      </div>
    </div>
    <div>
        <p className='font-bold'>About </p>
        <ul className='mt-3 flex flex-col space-y-3'>
            <li>About Us</li>
            <li>Deals</li>
            <li>Contact Us</li>
            <li>Brands</li>
            <li>Career</li>
            <li>Locations</li>
        </ul>
    </div>
    <div>
    <p className='font-bold'>Categories </p>
        <ul className='mt-3 flex flex-col space-y-3'>
            <li>Mobiles</li>
            <li>Kitchen Appliance</li>
            <li>TV, Home Audio Video</li>
            <li>Refrigerators & A/C</li>
            <li>Fitness Equipments</li>
            <li>Furniture</li>
        </ul>
    </div>
    <div>
    <p className='font-bold'>Support</p>
        <ul className='mt-3 flex flex-col space-y-3'>
            <li>My Account</li>
            <li>Order Tracking</li>
            <li>Wishlist</li>
            <li>Return</li>
            <li>Privacy Policy</li>
            <li>Terms And Conditions</li>
        </ul>
    </div>
    <div>
    <p className='font-bold'>Brands </p>
        <ul className='mt-3 flex flex-col space-y-3'>
            <li>Samsung</li>
            <li>Huawei</li>
            <li>Dell</li>
            <li>Apple</li>
            <li>MSI</li>
            <li>Asus</li>
        </ul>
    </div>
    </div>
  )
}

export default Footer