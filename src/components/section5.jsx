import React from "react";

const section5 = () => {
  return (
    <div className="bg-[#f5f8fe] relative  -mt-52 pt-20 pb-12   overflow-hidden">
      <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4 flex flex-col md:flex-row spa">
        {/* left  */}
        <div className="flex flex-col justify-center w-full md:max-w-[calc(100%-500px)] ">
          <h2 className="font-bold text-2xl leading-[1.2] text-deepBlueHead ">
            Join the 50,00,000 businesses using Razorpay
          </h2>
          <div className="w-6 h-1 bg-lightGreen my-4 mb-10"></div>
          <p className=" max-w-[450px] text-greyText">
            We make it easier for you to focus on building great products while
            we work on simplifying your payments. Become one of us by joining
            thousands of our happy users and simplify the online payment
            experience for your customers.
          </p>
          <p className="mt-6 max-w-[450px] text-greyText">
            Focus on your business while we handle the complexities of payments
            for you.
          </p>
        </div>

        {/* right  */}

        <div className="h-[500px] w-[500px] relative overflow-y-hidden">
          <img src="src\images\comanies.png" alt="" className="absolute right-20 w-[500px] animate-moveup"/>
          <div className="bg-linear-180 from-[#f4f8ff] to-[#fff0] absolute w-full h-[150px] top-0"></div>
          <div className="bg-linear-0 from-[#f4f8ff] to-[#fff0] absolute w-full h-[150px] bottom-0"></div>
        </div>
      </div>
    </div>
  );
};

export default section5;
