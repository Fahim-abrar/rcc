import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Login.css";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const onChangeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const SubmitForm = () => {
    const body = formData;
    setFormData({
      company: "",
      name: "",
      designation: "",
      email: "",
      phone: "",
      fm_install_base: "",
      gap_potential: "",
    });
    Axios.post(`http://localhost:3001/api/login/`, body).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="lpage">
      <div>
        <Link to="/">
          <img
            className="header__logo"
            src="https://www.textiletoday.com.bd/wp-content/uploads/2018/12/Forbes-Marshall-solution.jpg"
            alt=""
          ></img>
        </Link>
        <h1
          className="Loginbar"
          style={{
            color: "white",
            fontFamily: "Roboto",
            fontSize: "60px",
            backgroundColor: "#323c8a",
            paddingTop: "5vh",
          }}
        >
          Login{" "}
        </h1>

        <div className="loginInputcontainer">
          <div className="loginInputlabel">Email</div>
          <input
            name="email"
            className="loginInputfield"
            value={formData.email}
            style={{ width: "340px" }}
            onChange={onChangeFormData}
          />
        </div>
        <div className="loginInputcontainer">
          <div className="loginInputlabel">Password</div>
          <input
            type="password"
            name="password"
            className="loginInputfield"
            style={{ width: "340px" }}
            value={formData.password}
            onChange={onChangeFormData}
          />
        </div>
       
          <button className="login" onClick={SubmitForm}>
            Login
          </button>
      
      </div>
    </div>
  );
}

export default Login;
