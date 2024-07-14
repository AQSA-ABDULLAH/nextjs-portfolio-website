import React from 'react'

function Navbar() {
  return (
    <nav className='bg-white m-8 mx-40 rounded-full shadow-md'> 
      <div className="flex items-center justify-between px-4 py-2 m-4">
        <div className="flex items-center mr-8">
          <img className="w-12 h-12 mt-1" src="/assets/logo/logo.png" alt="logo" />
          <ul className="flex ml-4">
            <li className="text-black text-sm font-bold px-2 py-2 mx-2 cursor-pointer capitalize rounded hover:bg-yellowCustom transition ease-in-out">
              HOME
            </li>
            <li className="text-black text-sm font-bold px-2 py-2 mx-1 cursor-pointer capitalize rounded hover:bg-yellowCustom transition ease-in-out">
              SERVICES
            </li>
            <li className="text-black text-sm font-bold px-2 py-2 mx-1 cursor-pointer capitalize rounded hover:bg-yellowCustom transition ease-in-out">
              PROJECTS
            </li>
            <li className="text-black text-sm font-bold px-2 py-2 mx-1 cursor-pointer capitalize rounded hover:bg-yellowCustom transition ease-in-out">
              FAQs
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex">
            <li className="px-4 py-2 bg-yellowCustom text-black font-semibold rounded border-none">
              <button>Contact Us</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

