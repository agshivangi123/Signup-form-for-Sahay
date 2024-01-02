import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import AddStartupPopup from './AddStartupPopup';
import "./style.css" // Import the new component
import email from "../assests/email.png"
import password from "../assests/password.png"
import { useLocation } from 'react-router-dom';


const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let responselogin;  // Declare the variable outside the try block
  
    try {
      responselogin = await axios.post('http://localhost:4000/login', {email: formData.identifier, password: formData.password});
      
      // Handle the response in the .then block
      console.log(responselogin);
      
      if (responselogin.data === "Success") {
        
        localStorage.setItem('userEmail', formData.identifier);

        // Redirect to the startup page
        //window.location.href = '/startup-page';
        navigate('/startup-page');
        alert('Successfully submitted');
        console.log('Server Response:', responselogin);
      } else {
        console.log("Data does not match");
      }
    } catch (error) {
      // Handle errors here
      console.log(error.message);
    }
  };






/*const LoginForm = ({ onLogin, showAddStartupButton }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      identifier: '', // Use identifier for either email or phone number
      password: '',
    });

    const [showPopup, setShowPopup] = useState(false);
  
    const handleChange = (e) => {
        e.preventDefault()
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddStartup = () => {
      navigate('/add-startup');
      // Open the Add Startup Popup
      setShowPopup(true);
    };

    const handlePopupClose = () => {
      // Close the Add Startup Popup
      setShowPopup(false);
    };

    const handleAddStartupSubmit = (startupData) => {
      // Handle the submitted startup data (e.g., send it to the backend)
      
      console.log('Submitted startup data:', startupData);
      // Optionally, close the popup after submission
      setShowPopup(false);
    };
    const handleSubmit = async () => {
       
      
      
        /*try {
        // Send login data to the backend
        const response = await axios.post('http://your-backend-url/api/login', formData);
  
        // Redirect to another page (e.g., Add Start-Up) after successful login
        if (response.data.success) {
          navigate.push('/add-startup');
        } else {
          throw new Error('Login unsuccessful');
        }
      } catch (error) {
        console.error('Error during login:', error.message);
      }*/

  

  return <>
    <div className='container'>
          <div className='header'>
          <h2>Login</h2></div>
          
          <form method='POST' className='inputs'>

          <div className='input'>
          <img src={email} alt="" />
          <input type="text" placeholder='Enter your email adddress' name="identifier" value={formData.identifier} onChange={handleChange} autoComplete='on' required /></div>
          
          <div className='input'>
          <img src={password} alt="" />
          <input type="password" placeholder='Enter your password' name="password" value={formData.password} onChange={handleChange} autoComplete='on' required /></div>
            
          <div className='submit-container'>
          <button className='submit' type="button" onClick={handleSubmit}>
            Login
          </button>
          </div>
          </form>
          </div>
</>   
   
   
   {/*<div>
      {!showPopup && (
        <div className='container'>
          <div className='header'>
          <h2>Login</h2></div>
          <form className='inputs'>

          <div className='input'>
          <img src={email} alt="" />
          <input type="text" placeholder='Enter your email adddress' name="identifier" value={formData.identifier} onChange={handleChange} autoComplete='on' required /></div>
          
          <div className='input'>
          <img src={password} alt="" />
          <input type="password" placeholder='Enter your password' name="password" value={formData.password} onChange={handleChange} autoComplete='on' required /></div>
            
          <div className='submit-container'>
          <button className='submit' type="button" onClick={handleAddStartup}>
            Login
          </button></div>
            
            
           <button type="button" onClick={handleAddStartup}>
              Add Start-Up
      </button>
          </form>
        </div>
      )}

      {showPopup && <AddStartupPopup onClose={handlePopupClose} onAddStartup={handleAddStartupSubmit} />}
    </div>*/}

  }
export default LoginForm;
