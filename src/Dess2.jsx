import React from "react";

const Dess2 = () => {
  return (
    <>
      <div className="grid  grid-2 sm:grid-cols-3 lg:grid-cols-4 space-x-6 p-8">
        <div className="flex-1">
          <a className="cursor-pointer">
            <img src="1.png"></img>
          </a>
        </div>
        <div className="flex-1 ">
          <a className="cursor-pointer">
            <img src="2.png"></img>
          </a>
        </div>
        <div className="flex-1 ">
          <a className="cursor-pointer">
            <img src="3.png"></img>
          </a>
        </div>
        <div className="flex-1 ">
          <a className="cursor-pointer">
            <img src="4.png"></img>
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center py-4 bg-blue-100 text-xs w-5/6">
        <h1 className="text-blue-800 font-bold text-sm">RETURN CASH BACK</h1>
        <h2 className="mx-4 text-blue-800 font-bold">Earn 5% cash back on Bevesi.com. <span className="font-normal">See if you’re pre-approved with no credit risk</span> </h2>
        <button className="border text-blue-800 border-blue-800 rounded-md p-2 font-bold hover:bg-blue-200">Discover me</button>
      </div>
    </>
  );
};

export default Dess2;
