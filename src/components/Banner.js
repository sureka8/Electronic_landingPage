import React from 'react'
import img from '../img/banner/img1.png'
const Banner = () => {
  return (
    <div className='cntainer px-20   h-screen ' style={{backgroundImage: `url(${img})`,
    backgroundSize: 'cover', // Make the image cover the entire background
    backgroundPosition: 'center', // Center the image
    height: '15vh', // Set the height of the component
    width: '100%', // Set the width of the component
    }}>
        <div className='flex py-5 space-x-5   items-center '>
     <p className='text-gray-400 text-center'>SHOP AND <span className='text-gray-800'>SAVE BIG</span>  ON HOTTEST TABLETS</p> 
     <button className='bg-primary py-2 px-5 rounded-md'> 
        <p className='text-white text-xs'>STARTING AT</p>
        <p className='text-xs text-white'>$ <span className=''>79</span>99</p>
     </button>
     </div>  
    </div>
  )
}

export default Banner