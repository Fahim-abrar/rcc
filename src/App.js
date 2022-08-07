import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import Details from "./Components/Details";
import Login from "./Components/Login";
import Landing from "./Components/Landing";
import Update from "./Components/Update";
import Insert from "./Components/Insert";

function App() {
  const [company, setcompany] = useState("");
  const [name, setname] = useState("");
  const [NameList, setNameList] = useState([]);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      console.log(response);
      setNameList(response.data);
    });
  }, []);

  const subitName = () => {
    Axios.post("http://localhost:3001/api/insert", {
      company: company,
      name: name,
    });

    setNameList([...NameList, { company: company, name: name }]);
  };

  const deleteName = (name) => {
    Axios.delete(`http://localhost:3001/api/delete/${name}`);
  };

  const updateName = (newName, company) => {
    console.log(company);
    Axios.put("http://localhost:3001/api/update", {
      company: company,
      name: newName,
    });
    setNewName("");
  };

  return (
    <Router>
      <Routes>
        <Route path="/Details" element={<Details />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Insert" element={<Insert />} />
        <Route path="/Update/:id" element={<Update />} />
        <Route
          path="/"
          element={
            <div className="App">
              <Link to="/">
                <img
                  className="header__logo"
                  src="https://www.textiletoday.com.bd/wp-content/uploads/2018/12/Forbes-Marshall-solution.jpg"
                  alt=""
                ></img>
              </Link>

              <div className="headApp">
                <h1
                  className="header"
                  style={{
                    color: "white",
                    fontFamily: "Roboto",
                    fontSize: "60px",
                    paddingTop: "10vh",
                  }}
                >
                  Forbes Marshall Customer Database
                </h1>
                
              </div>
            
              <Link className="Ili" to="/Insert">
                <button className="Ilink">Add New Info</button>
              </Link>

              <Link to="/Landing">
                  <button>Landing</button>
                </Link>

              <div className="sub-header1">
                <div className="sub-header11"></div>
                <div className="sub-header21">Company</div>
                <div className="sub-header31">Name</div>
              </div>
              {NameList.map((val, index) => (
                <div className="card" key={index}>
                  <div>✦</div>
                  <div>{val[`company`]}</div>
                  <div>{val[`name`]}</div>
                  <Link
                    to="/Details"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <button className="infobutton">Info</button>
                  </Link>
                </div>
              ))}
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
