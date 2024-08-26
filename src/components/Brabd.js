import React ,{useState}from 'react'
import img1 from '../img/brands/img1.png'
import img2 from '../img/brands/img2.png'
import img3 from '../img/brands/img3.png'
import img4 from '../img/brands/img4.png'
import img5 from '../img/brands/img5.png'
import img6 from '../img/brands/img6.png'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdOutlineAddShoppingCart } from 'react-icons/md';
const Brabd = () => {
    const brand = [
        {id:1 , img:img1},
        {id:2 , img:img2},
        {id:3 , img:img3},
        {id:4 , img:img4},
        {id:5 , img:img5},
        {id:6 , img:img6}
    ]
    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 4; // Number of items to show at a time
  
    const handleNext = () => {
      if (startIndex + 1 < brand.length - itemsToShow + 1) {
        setStartIndex(startIndex + 1);
      }
    };
  
    const handlePrevious = () => {
      if (startIndex > 0) {
        setStartIndex(startIndex - 1);
      }
    };
  return (
    <div className='container px-20 py-10'>
        <div className=' h-20 border-y-[1px] border-y-slate-300 flex items-center  space-x-5 w-full justify-between'>
          <MdKeyboardArrowLeft  onClick={() => handlePrevious()} /> 
          {brand.slice(startIndex, startIndex + itemsToShow).map((brand) =>(
            <div className='flex space-x-3'>
              <img src={brand.img} />
            </div>
          ))}
          <MdKeyboardArrowRight  onClick={() => handleNext()}/>
        </div>

    </div>
  )
}

export default Brabd 