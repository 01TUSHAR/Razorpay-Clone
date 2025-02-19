import React from 'react'
import { ChevronLeft, ChevronRight } from "react-feather";


const section6 = () => {
  return (
    <div className='relative'>
      <div className='w-11/12 max-w-[1300px] mx-auto relative py-20'>
        <img src="src\images\feature-section1-dottedrows.png" alt="" className='absolute w-[200px] top-[8rem] left-[2rem] -z-10'/>
        <h2 className='font-bold text-2xl text-deepBlueHead text-center'>An Experience <br />
        People Love to Talk About</h2>
        <div className="w-6 h-1 bg-lightGreen mx-auto my-4 mb-10"></div>

        

            {/* left-button  */}
            <button className='h-[100px] w-[100px] bg-[#f4f8ff] absolute rounded-full left-0 top-1/2  flex justify-center items-center '>
                <div className='h-[65px] w-[65px] bg-[#f4f8ff]  rounded-full mix-blend-multiply flex justify-center items-center '>
                    <ChevronLeft className='stroke-[5px] w-6 md:w-10 md:h-10 text-gray-400'/>
                </div>
            </button>


            {/* right-button  */}
            <button className='h-[100px] w-[100px] bg-[#f4f8ff] absolute rounded-full right-0 top-1/2  flex justify-center items-center '>
                <div className='h-[65px] w-[65px] bg-[#f4f8ff]  rounded-full mix-blend-multiply flex justify-center items-center '>
                    <ChevronRight className='stroke-[5px] w-6 md:w-10 md:h-10 text-gray-400'/>
                </div>
            </button>

            {/* main-content  */}

            <div className='flex flex-col max-w-[960px] items-center mx-auto my-16 xl:space-x-[10rem] xl:flex-row'>
                <img src="src\images\testimonial.jpg" alt="" loading='lazy' className='h-[320px] w-[320px] rounded-xl'/>

                <div className='max-w-[400px] '>
                    <img src="src\images\quotes.svg" alt="" className='w-[35px] h-[40px]  -mb-2'/>
                    <p className='text-3xl font-extralight'>Readymade closed wallet solution for quick refunds</p>
                    <a href="#" className='text-greyText italic underline'>Learn More</a>
                    <p className='font-extrabold text-2xl'>Lorem dolor</p>
                    <p className='font-medium'>CE0, XYZ Engineering Company</p>
                    <img src="src\images\fake-company-logo.png" alt="" className='w-[80px] h-[40px]'/>
                </div>
            </div>


            {/* 6 dot div  */}
            <div className='flex flex-row mx-auto space-x-2 justify-center'>
                <div className=' h-[10px] w-[10px] rounded-full bg-gray-300'></div>
                <div className=' h-[10px] w-[10px] rounded-full bg-lightBlue-300'></div>
                <div className=' h-[10px] w-[10px] rounded-full bg-gray-300'></div>
                <div className=' h-[10px] w-[10px] rounded-full bg-gray-300'></div>
                <div className=' h-[10px] w-[10px] rounded-full bg-gray-300'></div>
                <div className=' h-[10px] w-[10px] rounded-full bg-gray-300'></div>
            </div>

      </div>
    </div>
  )
}

export default section6
