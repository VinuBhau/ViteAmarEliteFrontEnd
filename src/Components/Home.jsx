
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Information from "./Information";
import Contact from "./Contact";
import axios from "axios";
import Test from "./test";
import { FaHome, FaInfoCircle, FaPhone, FaSignInAlt, FaBars, FaBuilding } from "react-icons/fa";


const Home = () => {

    const [apartmentName, setApartmentname] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    useEffect(() => {
      axios
        .get("https://amarelitebackend.onrender.com/api/getAptname")
        .then((response) => {
          setApartmentname(response.data[0].Apartmentname);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);


  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
    {/* Navbar */}
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-8">
        <h1 className="text-3xl font-semibold tracking-wider text-blue-400 font-custom-font">
          {apartmentName} Apartment Management
        </h1>
        {/* Menu Button */}
        <button 
          className="lg:hidden text-gray-300 hover:text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars className="h-6 w-6" />
        </button>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8 text-lg font-medium">
          <Link to="/test" className="text-gray-300 hover:text-white transition duration-300 flex items-center space-x-2">
            <FaHome className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition duration-300 flex items-center space-x-2">
            <FaInfoCircle className="h-5 w-5" />
            <span>About</span>
          </Link>
          <Link to="/information" className="text-gray-300 hover:text-white transition duration-300 flex items-center space-x-2">
            <FaBuilding className="h-5 w-5" />
            <span>Information</span>
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300 flex items-center space-x-2">
            <FaPhone className="h-5 w-5" />
            <span>Contact</span>
          </Link>
          <Link to="/login" className="text-gray-300 hover:text-white transition duration-300 flex items-center space-x-2">
            <FaSignInAlt className="h-5 w-5" />
            <span>Login</span>
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-700 text-white p-4 space-y-4">
          <Link to="/test" className=" text-gray-300 hover:text-white transition duration-300 flex items-center space-x-2">
            <FaHome className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link to="/about" className=" text-gray-300 hover:text-white transition duration-300 flex items-center space-x-2">
            <FaInfoCircle className="h-5 w-5" />
            <span>About</span>
          </Link>
          <Link to="/information" className=" text-gray-300 hover:text-white transition duration-300 flex items-center space-x-2">
            <FaBuilding className="h-5 w-5" />
            <span>Information</span>
          </Link>
          <Link to="/contact" className=" text-gray-300 hover:text-white transition duration-300 flex items-center space-x-2">
            <FaPhone className="h-5 w-5" />
            <span>Contact</span>
          </Link>
          <Link to="/login" className=" text-gray-300 hover:text-white transition duration-300 flex items-center space-x-2">
            <FaSignInAlt className="h-5 w-5" />
            <span>Login</span>
          </Link>
        </div>
      )}
    </nav>

    {/* Main Content */}
    <div className="flex-grow p-8 bg-gray-100">
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/about" element={<About />} />
        <Route path="/information" element={<Information />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>

    {/* Footer */}
    <footer className="bg-gray-800 text-center py-6 mt-8">
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} {apartmentName}. All rights reserved.
      </p>
    </footer>
  </div>
  )
}

export default Home



