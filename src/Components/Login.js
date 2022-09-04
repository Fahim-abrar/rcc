import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './Login.css';
import { AuthContext } from '../AuthContext';
function Login() {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const onChangeFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const SubmitForm = () => {
    const body = formData;

    Axios.post(`http://localhost:3001/api/login/`, body).then((response) => {
      console.log(response);
      if (response.data.success) {
        loginClicked();
        sessionStorage.setItem("email", formData.email); 

        setFormData({
          email: '',
          password: '',
        });
        navigate('/');
      } else {
        alert(response.data.msg);
      }
    });
  };

  const loginClicked = () => {
    setAuth({ email: formData.email });
  };
  return (
    <div className='lpage'>
      <div>
        <Link to='/'>
          <img
            className='header__logo'
            src='https://www.textiletoday.com.bd/wp-content/uploads/2018/12/Forbes-Marshall-solution.jpg'
            alt=''></img>
        </Link>
        <h1
          className='Loginbar'
          style={{
            color: 'white',
            fontFamily: 'Roboto',
            fontSize: '60px',
            backgroundColor: '#323c8a',
            paddingTop: '5vh',
          }}>
          Login{' '}
        </h1>

        <div className='loginInputcontainer'>
          <div className='loginInputlabel'>Email</div>
          <input
            name='email'
            className='loginInputfield'
            value={formData.email}
            style={{ width: '340px' }}
            onChange={onChangeFormData}
          />
        </div>
        <div className='loginInputcontainer'>
          <div className='loginInputlabel'>Password</div>
          <input
            type='password'
            name='password'
            className='loginInputfield'
            style={{ width: '340px' }}
            value={formData.password}
            onChange={onChangeFormData}
          />
        </div>

        <button className='login' onClick={SubmitForm}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
