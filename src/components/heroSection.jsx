import React from 'react'

const heroSection = () => {
  return (
    <section className='relative overflow-hidden'>
        <div className="heroSection bg-deepBlue relative overflow-hidden">
          <div className="w-10/12 max-w-[1080px] flex flex-col lg:flex-row justify-between items-center mx-auto">
            {/* left-section  */}
            <div className="hero-left text-white space-y-8">
              <h1 className="font-bold text-[40px] leading-[1.2] text-white">
                Power your finance, grow your business
              </h1>
              <div className="w-6 h-1 bg-lightGreen"></div>
              <p className="text-[18px] text-white leading-7 opacity-70">
                Accept payments fromcustomers, Automate payouts to vendors &
                employees. Never run out of working capital.
              </p>
              <button className="bg-lightBlue text-white py-[14px] px-[18px] rounded-md font-bold hover:bg-lightBlue-500 transition-all duration-200 ">
                Sign Up Now
              </button>
            </div>

            {/* right-section  */}
            <img
              src="src\images\hero-illustration.jpg"
              alt="heroImage"
              className="max-w-[680px]"
            />
          </div>

        </div>
          <div className='h-[150px] w-[103%]'>
            <img src="src\images\hero-shape.svg" alt="" className='w-full' />
          </div>


        </section>
  )
}

export default heroSection
