import React from "react";
import { Check, ChevronRight } from "react-feather";

const section3 = () => {
  return (
    <div className="relative">
      <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4 overflow-hidden">
        <img
          src="src\images\feature-section1-dottedrows.png"
          alt=""
          loading="lazy"
          className="absolute w-[233px] left-[300px] -top-[6rem] -z-10 "
        />
        <img
          src="src\images\feature-section1-dottedrows.png"
          alt=""
          loading="lazy"
          className="absolute w-[233px] -right-[3.5rem] -top-[6rem] -z-10"
        />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-10 gap-x-4 realtive z-50">
          {/* item1  */}
          <div className="relative flex items-center z-0">
            <h2 className="text-deepBlueHead font-extrabold text-4xl leading-[3.375rem]">
              New in the<span className="text-lightBlue-500"> Razorpay</span>
              <br /> Product Suite
            </h2>
          </div>

          {/* CARD1 */}

          <div className="bg-white p-10 bg-[url(src/images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(src/images/instant-settlement-bghover.svg)]">
            <img
              src="src\images\razorpayXicon.svg"
              alt=""
              className="w-10 h-10"
            />
            <h3 className="text-lg font-bold pt-4">Corporate Cards</h3>
            <p className="py-3 text-greyText leading-normal">
              Simplify your recurring, international and tean expenses with
              saving on every spend. Save upto 10 lacs every month.
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

          {/* CARD2 */}
          <div className="bg-white p-10 bg-[url(src/images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(src/images/instant-settlement-bghover.svg)]">
            <img
              src="src\images\razorpayXicon.svg"
              alt=""
              className="w-10 h-10"
            />
            <h3 className="text-lg font-bold pt-4">Corporate Cards</h3>
            <p className="py-3 text-greyText leading-normal">
              Simplify your recurring, international and tean expenses with
              saving on every spend. Save upto 10 lacs every month.
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
          {/* CARD3 */}
          <div className="bg-white p-10 bg-[url(src/images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(src/images/instant-settlement-bghover.svg)]">
            <img
              src="src\images\razorpayXicon.svg"
              alt=""
              className="w-10 h-10"
            />
            <h3 className="text-lg font-bold pt-4">Corporate Cards</h3>
            <p className="py-3 text-greyText leading-normal">
              Simplify your recurring, international and tean expenses with
              saving on every spend. Save upto 10 lacs every month.
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
          {/* CARD4 */}
          <div className="bg-white p-10 bg-[url(src/images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(src/images/instant-settlement-bghover.svg)]">
            <img
              src="src\images\razorpayXicon.svg"
              alt=""
              className="w-10 h-10"
            />
            <h3 className="text-lg font-bold pt-4">Corporate Cards</h3>
            <p className="py-3 text-greyText leading-normal">
              Simplify your recurring, international and tean expenses with
              saving on every spend. Save upto 10 lacs every month.
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
          {/* CARD5 */}
          <div className="bg-white p-10 bg-[url(src/images/instant-settlement-bg.svg)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200 hover:bg-[url(src/images/instant-settlement-bghover.svg)]">
            <img
              src="src\images\razorpayXicon.svg"
              alt=""
              className="w-10 h-10"
            />
            <h3 className="text-lg font-bold pt-4">Corporate Cards</h3>
            <p className="py-3 text-greyText leading-normal">
              Simplify your recurring, international and tean expenses with
              saving on every spend. Save upto 10 lacs every month.
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
  );
};

export default section3;
