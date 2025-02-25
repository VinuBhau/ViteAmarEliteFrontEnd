import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


const Secretary =()=> {

  const logout = () => {
    window.location.href = '/'
  }

  return (

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 text-gray-900">
        <header className="py-4 bg-blue-700 text-white shadow-md">
          <div className="container mx-auto flex justify-between items-center px-6">
            <h1 className="text-3xl font-semibold">Secretary Dashboard</h1>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          </div>
        </header>
        <nav className="py-4 bg-blue-600 text-white">
          <div className="container mx-auto flex flex-wrap justify-center gap-6">
            {[{ path: "/add-expense", label: "Add Expense" },
              { path: "/send-reminder", label: "Send Reminder" },
              { path: "/make-salary", label: "Make Salary" },
              { path: "/raise-demand", label: "Raise Demand" },
              { path: "/view-paymentdues", label: "View Payment Dues" },
              { path: "/view-lodgedcomplaints", label: "View Complaints" }]
              .map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  {label}
                </Link>
              ))}
          </div>
        </nav>
        
      </div>

  );
}

export default Secretary;
