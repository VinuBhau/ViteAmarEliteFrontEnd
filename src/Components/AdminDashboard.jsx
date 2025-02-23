
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import '../output.css';
import AddApartmentDetails from "./AddApartmentDetails";
import AddEmployee from "./AddEmployee";
import AddOwner from "./AddOwner";
import FinancialExpenses from "./FinancialExpenses";
import FinancialYear from "./FinancialYear";
const AdminDashboard = () => {

    const logout = () => {
   
        window.location.href = "/login";
    };


  return (
   
        <div className="dashboard-container">
          {/* Heading */}
          <h1 className="dashboard-title">Admin Dashboard</h1>
    
          {/* Navbar */}
          <nav className="navbar">
            <div className="nav-links">
              {[
                { path: "/add-flat-owner", text: "Add Flat Owner" },
                { path: "/add-employee", text: "Add Employee" },
                { path: "/financial-year", text: "Set Financial Year" },
                { path: "/add-apartment", text: "Add Apartment" },
                { path: "/financial-expenses", text: "Financial Expenses" },
              ].map((item) => (
                <Link key={item.path} to={item.path} className="nav-button">
                  {item.text}
                </Link>
              ))}
    
              {/* Logout Button */}
              <button className="logout-button" onClick={logout}>
                Logout
              </button>
            </div>
          </nav>
    
          {/* Dashboard Routes */}
          <div className="dashboard-content">
            <Routes>
              <Route path="/add-owner" element={<AddOwner />} />
              <Route path="/add-employee" element={<AddEmployee />} />
              <Route path="/add-apartment" element={<AddApartmentDetails />} />
              <Route path="/financial-expenses" element={<FinancialExpenses />} />
              <Route path="/financial-year" element={<FinancialYear />} />
            </Routes>
          </div>
        </div>
      
  )
}

export default AdminDashboard
