import React, { useState } from 'react';

const DonationBox = () => {
  const [frequency, setFrequency] = useState('monthly');
  const [amount, setAmount] = useState(25);

  const handleAmountClick = (value) => {
    setAmount(value);
  };

  return (
    <div className="bg-[#cfd6ed] p-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 rounded-2xl min-h-[400px]">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-xl font-medium text-gray-800 mb-2">
          More than 122 million girls are out of school today.
        </p>
        <p className="text-md text-gray-700 font-semibold mb-4">
          Donate today to keep girls learning.
        </p>
        <a href="#" className="text-sm text-blue-800 font-bold hover:underline">
          LEARN MORE
        </a>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full">
        {/* Toggle Buttons */}
        <div className="flex space-x-2 mb-3">
          <button
            onClick={() => setFrequency('onetime')}
            className={`px-4 py-3 text-sm font-semibold border border-blue-800 w-1/2 rounded-md hover:bg-blue-900 hover:text-white  transition-colors duration-200 ${frequency === 'onetime' ? 'bg-white text-blue-800' : 'bg-white text-blue-800'}`}
          >
            ONE TIME
          </button>
          <button
            onClick={() => setFrequency('monthly')}
            className={`px-4 py-3 text-sm font-semibold w-1/2 rounded-md ${frequency === 'monthly' ? 'bg-blue-800 text-white' : 'bg-white border border-blue-800 text-blue-800'}`}
          >
            MONTHLY
          </button>
        </div>

        {/* Amount Buttons */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[25, 50, 100, 250].map((val) => (
            <button
              key={val}
              onClick={() => handleAmountClick(val)}
              className={`px-4 py-3 text-sm font-semibold rounded-md border border-blue-800 hover:bg-blue-900 hover:text-white ${amount === val ? 'bg-blue-800 text-white' : 'bg-white text-blue-800'}`}
            >
              &#8377;{val}
            </button>
          ))}
        </div>

        {/* Input Box */}
        <div className="flex items-center border-t border-blue-800 pt-2 mb-2">
          <span className="text-blue-800 text-xl mr-2">&#8377;</span>
          <input
            type="number"
            className="flex-1 px-3 py-3 border border-blue-800 rounded-md text-blue-800 text-sm"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <span className="ml-2 text-lg text-blue-800">&#8377;</span>
        </div>

        {/* Submit Button */}
        <button className="w-full border border-blue-800 text-blue-800 py-3 text-sm font-semibold rounded-md">
          DONATE &#8377;{amount} {frequency === 'monthly' ? 'MONTHLY' : 'ONE TIME'}
        </button>
      </div>
    </div>
  );
};

export default DonationBox;
