import React, { useState, useEffect } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");
  //   console.log(props.dataToFilter);
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    filterSearch(e.target.value);
  };

  const filterSearch = (searchWord) => {
    let filteredResult = [];
    props.dataToFilter.map((oneCompanyInfo) => {
      if (
        oneCompanyInfo.company.toLowerCase().includes(searchWord.toLowerCase())
      ) {
        filteredResult.push(oneCompanyInfo);
        props.setFilteredList(filteredResult);
      }
    });
  };
  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        placeholder="Search by Company Name"
        type="text"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
