import React from 'react';

const Hero = () => {
  return (
    <div className="mx-auto px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col-reverse md:flex-row items-center md:justify-between gap-12 pb-16 min-h-[80vh] mt-16" id='Home'>
      
      {/* Text Content */}
      <div className="w-full md:w-1/2 max-md:mb-8 text-center md:text-left">
  <p className="flex justify-center md:justify-start items-center gap-1 text-gray-500 text-xs mb-2">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3 0a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H4v1a1 1 0 0 1-2 0V4H1a1 1 0 0 1 0-2h1V1a1 1 0 0 1 1-1m0 10a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H4v1a1 1 0 1 1-2 0v-1H1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 1-1m7-10a1 1 0 0 1 .967.744L12.146 5.2 15.5 7.134a1 1 0 0 1 0 1.732l-3.354 1.935-1.18 4.455a1 1 0 0 1-1.933 0L7.854 10.8 4.5 8.866a1 1 0 0 1 0-1.732l3.354-1.935L9.034.744A1 1 0 0 1 10 0" fill="#6B7280" />
    </svg>
    Aalochana is a Pune-based documentation and research centre for women.
  </p>

  <h1 className="font-extrabold text-4xl md:text-6xl text-gray-900 mb-4 leading-tight">
    Aalochana
    <br /> centre of
    <span className="inline-block bg-orange-400 text-white font-extrabold px-3 -mb-1 border-b-2 border-indigo-700">
      documentation & research
    </span>
    <br />
    of women
  </h1>
  
   <br />

  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 justify-center md:justify-start">
    <a className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded shadow hover:bg-blue-700 transition" href="#">
      Join Now
    </a>
    <a className="text-sm font-normal flex items-center justify-center space-x-1 hover:underline" href="#">
      <span>Learn more</span>
      <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5.5h13.09M8.948 1l5.143 4.5L8.948 10" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  </div>
</div>


      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/rightSideImage.svg"
          alt="rightSideImage"
        />
      </div>
    </div>
  );
};

export default Hero;
