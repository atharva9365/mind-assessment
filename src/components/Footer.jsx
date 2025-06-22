import React from 'react';

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 mt-4">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
           <h1 className="flex text-3xl font-extrabold tracking-wide h-9">
          <span className="text-[#1B2143]">A</span>
          <span className="text-[#F19A8E]">A</span>
          <span className="text-[#1B2143]">L</span>
          <span className="text-[#F27542]">O</span>
          <span className="text-[#1B2143]">C</span>
          <span className="text-[#E0C15A]">H</span>
          <span className="text-[#1B2143]">A</span>
          <span className="text-[#1B2143]">N</span>
          <span className="text-[#E0C15A]">A</span>
        </h1>
          <p className="mt-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/" className="hover:underline">About us</a></li>
              <li><a href="/" className="hover:underline">Contact us</a></li>
              <li><a href="/" className="hover:underline">Privacy policy</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
            <div className="text-sm space-y-2">
              <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
              <div className="flex items-center gap-2 pt-4">
                <input
                  className="border border-gray-500/30 placeholder-gray-500 outline-none w-full max-w-64 h-9 rounded px-2"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-blue-600 w-24 h-9 text-white rounded hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        © 2024 Aalochana. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
