import React from "react";

const NavBar = () => {
  return (
    <>
      <header className="flex flex-row justify-center py-3 bg-blue-500 text-white font-bold text-sm ">
        Free delivery & 40% discount for next 3 orders!Place your 1st order in.
        <span>
          <button className="bg-black hover:bg-white hover:text-black px-3 py-1 rounded-md ml-3 text-white text-xs font-bold">
            Shop Now
          </button>{" "}
        </span>
      </header>

      <div className="flex w-full h-8">
        <div className="flex w-1/2 ml-7 mt-2">
          <a
            href="/"
            className="text-[#9b9b9b] hover:text-[#6f6f6f] px-4 py-3 rounded-md text-sm font-bold"
          >
            FAQ
          </a>
          <a
            href="/about"
            className="text-[#9b9b9b] hover:text-[#6f6f6f] px-4 py-3 rounded-md text-sm font-bold"
          >
            My Account
          </a>
          <a
            href="/contact"
            className="text-[#9b9b9b] hover:text-[#6f6f6f] px-4 py-3 rounded-md text-sm font-bold"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-[#9b9b9b] hover:text-[#6f6f6f] px-4 py-3 rounded-md text-sm font-bold"
          >
            Contact
          </a>
        </div>

        <div className="flex justify-end w-1/2 mr-7 mt-2">
          <a
            href="#"
            className="text-[#9b9b9b] hover:text-[#6f6f6f] px-6 py-3 rounded-md text-sm font-bold"
          >
            Order Tracking
          </a>
          <a
            href="#"
            className="text-[#9b9b9b] hover:text-[#6f6f6f] px-6 py-3 rounded-md text-sm font-bold"
          >
            English
          </a>
          <a
            href="#"
            className="text-[#9b9b9b] hover:text-[#6f6f6f] px-6 py-3 rounded-md text-sm font-bold"
          >
            USD
          </a>
        </div>
      </div>
      <hr className="my-4 mx-12 border-t border-gray-300" />
    </>
  );
};

export default NavBar;
