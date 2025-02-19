import React from 'react'
import { Check, ChevronRight } from "react-feather";


const featureSection = () => {
  return (
    <div>
      {/* feature section  */}
      <section className="relative overflow-hidden">
        <img
          src="src\images\feature-section1-dottedrows.png"
          alt=""
          loading="lazy"
          width="233px"
          height="167px"
          className="absolute -top-[8rem] left-[10rem] inline-block -z-10"
        />

        <img
          src="src\images\feature-section1-dottedrows.png"
          alt=""
          loading="lazy"
          width="233px"
          height="167px"
          className="absolute top-[3rem] right-0 inline-block rotate-180"
        />

        <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
          {/* heading  */}
          <h2 className="font-extrabold text-black text-center text-2xl leading-[1.2]  hidden md:block ">
            Accept Payments with Razorpay Payment Suite
          </h2>
          <h2 className="font-extrabold text-black text-center text-4xl leading-[1.2]  md:hidden ">
            Explore Razorpay Payment Suite
          </h2>
          <div className="w-6 h-1 bg-lightGreen mx-auto mt-4 mb-6"></div>

          {/* content  */}
          <div className="w-full min-h-[520px] bg-white flex rounded-md relative p-10 py-12  border border-grey2 ">
            {/* left */}
            <div className="flex flex-col justify-between items-center w-full lg:items-start">
              <h3 className="font-extrabold text-[28px] leading-10 max-w-[500px]">
                Supercharge your business with all-powerfull
                <span className="text-lightBlue"> Payment Gateway</span>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Check className="stroke-lightGreen "/>
                  <span>100+ Payment Methods</span>
                </li>
                <li className="flex items-center space-x-2">
                <Check className="stroke-lightGreen"/>
                  <span>Industry Leading Success Rate</span>
                </li>
                <li className="flex items-center space-x-2">
                <Check className="stroke-lightGreen"/>

                  <span>Superior Checkout Experience</span>
                </li>
                <li className="flex items-center space-x-2">
                <Check className="stroke-lightGreen"/>

                  <span>Easy to Integrate</span>
                </li>
                <li className="flex items-center space-x-2">
                <Check className="stroke-lightGreen"/>

                  <span>Instant Settlements from day 1</span>
                </li>
                <li className="flex items-center space-x-2">
                <Check className="stroke-lightGreen"/>

                  <span>In-depth Reporting and Insights</span>
                </li>
              </ul>
              <i data-feather="circle"></i>

              {/* button and hyperlink */}
              <div className="flex items-center space-x-4">
                <button className="flex items-center justify-center bg-lightBlue w-fit text-white py-[14px] px-[18px] rounded-md font-bold hover:bg-lightBlue-500 transition-all duration-200 ">
                  Sign Up Now
                  <ChevronRight className="stroke-3"/>
                </button>

                {/* hyperlink  */}
                <div className="flex items-center cursor-pointer group">
                  <a href="#" className="font-bold text-lightBlue-500 group-hover:text-greyBlue  transition-all duration-200">Know more</a>
                  <ChevronRight className="w-5 h-5 stroke-3 stroke-lightBlue-500 group-hover:stroke-greyBlue  transition-all duration-200"/>
                </div>
              </div>
            </div>
            <img src="src\images\payment-suite.png" alt="" className="max-w-[600px] absolute right-0 bottom-0 hidden lg:block"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default featureSection
