import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-4">
      <div className="flex items-center mr-8">
        <img className="w-12 h-12 mt-1" src="/assets/logo/logo.png" alt="logo" />
        <ul className="flex ml-4">
          <li className="text-black text-sm font-normal px-2 py-1 mx-1 cursor-pointer capitalize rounded hover:bg-gray-200 transition ease-in-out">
            HOME
          </li>
          <li className="text-black text-sm font-normal px-2 py-1 mx-1 cursor-pointer capitalize rounded hover:bg-gray-200 transition ease-in-out">
            SERVICES
          </li>
          <li className="text-black text-sm font-normal px-2 py-1 mx-1 cursor-pointer capitalize rounded hover:bg-gray-200 transition ease-in-out">
            PROJECTS
          </li>
          <li className="text-black text-sm font-normal px-2 py-1 mx-1 cursor-pointer capitalize rounded hover:bg-gray-200 transition ease-in-out">
            FAQs
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex">
          <li className="px-4 py-2 border-2 border-purple-500 text-black font-semibold rounded">
            <button>Contact Us</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
