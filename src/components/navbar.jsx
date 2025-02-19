import React from 'react'
import { Menu } from 'react-feather'

const navbar = () => {
  return (
    <div className="navBar bg-deepBlue px-2">
        <div className="relative max-w-[1080px] mx-auto flex items-center justify-between ">
          {/* logo  */}
          <a href="/" className="cursor-pointer py-7 pr-7">
            <img
              src="src\images\razor.svg"
              width="125px"
              height="30px"
              alt="razorpayLogo"
            />
          </a>
          <ul className="gap-6 hidden lg:flex">
            <li className="text-white py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Payments</a>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200 "></div>
            </li>
            <li className="text-white py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Banking</a>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200 "></div>
            </li>
            <li className="text-white py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Corporate Card</a>
            </li>
            <li className="text-white py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Payroll</a>
            </li>
            <li className="text-white py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Resources</a>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200 "></div>
            </li>
            <li className="text-white py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Support</a>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200 "></div>
            </li>
            <li className="text-white py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="#">Pricing</a>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200 "></div>
            </li>
          </ul>
          <div className="gap-6 hidden lg:flex">
            <img
              src="src\images\indian-flag.svg"
              alt="flag"
              width="28px"
              height="20px"
            />
            <button className="py-3 px-4 text-white border-lightBlue border rounded-sm text-sm font-bold">
              Log in
            </button>
            <button className="py-3 px-4 text-lightBlue300 bg-white border rounded-sm text-sm font-bold transition-all duration-200 hover:text-lightBlue-500 ">
              Sign Up
            </button>

          </div>
            <button className='block mr-2 lg:hidden' > <Menu className='stroke-4 stroke-white'/></button>
        </div>
      </div>
  )
}

export default navbar
