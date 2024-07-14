import React from "react";

const Footer = () => {
  return (
    <div className="bg-white m-16 mx-40 p-5 px-3 flex justify-center items-center rounded-lg shadow-md">
      <div className="flex justify-between w-4/5 max-w-screen-lg">
        <div className="flex flex-col">
          <p className="font-medium">Work with us</p>
          <a href="mailto:hello@flowbase.co" className="text-blue-600 hover:underline">hello@flowbase.co</a>
        </div>

        <div className="flex flex-col">
          <p className="font-medium">Follow us</p>
          <div className="flex gap-4 mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Twitter</a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Dribbble</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
          </div>
        </div>

        <div className="flex items-center">
          <img src="/path/to/your/logo.png" alt="Logo" className="w-6 h-6 mr-2" />
          <div className="flex flex-col">
            <p className="font-medium">Portfolio</p>
            <a href="https://flowbase.co" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Atlantis Template By Flowbase</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
