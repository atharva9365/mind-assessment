import React from 'react';

const Contactus = () => {
  return (
    <>
      <div className="text-center py-10" id="Contact">
        <h1 className="text-4xl font-bold text-blue-900 inline-block border-b-4 border-blue-900 pb-2">
          Contact Us
        </h1>
      </div>

      <div className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto bg-[#F9FAFB] text-gray-800 py-10 px-6 md:px-10 rounded-lg  shadow-md">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Column */}
            <div>
              <p className="text-sm mb-6 text-gray-600">
                If you want to join us, donate, or you want to contact us for
                any other reason please do so by using the contact form on the
                right or directly by email.
              </p>

              <div className="mb-6">
                <h3 className="text-green-600 font-bold text-lg mb-1">
                  Call us
                </h3>
                <p className="cursor-pointer">Phone: +91-20-25678133</p>
              </div>

              <div className="mb-6">
                <h3 className="text-green-600 font-bold text-lg mb-1">
                  Write us
                </h3>
                <a href="">
                  <p>alochanapune@gmail.com</p>
                </a>
              </div>

              <div className="mb-6">
                <h3 className="text-blue-800 font-bold text-lg mb-1">
                  Address
                </h3>
                <p>
                  Aalochana Centre for Documentation and Research on Women Flat
                  No. 2, Tungai Apartment 781/4 Shivaji Nagar Gangote <br /> Path
                  (behind Joshi Hospital) <br /> Pune - 411004
                </p>
              </div>

              <div>
                <h3 className="text-blue-800 font-bold text-lg mb-1">
                  Subscribe to newsletter
                </h3>
                <input
                  type="email"
                  placeholder="EMAIL*"
                  className="w-full bg-transparent border-b border-gray-400 py-2 text-sm focus:outline-none"
                />
                <button className="mt-3 px-4 py-2 bg-blue-800 text-white text-xs font-bold hover:bg-cyan-600 transition">
                  SUBSCRIBE
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h2 className="text-3xl font-bold mb-6">GET IN TOUCH</h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-xs mb-1 text-gray-600">
                    NAME*
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-gray-400 py-2 text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs mb-1 text-gray-600">
                    CITY
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-gray-400 py-2 text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs mb-1 text-gray-600">
                    EMAIL*
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-gray-400 py-2 text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs mb-1 text-gray-600">
                    PHONE*
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-gray-400 py-2 text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs mb-1 text-gray-600">
                    MESSAGE*
                  </label>
                  <textarea
                    className="w-full bg-transparent border-b border-gray-400 py-2 text-sm focus:outline-none"
                    rows="3"
                  ></textarea>
                </div>

                <button className="mt-4 px-6 py-2 bg-blue-800 text-white text-sm font-semibold hover:bg-cyan-600 transition">
                  SEND
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p className="mb-2 md:mb-0">
              Join the movement and make a difference!{" "}
              <span className="text-gray-800 font-bold">Donate!</span>
            </p>
            <p>
              Your donation makes our work possible.{" "}
              <span className="text-blue-800">
                Be the change you want to see.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
