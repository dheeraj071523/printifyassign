import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold">Printify Clone</div>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-gray-600 hover:text-black">
              Catalog
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-600 hover:text-black">
              Pricing
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-600 hover:text-black">
              Blog
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-600 hover:text-black">
              About Us
            </a>
          </li>
        </ul>
        <div className="space-x-4">
          <button className="text-gray-600 hover:text-black">Log in</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
