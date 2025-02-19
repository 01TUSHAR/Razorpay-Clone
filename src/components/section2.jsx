import React from "react";
import { Check, ChevronRight } from "react-feather";

const section2 = () => {
  return (
    <div className="bg-[url(src/images/feature-section-2BG.svg)] h-full w-full bg-no-repeat bg-cover pt-[16rem] pb-[500px] mt-14 overflow-hidden">
      <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
        <h2 className="font-extrabold text-white text-center text-2xl leading-[1.2] ">
          Explore Razorpay Business Banking
        </h2>
        <div className="w-6 h-1 bg-lightGreen mx-auto mt-4 mb-6"></div>

        {/* main-feature-container */}
        <div className="w-full min-h-[440px] flex flex-col relative">
          <img
            src="src\images\x-flame-1.png"
            alt=""
            loading="lazy"
            width="200px"
            className="absolute -top-[142px] -left-[140px]"
          />

          <img
            src="src\images\x-flame-2.png"
            alt=""
            loading="lazy"
            width="270px"
            className="absolute top-[150px] -right-[180px] "
          />

          {/* content-box   */}

          <div className="w-full min-h-[520px] flex rounded-md relative p-10 py-12  border border-grey2 bg-[#181C2E] z-20">
            {/* left */}
            <div className="flex flex-col justify-between w-full space-y-4 ">
              <h3 className="text-white font-extrabold text-[28px] leading-10 max-w-[500px]">
                Manage your company's finances with{" "}
                <img
                  src="src\images\razorpayX.svg"
                  className="inline w-[168px] h-[32px]"
                />
                <span className="text-lightGreen"> Business Banking</span>
              </h3>
              <ul className="space-y-2 text-white">
                <li className="flex items-center space-x-2">
                  <Check className="stroke-lightGreen " />
                  <span>Open a fully digital current account</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="stroke-lightGreen" />
                  <span>Automate payables & compliment payments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="stroke-lightGreen" />

                  <span>Simplify and track spends with Corporate cards</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="stroke-lightGreen" />

                  <span>View financial insights at a glance</span>
                </li>
              </ul>

              {/* button and hyperlink */}
              <div className="flex flex-col justify-start space-y-4 md:flex-row md:space-x-4">
                <button className="flex items-center justify-center bg-lightBlue w-full md:w-fit text-white py-[14px] px-[18px] md:pr-[90px] rounded-md font-bold hover:bg-lightBlue-500 transition-all duration-200 relative">
                  Sign Up Now
                  <div className="w-12 h-[60px] bg-lightGreen absolute right-6 skew-x-[20deg] flex justify-center items-center">
                    <ChevronRight className="stroke-3 -skew-x-[20deg]" />
                  </div>
                </button>

                {/* hyperlink  */}
                <div className="flex items-center cursor-pointer group">
                  <a
                    href="#"
                    className="font-bold text-lightBlue-500 group-hover:text-greyBlue  transition-all duration-200"
                  >
                    Know more
                  </a>
                  <ChevronRight className="w-5 h-5 stroke-3 stroke-lightBlue-500 group-hover:stroke-greyBlue  transition-all duration-200" />
                </div>
              </div>
            </div>
            <img
              src="src\images\buisness-banking.png"
              alt=""
              className="max-w-[600px] absolute right-0 bottom-0 z-10 hidden lg:block"
            />
          </div>

          {/* Cards  */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-10">

            {/* CARD1  */}

            <div className="w-full min-h-[15rem] relative cursor-pointer group">
              <img
                src="src\images\payment-link-icon.svg"
                alt=""
                className="bg-lightBlue absolute right-3 top-3  w-12 h-12 rounded-full  transition-all duration-200 hover:bg-lightBlue-300"
              />

              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] w-full h-full absolute transition-all duration-200 group-hover:shadow-xl "
              >
                <path
                  d="m 0 6 a 6 6 0 0 1 6 -6 h 250.32501220703125 a 16 16 0 0 1 11 5 l 77 77 a 16 16 0 0 1 5 11 v 126 a 6 6 0 0 1 -6 6 h -337.32501220703125 a 6 6 0 0 1 -6 -6 z"
                  fill="#181C2E"
                />
              </svg>

              <img
                src="src\images\features-wave.svg"
                alt=""
                className="absolute right-0 bottom-2  hidden group-hover:block"
              />

              <div className=" absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <h3 className="font-bold text-white leading-[1.2] text-[1.75rem]">
                  Payment Links
                </h3>
                <p className="text-greyText mt-6">
                  Share payments links via anemail, SMS, messenger, chatbot etc.
                  and get paid immediately
                </p>
                <div className="flex items-center cursor-pointer group">
                  <a
                    href="#"
                    className="font-bold text-lightBlue-500  transition-all duration-200"
                  >
                    Know more
                  </a>
                  <ChevronRight className="w-5 h-5 stroke-3 stroke-lightBlue-500   transition-all duration-200" />
                </div>
              </div>
            </div>

            {/* CARD2   */}
            <div className="w-full min-h-[15rem] relative cursor-pointer group">
              <img
                src="src\images\payment-link-icon.svg"
                alt=""
                className="bg-lightBlue absolute right-3 top-3  w-12 h-12 rounded-full  transition-all duration-200 hover:bg-lightBlue-300"
              />

              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] w-full h-full absolute transition-all duration-200 group-hover:shadow-xl "
              >
                <path
                  d="m 0 6 a 6 6 0 0 1 6 -6 h 250.32501220703125 a 16 16 0 0 1 11 5 l 77 77 a 16 16 0 0 1 5 11 v 126 a 6 6 0 0 1 -6 6 h -337.32501220703125 a 6 6 0 0 1 -6 -6 z"
                  fill="#181C2E"
                />
              </svg>

              <img
                src="src\images\features-wave.svg"
                alt=""
                className="absolute right-0 bottom-2  hidden group-hover:block"
              />

              <div className=" absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <h3 className="font-bold text-white leading-[1.2] text-[1.75rem]">
                  Payment Links
                </h3>
                <p className="text-greyText mt-6">
                  Share payments links via anemail, SMS, messenger, chatbot etc.
                  and get paid immediately
                </p>
                <div className="flex items-center cursor-pointer group">
                  <a
                    href="#"
                    className="font-bold text-lightBlue-500  transition-all duration-200"
                  >
                    Know more
                  </a>
                  <ChevronRight className="w-5 h-5 stroke-3 stroke-lightBlue-500   transition-all duration-200" />
                </div>
              </div>
            </div>

            {/* CARD3   */}
            <div className="w-full min-h-[15rem] relative cursor-pointer group">
              <img
                src="src\images\payment-link-icon.svg"
                alt=""
                className="bg-lightBlue absolute right-3 top-3  w-12 h-12 rounded-full  transition-all duration-200 hover:bg-lightBlue-300"
              />

              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] w-full h-full absolute transition-all duration-200 group-hover:shadow-xl "
              >
                <path
                  d="m 0 6 a 6 6 0 0 1 6 -6 h 250.32501220703125 a 16 16 0 0 1 11 5 l 77 77 a 16 16 0 0 1 5 11 v 126 a 6 6 0 0 1 -6 6 h -337.32501220703125 a 6 6 0 0 1 -6 -6 z"
                  fill="#181C2E"
                />
              </svg>

              <img
                src="src\images\features-wave.svg"
                alt=""
                className="absolute right-0 bottom-2  hidden group-hover:block"
              />

              <div className=" absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <h3 className="font-bold text-white leading-[1.2] text-[1.75rem]">
                  Payment Links
                </h3>
                <p className="text-greyText mt-6">
                  Share payments links via anemail, SMS, messenger, chatbot etc.
                  and get paid immediately
                </p>
                <div className="flex items-center cursor-pointer group">
                  <a
                    href="#"
                    className="font-bold text-lightBlue-500  transition-all duration-200"
                  >
                    Know more
                  </a>
                  <ChevronRight className="w-5 h-5 stroke-3 stroke-lightBlue-500   transition-all duration-200" />
                </div>
              </div>
            </div>
            
          </div>
        </div>

          {/* DEMO-BOX  */}
        <div className="w-full flex flex-col space-y-4 items-center justify-evenly rounded-md relative p-10 py-12  border border-grey2 bg-[#181C2E] mt-10 lg:flex-row">
          <p className="text-white text-xl"> Check out the live demo to learn how RazorpayX works.
            <span className="font-bold hidden md:block md:text-center"> No sign-up required!</span>
          </p>

          <button className="flex items-center justify-center bg-lightBlue w-fit text-white py-[14px] px-[18px] pr-[90px] rounded-md font-bold hover:bg-lightBlue-500 transition-all duration-200 relative ">
                  Check out the demo
                  <div className="w-12 h-[60px] bg-lightGreen absolute right-6 skew-x-[20deg] flex justify-center items-center">
                    <ChevronRight className="stroke-3 -skew-x-[20deg]" />
                  </div>
                </button>
        </div>
      </div>
    </div>
  );
};

export default section2;
