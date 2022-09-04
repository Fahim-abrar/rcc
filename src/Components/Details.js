import React, { useState, useEffect } from "react";
import "./Details.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import Update from "./Update";
import SearchBar from "./SearchBar/SearchBar";

function Details() {
  const [NameList, setNameList] = useState([]);
  const [FilteredList, setFilteredList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      console.log(response);
      setNameList(response.data);
      setFilteredList(response.data)
    });
  }, []);

  return (
    <div>
      <Link to="/">
        <img
          className="header__logoD"
          src="https://www.textiletoday.com.bd/wp-content/uploads/2018/12/Forbes-Marshall-solution.jpg"
          alt=""
        ></img>
      </Link>

      <div className="header" style={{ marginTop: "-.001vh" }}>
        <h1
          className="h1"
          style={{ color: "white", fontFamily: "Roboto", fontSize: "60px" }}
        >
          Complete Details
        </h1>
        {NameList && <SearchBar dataToFilter={NameList} setFilteredList={setFilteredList}/>}
        <div className="sub-header">
          <div className="sub-headera"></div>
          <div className="sub-headerb">Company</div>
          <div className="sub-headerc">Name</div>
          <div className="sub-headerd">Designation</div>
          <div className="sub-headere">Email</div>
          <div className="sub-headerf">Phone</div>
          <div className="sub-headerg">fm install base</div>
          <div className="sub-headerh">gap potential</div>
        </div>

        {FilteredList.map((val, index) => (
          <div className="cardD" key={index}>
            <div>✦</div>
            <div>{val[`company`]}</div>
            <div>{val[`name`]}</div>
            <div>{val[`designation`]}</div>
            <div>{val[`email`]}</div>
            <div>{val[`phone`]}</div>
            <div>{val[`fm_install_base`]}</div>
            <div>{val[`gap_potential`]}</div>
            {   sessionStorage.getItem("email") === "Admiin" && <Link to={`/Update/${val.GridContacts}`}>
              <button className="button1">Edit</button>
            </Link>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
