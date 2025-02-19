import React from "react";
import { Check, ChevronRight } from "react-feather";

const section7 = () => {
  return (
    <div className="relative bg-[url(src/images/CTABg.svg)] h-full w-full bg-no-repeat bg-[length:100%_100%] ">
      <div className="w-11/12 max-w-[1080px] mx-auto relative py-20 flex flex-row items-center justify-between ">
        {/* left  */}
        <div className="flex flex-col gap-5 mt-12 max-w-[600px]">
          <h2 className="text-white font-bold text-2xl">Supercharge your business with Razorpay</h2>
          <div className="w-6 h-1 bg-lightGreen"></div>
          <p className="text-white max-w-[450px]">
            Sign up now to experience the future of payments and offer your customers the best checkout experience.
          </p>

          <ul className="gap-x-11 gap-y-3 flex flex-row flex-wrap text-white">
            <li className="flex">
              <Check className="stroke-lightGreen " />
              <span>Quick Onboarding</span>
            </li>
            <li className="flex">
              <Check className="stroke-lightGreen" />
              <span>Access to entire product suite</span>
            </li>
            <li className="flex ">
              <Check className="stroke-lightGreen" />

              <span>API access</span>
            </li>
            <li className="flex ">
              <Check className="stroke-lightGreen" />

              <span>24x7 support</span>
            </li>
          </ul>
          <button className="flex items-center justify-center bg-white w-fit text-lightBlue py-[14px] px-[18px] rounded-md font-bold hover:bg-lightBlue-500 hover:text-white transition-all duration-200 ">
            Sign Up
            <ChevronRight className="stroke-3" />
          </button>
        </div>

        {/* right  */}
        <img src="src\images\ctaImg.svg" alt="" className="h-[282px] w-[282px] mt-16 pt-3 hidden lg:block"/>
      </div>
    </div>
  );
};

export default section7;
