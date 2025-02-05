import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { UserContext } from '../Context/UserContext';

export const Login = () => {
  const navigate = useNavigate();
  const { setUsername } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [username, setUsernameInput] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    emailError: '',
    usernameError: '',
    passwordError: '',
  });
  
  const emailRegex = /^[a-zA-Z]+[\w_\.\-]+[@][a-z]+[\.]+[a-z]/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  const usernameRegex = /^[A-Z][a-zA-Z]*$/;

  const validateEmail = (value) => {
    return !emailRegex.test(value) ? 'Enter Valid Email' : '';
  };

  const validateUsername = (value) => {
    return !usernameRegex.test(value) ? 'Enter Valid Username' : '';
  };

  const validatePassword = (value) => {
    return !passwordRegex.test(value) ? 'Enter Valid Password' : '';
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      emailError: validateEmail(value),
    }));
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsernameInput(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      usernameError: validateUsername(value),
    }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      passwordError: validatePassword(value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.emailError || errors.usernameError || errors.passwordError) {
      alert('Please fix the errors before submitting!');
      return;
    } else {
      setUsername(username);
      navigate('/product');
    }

  };

  return (
    <div>
      <header>Welcome Back!</header>
      <div id="login-section">
        <div className="home">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email"  value={email} onChange={handleEmailChange} required/>
                {errors.emailError && <div className="error-message">{errors.emailError}</div>}
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter Username" value={username} onChange={handleUsernameChange} required  />
                {errors.usernameError && <div className="error-message">{errors.usernameError}</div>}
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control"  id="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} required/>
                {errors.passwordError && <div className="error-message">{errors.passwordError}</div>}
              </div>

              <button type="submit" className="btn btn-primary" id="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
