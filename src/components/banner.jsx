import React from "react";

const banner = () => {
  return (
    <div className="realtive flex flex-row justify-center overflow-hidden lg:justify-between">

        <div className=" hidden lg:flex flex-row ">
      <div className="h-[65px] w-[40px] bg-lightBlue skew-x-[30deg] -ml-5"></div>
      <div className="h-[65px] w-[250px] bg-[#f4f8ff] mix-blend-multiply  skew-x-[30deg]">
        <div className="h-[65px] w-[130px] bg-[#f4f8ff] mix-blend-multiply ">
          <div className="h-[65px] w-[65px] bg-[#f4f8ff] mix-blend-multiply ">
            <div className="h-[65px] w-[15px] bg-[#f4f8ff] mix-blend-multiply "></div>
          </div>
        </div>
      </div>
      </div>

      <div className="flex flex-row justify-center items-center py-3 px-2 space-x-4">
        <p className="font-bold text-sm">RazorpayX Payroll: 3 Clicks, Payroll Fixed! Automate Payroll Now</p>
        <button className="bg-lightBlue text-white py-1 px-2 min-w-[100px] rounded-md font-bold hover:bg-lightBlue-500 transition-all duration-200 ">
          Sign Up
        </button>
      </div>


<div className="hidden lg:flex flex-row">


      <div className="h-[65px] w-[250px] bg-[#f4f8ff] mix-blend-multiply skew-x-[30deg] rotate-180">
        <div className="h-[65px] w-[130px] bg-[#f4f8ff] mix-blend-multiply ">
          <div className="h-[65px] w-[65px] bg-[#f4f8ff] mix-blend-multiply ">
            <div className="h-[65px] w-[15px] bg-[#f4f8ff] mix-blend-multiply "></div>
          </div>
        </div>
      </div>
      <div className="h-[65px] w-[40px] bg-lightBlue skew-x-[30deg] -mr-5"></div>
</div>


    </div>
  );
};

export default banner;
