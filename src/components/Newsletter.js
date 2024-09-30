import React from 'react'
import { FiSend } from "react-icons/fi";
const Newsletter = () => {
  return (
    <div className='bg-red-400  py-3'>
        <div className='container px-20 flex items-center justify-between'>
            <div className='flex items-center text-white space-x-3 text-2xl'>
                <FiSend />
                <p>Sign up to Newsletter</p>
            </div>
            <div className='flex bg-white  w-96 rounded-full'>
                <input type='text' placeholder='Email Address' className='rounded-l-full w-3/4 py-2 px-1' />
                <button className='w-1/4 rounded-r-full bg-black text-white' >Sign Up</button>

            </div>
        </div>
    </div>
  )
}

export default Newsletter