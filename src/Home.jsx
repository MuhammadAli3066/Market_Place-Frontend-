import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Sliderscrol from "./Sliderscrol";
import * as Unicons from "@iconscout/react-unicons";
import Dess from "./Dess";
import Dess2 from "./Dess2";
import Footer from "./Footer";
import Dess3 from "./Dess3";
const Home = () => {
  return (
    <>
      <NavBar />
      <div className="w-full h=full">
        <div className="justify-start inline-flex ml-8 mt-4 h-6">
          <img src="11.jpeg" className="rounded-full w-10 h-12 ml-4"></img>
          <h1 className="text-3xl">
            <b>Bevesi</b>
          </h1>
          <div className="ml-60">
            <SearchBar></SearchBar>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <hr className="my-4 mx-12 border-t border-gray-300" />
      </div>

      <div className=" flex flex-row justify-evenly font-bold font-sans text-lg">
        <div className="flex justify-start text-start">
          <Unicons.UilAlignJustify className=" justify-start w-8 h-6 text-gray-400" />
          <a className="hover:underline" href="#">All Categories</a>
        </div>

        <div className="justify-center  text-center">
          <ul className="text-center inline-flex space-x-4" typeof="none">
            <li>
              <a className="hover:underline" href="#">Home</a>
            </li>
            <li>
              <a className="hover:underline" href="#">Shop</a>
            </li>
            <li>
              <a className="hover:underline" href="#">Electronics</a>
            </li>
            <li>
              <a className="hover:underline" href="#">Home and Furniture</a>
            </li>
            <li>
              <a className="hover:underline" href="#">Contact</a>
            </li>
            <li>
              <a className="hover:underline" href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className=" justify-end text-center">
          <a className="hover:underline" href="#">Today's Deal</a>
        </div>
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <Sliderscrol></Sliderscrol>
      <Dess></Dess>
      <div className="w-full h-full mt-6 gap-3">
        <Dess3></Dess3>
      </div>
      <div className="flex flex-col w-full h-full mt-6 gap-3 justify-center items-center">
        <Dess2/>
      </div>

      <br></br>
      <br>
      </br>
      <br></br>

      <div className="flex w-full h-full  ">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
