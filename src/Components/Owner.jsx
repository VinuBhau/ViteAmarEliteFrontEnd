import React from "react";
import ComplaintFeedback from "./Complaint";
import Maintainance from "./Maintenance";
import FinancialExpenses from "./FinancialExpenses"
import {Router, Link, Routes, Route } from 'react-router-dom';
import Financialdata from "./FinancialData";
import OwnerServices from "./OwnerServices";
import TempDisplay from "./TempDisplay";
import Gasensorinfo from "./GasSensorInfo";

const Owner =()=> {
  return (
    <div>
        <h1>Work In Progress... This page will be updated Soon</h1>
      <nav className="bg-gray-800 p-4 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-yellow-400">Owner Dashboard</h1>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/viewexpenses"
                className="p-2 rounded hover:bg-gray-700"
              >
                View Expenses
              </Link>
            </li>
            <li>
              <Link
                to="/lodgecomplaint"
                className="p-2 rounded hover:bg-gray-700"
              >
                Lodge Complaint
              </Link>
            </li>
            <li>

              <Link
                to="/OwnerServices"
                className="p-2 rounded hover:bg-gray-700"
              >
                Owner Services
              </Link>
            </li>
            <li>
              <Link
                to="/paymaintainence"
                className="p-2 rounded hover:bg-gray-700"
              >
                Pay Maintenance
              </Link>
            </li>
            <li>
              <Link
                to="/expensegraphicview"
                className="p-2 rounded hover:bg-gray-700"
              >
                Expense Graphic View
              </Link>
            </li>
            <li>
              <Link
                to="/viewtemp"
                className="p-2 rounded hover:bg-gray-700"
              >
                View temperature
              </Link>
            </li>
            <li>
              <Link
                to="/gasinfo"
                className="p-2 rounded hover:bg-gray-700"
              >
                View gas info
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Owner;
