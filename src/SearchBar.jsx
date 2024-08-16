import React, { useState } from "react";
import Update from "./Update";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="w-full mx-auto">
      <div className="flex border-solid border-2 rounded-md border-blue-500 h-12 w-96">
        <Update></Update>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search everything at bevesi online and in store .."
          className="appearance-auto bg-transparent border-none w-full text-gray-700 ml-10 mr-3 py-1 px-8 leading-tight focus:outline-none"
        />
        <button
          type="submit"
          name="submit"
          className="flex-shrink-0 py-0 px-0 rounded "
        >
          <img src="logo.png" className="w-11"></img>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
