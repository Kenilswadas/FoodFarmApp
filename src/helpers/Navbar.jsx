import React from "react";
import logo from "./Images/7630077.jpg";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { auth } from "../Firebaseconfig";

function Navbar({ UserName }) {
  return (
    <>
      <nav className="bg-gradient-to-r from-[#90D26D] to-[#D9EDBF] sticky top-0 shadow-2xl ml-10 mr-10">
        <ul className="flex items-center justify-around p-2">
          <div className="w-3/4">
            <li className="text-green-500 flex pl-10">
              <img src={logo} alt="logo" className="w-12 h-auto" />
            </li>
          </div>
          <div className="flex items-center justify-between w-1/4">
            <li className="text-green-500 flex items-center w-2/4 ml-8">
              <FaUser size={20} />
              <p className="text-[#2C7865] pl-2">
                {UserName ? UserName : localStorage.getItem("UseName")}
              </p>
            </li>
            <li className="text-green-500 pr-10 flex items-center">
              <FaCartShopping size={20} />
              <p className="text-[#2C7865] pl-2">Cart</p>
            </li>
          </div>
        </ul>
      </nav>
      <nav className="bg-[#ebf1f1] sticky top-0 shadow-2xl border-t border-green-600 ml-10 mr-10">
        <ul className="flex items-center justify-around p-2">
          <li className="text-green-500 flex">All Category</li>
          <li className="text-green-500 flex items-center w-2/4">Home</li>
          <li className="text-green-500">Home</li>
          <li className="text-green-500">Home</li>
          <li className="text-green-500">Home</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
