import React from "react";
import { FaUser } from "react-icons/fa";
import { auth } from "../../../Firebaseconfig";
import { NavLink } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { MdCategory } from "react-icons/md";
import { FiPlus } from "react-icons/fi";

function VerticalNavbar() {
  return (
    <nav className="fixed bg-[#] inset-0 w-1/6  h-screen shadow-lg flex flex-col justify-between  rounded-tr-xl rounded-br-3xl">
      <div className="w-full ">
        <ul className="flex-col  items-center justify-center w-full m-auto">
          <li className=" text-[#2C7865] p-4 flex items-center justify-center text-xl border-[#2C7865] border-b-2">
            <FaUser />
            <span className="pl-2">{auth?.currentUser?.displayName}</span>
          </li>
          <li className="flex">
            <NavLink
              to={"/admin/Addcategory"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? `bg-[#C6EBC5] text-[#2C7865] border-[#2C7865] border-l-4`
                    : ` text-[#2C7865]`
                } w-full flex items-center justify-start hover:bg-[#2C7865] hover:text-[#ebf1f1] p-3`
              }
            >
              <MdCategory /> <span className="ml-2">Add Categories</span>
            </NavLink>
          </li>
          <li className="flex mt-2">
            <NavLink
              to={"/admin/dashboard/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? `bg-[#C6EBC5] text-[#2C7865] p-3 border-[#2C7865] border-l-4`
                    : ` text-[#2C7865] p-3`
                } w-full flex items-center justify-start hover:bg-[#2C7865] hover:text-[#ebf1f1]  p-3`
              }
            >
              <FiPlus /> <span className="ml-2"> Add Products</span>
            </NavLink>
          </li>
          {/* <li className="flex mt-2">
            <NavLink
              to={"/admin/dashboard/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? `bg-[#FEFDED] text-[#2C7865] p-3 border-[#2C7865] border-l-4`
                    : ` text-[#2C7865] p-3`
                } w-full hover:bg-[#2C7865] hover:text-[#ebf1f1]  p-3 `
              }
            >
              Home
            </NavLink>
          </li> */}
        </ul>
      </div>
      <div className="">
        <ul className="text-center flex items-center justify-center h-full">
          <li className="flex w-full items-center justify-center cursor-pointer text-[#ebf1f1] bg-[#2C7865] hover:  m-2 p-3">
            <span className="pr-2">Log Out</span>
            <LuLogOut />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default VerticalNavbar;
