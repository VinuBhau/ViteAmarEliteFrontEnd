import axios from 'axios';
import React, { useRef } from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; // Importing an icon from react-icons

const FinancialYear = () => {

    const financialyear = useRef("");
    const annualmaintainence = useRef("")
  
    const setmaintainenceamount = () => {
      let annualmaintainence1 = annualmaintainence.current.value;
  
      const payload4 = {
        annualmaintainence: annualmaintainence1
      }
      axios.post("https://amarelitebackend.onrender.com/api/admin/setannualmaintainence", payload4)
        .then((response) => {
          alert("Annual Maintainence amount set successfully!");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
  
    const setFinancialYear = () => {
      let financialyear1 = financialyear.current.value;
  
      const payload = {
        financialyear: financialyear1,
      };
      axios
        .post("https://amarelitebackend.onrender.com/api/admin/setfinancialyear", payload)
        .then((response) => {
          alert("Financial year set successfully!");
        })
        .catch((error) => {
          console.log(error);
        });
    };


  return (
<div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 relative px-4 sm:px-6 lg:px-8">
  {/* Decorative Background Pattern */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
  </div>

  {/* Responsive Container */}
  <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 w-full max-w-4xl z-10">
    
    {/* Set Financial Year Card */}
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 flex items-center space-x-3">
        <FaCalendarAlt className="text-blue-500" />
        <span>Set Financial Year</span>
      </h2>

      {/* Input Field */}
      <div className="mb-4">
        <label htmlFor="financialyear" className="block text-sm font-medium text-gray-700 mb-2">
          Financial Year
        </label>
        <input
          ref={financialyear}
          id="financialyear"
          placeholder="Enter Financial Year"
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={setFinancialYear}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-500 flex items-center justify-center space-x-2"
      >
        <FaCalendarAlt className="text-white" />
        <span>Set Financial Year</span>
      </button>
    </div>

    {/* Set Maintenance Amount Card */}
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 flex items-center space-x-3">
        <span>Set Maintenance Amount</span>
      </h2>

      {/* Input Field */}
      <input
        type="text"
        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700 mb-4"
        ref={annualmaintainence}
        placeholder="Enter maintenance amount"
      />

      {/* Submit Button */}
      <button
        onClick={setmaintainenceamount}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-500 flex items-center justify-center space-x-2"
      >
        <span>Set Maintenance Amount</span>
      </button>
    </div>
  </div>
</div>

  )
}

export default FinancialYear

