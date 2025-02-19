import React from "react";
import { ChevronRight } from "react-feather";

const footer = () => {
  return (
    <div className="relative bg-linear-to-r from-[#eef9fe] to-[#edf7ff] -mt-[400px] -z-10">
      <div className="relative w-11/12 max-w-[1080px] mx-auto flex flex-col items-center space-y-4 justify-between pt-[400px] pb-[40px] lg:flex-row">
        {/* Column DIV1  */}
        <div className="flex flex-col  max-w-[260px] ">
          <img
            src="src\images\razorpay.svg"
            alt=""
            className="w-[120px] h-[24px]"
          />
          <p className="text-greyText text-xs my-3">
            Razorpay is the only payments solution in India that allows
            businesses to accept, process and disburse payments with its product
            suite. It gives you access to all payment modes including credit
            card, debit card, netbanking, UPI and popular wallets including
            JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.
          </p>
          <p className="text-greyText text-xs my-3">
            RazorpayX supercharges your business banking experience, bringing
            effectiveness, efficiency, and excellence to all financial
            processes. With RazorpayX, businesses can get access to
            fully-functional current accounts, supercharge their payouts and
            automate payroll compliance.
          </p>
          <p className="text-greyText text-xs my-3">
            Manage your marketplace, automate bank transfers, collect recurring
            payments, share invoices with customers and avail working capital
            loans - all from a single platform. Fast forward your business with
            Razorpay.
          </p>
          <p className="text-greyText text-[0.625rem] my-3">
            Disclaimer: The RazorpayX powered Current Account and VISA corporate
            credit card are provided by RBI licensed banks. Your RazorpayX
            powered account is provided by our partner bank, in accordance with
            RBI regulations. RazorpayX itself is not a bank and doesn't hold or
            claim to hold a banking license.
          </p>
          <p className="font-bold text-grey2 uppercase">SUBSCRIBE TO OUR NEWSLETTER</p>
          <form
            action=""
            className="relative bg-white w-[260px] mt-2 mb-4"
          >
            <input type="email" placeholder="Your email address" className="pr-13 border-gray-300 outline-lightBlue focus:outline-lightBlue placeholder:text-sm py-2 px-3 border rounded-sm transition-all duration-200" />
            <button className="h-[90%] bg-white absolute right-[1.5px] top-1/2 -translate-y-1/2 z-10 text-sm font-bold text-lightBlue-300 flex rounded-sm items-center hover:text-lightBlue-500 transition-all duration-200">
            Subscribe <ChevronRight />
            </button>
          </form>

          <div className="flex items-start space-x-4">
            <img
              src="src\images\footer-certificate-1.png"
              alt=""
              loading="lazy"
              className="w-[92px] h-[40px] cursor-pointer"
            />
            <img
              src="src\images\footer-certificate-2.jpg"
              alt=""
              loading="lazy"
              className="w-[122px] h-[80px] cursor-pointer"
            />
          </div>
        </div>

        {/* Column DIV2  */}

        <div className="flex flex-col space-y-4 justify-between md:flex-row md:space-x-4">
          {/* sub-div1  */}
          <div className="flex flex-col justify-center  space-y-3">
            {/* sub-sub-div1  */}
            <div>
              <p className="font-bold text-grey2 mb-1 uppercase">
                banking plus
              </p>
              <ul className="space-y-2  font-medium">
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  RazorpayX
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Current Accounts
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Payouts
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Payout Links
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Corporate Credit Card
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  View Live Demo
                  <span className="bg-green-400 text-white rounded-sm text-sm font-bold p-1">
                    NEW
                  </span>
                </li>
              </ul>
            </div>
            {/* sub-sub-div2  */}

            <div>
              <p className="font-bold text-grey2 mb-1 uppercase">lending</p>
              <ul className="space-y-2 font-medium ">
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Razorpay Capital
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Instant Settlements
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Working Capital Loans
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Marketplace Instant Settlements
                </li>
              </ul>
            </div>

            {/* sub-sub-div3  */}
            <div>
              <p className="font-bold text-grey2 mb-1 uppercase">
                risk & fraud
              </p>
              <ul className="space-y-2 font-medium ">
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Thirdwatch
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  PrePay CoD
                  <span className="bg-green-400 text-white rounded-sm text-sm font-bold p-1">
                    NEW
                  </span>
                </li>
              </ul>
            </div>

            {/* sub-sub-div4  */}
            <div>
              <p className="font-bold text-grey2 mb-1 uppercase">
                become a partner
              </p>
              <ul className="space-y-2 font-medium ">
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Refer and Earn
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Onboarding APIs{" "}
                </li>
              </ul>
            </div>

            {/* sub-sub-div5  */}
            <div>
              <p className="font-bold text-grey2 mb-1 uppercase">more</p>
              <ul className="space-y-2  font-medium">
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Route
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Invoices
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Freelancer Payments
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  International
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Flash Checkouts
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">UPI</li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  ePOS
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Checkout Demo
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  RazorpayX Payroll
                </li>
              </ul>
            </div>
          </div>

          {/* sub-div2  */}
          <div className=" flex flex-col  space-y-3">
            {/* sub-sub-div1  */}
            <div>
              <p className="font-bold text-grey2 mb-1 uppercase">
                accept payments
              </p>
              <ul className="space-y-2  font-medium">
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Payment Gateway
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Payment Pages
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Payment Links
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  QR Codes
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Subscriptions
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Smart Collector
                </li>
              </ul>
            </div>
            {/* sub-sub-div2  */}

            <div >
              <p className="font-bold text-grey2 mb-1 uppercase">
                developers
              </p>
              <ul className="space-y-2 font-medium ">
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Docs
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Integrations
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  API Reference
                </li>
              </ul>
            </div>

            {/* sub-sub-div3  */}
            <div >
              <p className="font-bold text-grey2 mb-1 uppercase">resources</p>
              <ul className="space-y-2 font-medium ">
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Blogs
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Customer Stories
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Events
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Chargeback Guide
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Settlement Guide
                </li>
              </ul>
            </div>

            {/* sub-sub-div4  */}
            <div>
              <p className="font-bold text-grey2 mb-1 uppercase">Solutions</p>
              <ul className="space-y-2 font-medium ">
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Education
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  E-commerce
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Saas
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  BFSI
                </li>
              </ul>
            </div>

            {/* sub-sub-div5  */}
            <div >
              <p className="font-bold text-grey2 mb-1 uppercase">
                free Tools
              </p>
              <ul className="space-y-2  font-medium">
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  GST Calculator
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Online TDS Payment
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  GST Number Search
                  <span className="bg-green-400 text-white rounded-sm text-sm font-bold p-1">
                    NEW
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* sub-div3  */}
          <div className=" flex flex-col  space-y-3">
            {/* sub-sub-div1  */}
            <div>
              <p className="font-bold text-grey2 mb-1 uppercase">company</p>
              <ul className="space-y-2  font-medium">
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  About Us
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Careers{" "}
                  <span className="bg-green-400 text-white rounded-sm text-sm font-bold p-1">
                    We're hiring!
                  </span>
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Terms of Use
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Privacy Policy
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Grievance Redressal
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Responsible Disclosure
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Partners
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  White Papers
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Corporate Information
                </li>
              </ul>
            </div>
            {/* sub-sub-div2  */}

            <div >
              <p className="font-bold text-grey2 mb-1 uppercase">
                help & support
              </p>
              <ul className="space-y-2 font-medium ">
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Support
                </li>
                <li className=" text-lightBlue-500 hover:text-greyBlue">
                  Knowledge base
                </li>
              </ul>
            </div>

            {/* sub-sub-div3  */}
            <div>
              <p className="font-bold text-grey2 mb-1 uppercase mt-6">
                Find us online
              </p>
              <div className="flex flex-row mt-4 space-x-4">
                <img src="src\images\facebook-icon.svg" alt="" />
                <img src="src\images\twitter-icon.svg" alt="" />
                <img src="src\images\instagram-icon.svg" alt="" />
                <img src="src\images\github-icon.svg" alt="" />
                <img
                  src="src\images\linkedin-icon.svg"
                  alt=""
                  className="h-[24px] w-[24px]"
                />
              </div>
            </div>

            {/* sub-sub-div4  */}
            <div >
              <p className="font-bold text-grey2 mb-1 mt-6 uppercase">
                REGD. OFFICE ADDRESS
              </p>
              <p className="text-sm mt-4 ">
                Razorpay Software Private Limited, <br />
                 1st Floor, SJR Cyber, <br />
                  22
                Laskar Hosur Road, Adugodi,<br />
                 Bengaluru, 560030, <br />
                  Karnataka, India <br />
                CIN: U72200KA2013PTC097389
              </p>
           

            {/* sub-sub-div5  */}
                <div className="mt-6">

                <p className="text-sm">© Razorpay 2022</p>
                <p className="text-sm">All Rights Reserved</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
