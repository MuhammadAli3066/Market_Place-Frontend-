import React from "react";
import * as Unicons from "@iconscout/react-unicons";
const Footer = () => {
  return (
    <>
      <div className=" bg-blue-500 w-screen h-full">
        <div className="w-full h-full ">
          <div className="flex flex-row mt-4 text-sm gap-20">
            <div className="flex-1  justify-start w-1/6 px-4 py-2 ml-10 ">
              <h1 className="font-bold text-lg text-white">
                Learn first about discounts
              </h1>
              <p className="text-sm text-white">
                As well as news, special offers and promotions
              </p>
            </div>

            <div className="flex-1 justify-end w-4/6  px-4 py-2">
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-4/6  px-2 py-3 text-gray-700 rounded-lg border-none leading-tight focus:outline-none"
              ></input>
              <button
                type="submit"
                name="submit"
                className="ml-4 px-6 py-3 rounded-md bg-yellow-500 font-bold"
              >
                SEND
              </button>
            </div>
          </div>
        </div>
        <hr className="my-2 border-t border-gray-300" />

        <div className="grid  grid-3 sm:grid-cols-4 lg:grid-cols-5 space-x-6 p-8 text-white">
          <div className="flex flex-col">
            <h1 className="font-bold">Let Us Help You</h1>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">Your Orders</a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">
              Returns & Replacements
            </a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">
              Shipping Rates & Policies
            </a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">
              Refund and Returns Policy
            </a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">Privacy Policy</a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">
              Terms and Conditions
            </a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">Cookie Settings</a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">Help Center</a>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold"> Make Money with Us</h1>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">Sell on Bevesi</a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">
              Sell Your Services on Bevesi
            </a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">
              Sell on Bevesi Business
            </a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">
              Sell Your Apps on Bevesi
            </a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">
              Become an Affilate
            </a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">
              Advertise Your Products
            </a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">
              Sell-Publish with Us
            </a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">
              Become an Bevesi Vendor
            </a>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold"> Get to Know Us</h1>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">
              Careers for Bevesi
            </a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">About Bevesi</a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">
              Inverstor Relations
            </a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">Bevesi Devices</a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">Customer reviews</a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">
              Social Responsibility
            </a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">Store Locations</a>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">For Buyers</h1>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">FAQ</a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">My account</a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">About Us</a>
            <a className="cursor-pointer px-2 py-1 text-sm hover:underline">Contact</a>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">Download</h1>
            <p>You can download our mobile application from app stores</p>
          </div>
        </div>

        <hr className="my-1 border-t border-gray-300" />

        <div className="grid  grid-4 sm:grid-cols-5 lg:grid-cols-6 justify-items-center px-44 py-3 text-white text-sm">
          <div className="flex flex-row">
            <Unicons.UilPhone className=" justify-start w-8 h-5 text-white" />
            <a className="cursor-pointer hover:underline">+ 375255221848</a>
          </div>
          <div className="flex flex-row ">
            <Unicons.UilEnvelopeUpload className=" justify-start w-8 h-5 text-white" />
            <a className="cursor-pointer hover:underline">Send Mail</a>
          </div>
          <div className="flex flex-row">
            <Unicons.UilPen className=" justify-start w-8 h-5 text-white" />
            <a className="cursor-pointer hover:underline">Write to us</a>
          </div>
          <div className="flex flex-row">
            <Unicons.UilTelegram className=" justify-start w-8 h-5 text-white" />
            <a className="cursor-pointer hover:underline">Telegram</a>
          </div>
          <div className="flex flex-row">
            <Unicons.UilMobileAndroid className=" justify-start w-8 h-5 text-white" />
            <a className="cursor-pointer hover:underline">Viber</a>
          </div>
          <div className="flex flex-row">
            <Unicons.UilWhatsapp className=" justify-start w-8 h-5 text-white" />
            <a className="cursor-pointer hover:underline">Watsapp</a>
          </div>
        </div>

        <hr className="my-1 border-t border-gray-300" />

        <div className="flex justify-center text-white py-6 text-xs">
          Copyright 2024 © Bevesi WooCommerce WordPress Theme. All right
          reserved. Powered by KLBTheme.
        </div>
      </div>
    </>
  );
};

export default Footer;
