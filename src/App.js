import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Axios from "axios";
import Details from "./Components/Details";
import Login from "./Components/Login";
import Landing from "./Components/Landing";
import Update from "./Components/Update";
import Insert from "./Components/Insert";
import { AuthContext } from "./AuthContext";

function App() {
  const [NameList, setNameList] = useState([]);
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      console.log(response);
      setNameList(response.data);
    });
  }, []);

  if (auth.email || sessionStorage.getItem("email")) {
    if (
      auth.email === "Admiin" ||
      sessionStorage.getItem("email") === "Admiin"
    ) {
      return (
        <Router>
          <Routes>
            <Route path="/Details" element={<Details />} />
            <Route path="/Insert" element={<Insert />} />
            <Route path="/Update/:id" element={<Update />} />
            <Route
              path="/"
              element={
                <div className="App">
                  <div className="top">
                  <Link to="/">
                    <img
                      className="header__logo"
                      src="https://www.textiletoday.com.bd/wp-content/uploads/2018/12/Forbes-Marshall-solution.jpg"
                      alt=""
                    ></img>
                  </Link>
                  <div className="logoutcon">
                  <button
                  className="Logout"
                    onClick={() => {
                      sessionStorage.removeItem("email");
                      setAuth({ email: null });
                    }}
                  >
                    Logout
                  </button>
                  </div>
                  </div>
                 

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
            <Route path="/:error" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      );
    } else
      return (
        <Router>
          <Routes>
            <Route path="/Details" element={<Details />} />
            <Route path="/Insert" element={<Insert />} />
            <Route
              path="/"
              element={
                <div className="App">
                 <div className="top">
                  <Link to="/">
                    <img
                      className="header__logo"
                      src="https://www.textiletoday.com.bd/wp-content/uploads/2018/12/Forbes-Marshall-solution.jpg"
                      alt=""
                    ></img>
                  </Link>
                  <div className="logoutcon">
                  <button
                  className="Logout"
                    onClick={() => {
                      sessionStorage.removeItem("email");
                      setAuth({ email: null });
                    }}
                  >
                    Logout
                  </button>
                  </div>
                  </div>

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
            <Route path="/:error" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      );
  } else {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/:error" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
