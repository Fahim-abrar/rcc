
import Axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Insert.css";

function Insert() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    designation: "",
    email: "",
    phone: "",
    fm_install_base: "",
    gap_potential: "",
  });
  const onChangeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const SubmitForm = () => {
    
      const body=formData
      setFormData({
        company: "",
        name: "",
        designation: "",
        email: "",
        phone: "",
        fm_install_base: "",
        gap_potential: "",
      })
      Axios.post(`http://localhost:3001/api/insert/`,body).then((response) => {
          console.log(response);
         
          alert("Inserted"); 
          navigate('/')      
        });

      
  
  
  }
  return (
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
          marginTop: "-.001vh",
        }}
      >
        Insert{" "}
      </h1>
      <div className="Iform">
        <div className="isnertInputcontainer">
          <div className="insertInputlabel">company</div>
          <input
            className="insertInputfield"
            style={{ width: "370px" }}
            name="company"
            value={formData.company}
            onChange={onChangeFormData}
          />
        </div>
        <div className="isnertInputcontainer">
          <div className="insertInputlabel">name</div>
          <input
            className="insertInputfield"
            style={{ width: "370px" }}
            name="name"
            value={formData.name}
            onChange={onChangeFormData}
          />
        </div>
        <div className="isnertInputcontainer">
          <div className="insertInputlabel">designation</div>
          <input
            className="insertInputfield"
            style={{ width: "370px" }}
            name="designation"
            value={formData.designation}
            onChange={onChangeFormData}
          />
        </div>
        <div className="isnertInputcontainer">
          <div className="insertInputlabel">email</div>
          <input
            className="insertInputfield"
            style={{ width: "370px" }}
            name="email"
            value={formData.email}
            onChange={onChangeFormData}
          />
        </div>
        <div className="isnertInputcontainer">
          <div className="insertInputlabel">phone</div>
          <input
            className="insertInputfield"
            style={{ width: "370px" }}
            name="phone"
            value={formData.phone}
            onChange={onChangeFormData}
          />
        </div>
        <div className="isnertInputcontainer">
          <div className="insertInputlabel">fm install base</div>
          <input
            className="insertInputfield"
            style={{ width: "370px" }}
            name="fm_install_base"
            value={formData.fm_install_base}
            onChange={onChangeFormData}
          />
        </div>
        <div className="isnertInputcontainer">
          <div className="insertInputlabel">gap potential</div>
          <input
            className="insertInputfield"
            style={{ width: "370px" }}
            name="gap_potential"
            value={formData.gap_potential}
            onChange={onChangeFormData}
          />
        </div>
        <button className="Ibutton" onClick={SubmitForm}>Add Info</button>
      </div>
    </div>
  );
}

export default Insert;
