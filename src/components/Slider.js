import React from 'react'
import bgimage from '../img/bg/img1.jpg'
import img from '../img/slimage/img1.png'
const Slider = () => {
    
    
      return (
      <div style={{backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover', // Make the image cover the entire background
        backgroundPosition: 'center', // Center the image
        height: '60vh', // Set the height of the component
        width: '100%', // Set the width of the component
        }}>
            <div className='flex'>
                <div className='w-1/3 h-full'></div>

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
        </div>)
}

export default Slider
