import React, { useState, useEffect } from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";

import Axios from "axios";
import "./Update.css";

function Update() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    GridContacts:"",
    company:"",
    name: "",
    designation: "",
    email: "",
    phone: "",
    fm_install_base: "",
    gap_potential: "",
  });
  const{id}=useParams();

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/get/${id}`).then((response) => {
      console.log(response);
      setFormData({
        GridContacts: response.data[0].GridContacts,
        company: response.data[0].company,
        name:  response.data[0].name,
        designation:  response.data[0].designation,
        email:  response.data[0].email,
        phone:  response.data[0].phone,
        fm_install_base:  response.data[0].fm_install_base,
        gap_potential:  response.data[0].gap_potential,
      });
      // setNameList(response.data);
    });
  }, []);

  const onChangeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const Submit =() =>{
    
    const body=formData
    Axios.put(`http://localhost:3001/api/update/${id}`,body).then((response) => {
        console.log(response);
       
        alert("updated"); 
        navigate('/Details')      
      });

  }
  const Delete =() =>{
    
    Axios.delete(`http://localhost:3001/api/delete/${id}`).then((response) => {
        console.log(response);
        
        alert("deleted"); 
        navigate('/Details')          
      });

  }

  return (
    <div>
      <Link to="/">
        <img
          className="header__logoD"
          src="https://www.textiletoday.com.bd/wp-content/uploads/2018/12/Forbes-Marshall-solution.jpg"
          alt=""
        ></img>
      </Link>

      <div className="update">
        
        <div className="updateInputcontainer">
          <div className="updateInputlabel">company</div>
          <div className="updateInputfield">{formData.company} </div>
        </div>
        <div className="updateInputcontainer">
          <div className="updateInputlabel">name</div>
          <input className="updateInputfield"  style={{width: "370px"}}  name="name" value={formData.name} onChange={onChangeFormData}/>
        </div>
        <div className="updateInputcontainer">
          <div className="updateInputlabel">designation</div>
          <input className="updateInputfield"  style={{width: "370px"}} name="designation" value={formData.designation} onChange={onChangeFormData}/>
        </div>
        <div className="updateInputcontainer">
          <div className="updateInputlabel">email</div>
          <input className="updateInputfield" style={{width: "370px"}}  name="email" value={formData.email} onChange={onChangeFormData}/>
        </div>
        <div className="updateInputcontainer">
          <div className="updateInputlabel">phone</div>
          <input className="updateInputfield" style={{width: "370px"}}  name="phone" value={formData.phone} onChange={onChangeFormData}/>
        </div>
        <div className="updateInputcontainer">
          <div className="updateInputlabel">fm_install_base</div>
          <input className="updateInputfield"  style={{width: "370px"}} name="phonfm_install_basee" value={formData.fm_install_base} onChange={onChangeFormData}/>
        </div>
        <div className="updateInputcontainer">
          <div className="updateInputlabel">gap_potential</div>
          <input className="updateInputfield"  style={{width: "370px"}} name="gap_potential" value={formData.gap_potential} onChange={onChangeFormData}/>
        </div>
        <div className="ub">
        <button className="updateb" onClick={Submit}>update</button>
        <button className="updateb2" onClick={Delete}>Delete</button>
        </div>
      </div>
     
    </div>
  );
}

export default Update;
