import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import "./style.css"
import emailimage from "../assests/email.png"
import passwordimage from "../assests/password.png"
import personimage from "../assests/person.png"




const SignupForm = ({ onSignup, switchToLogin }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        let response = await axios.post('http://localhost:4000/', {email:formData.email,phoneNumber:formData.phoneNumber,password:formData.password});
        if(formData.password === formData.confirmPassword){
          navigate('/login');
          alert('Succesfully submitted')
          console.log('Server Response:', response);
        }
        else{
          throw new Error("passwords do not match!")
        }
        // Rest of your code
      } catch (error) {
        console.log('Error during signup:', error.message);
        alert('Signup failed. Please check your data.');
      }
  
      





      /*try {
        const response = await axios.post('http://localhost:4000', {email:formData.email,phoneNumber:formData.phoneNumber,password:formData.password});
        
        if (response.statusText.OK) {
          alert('Signup successful');
        } else {
          alert('Signup failed: ' + response.statusText.OK);
          console.log(response)
        }
      } catch (error) {
        console.log('Error during signup:', error.message);
        alert('Signup failed. Please check your data.');
      }
      
      
      
      try{
      if(formData.password == formData.confirmPassword){
        navigate('/login');
        alert('Succesfully submitted')
      }
      else{
        throw new Error("passwords do not match!")
      }
    }catch (error){
      alert(error.message)
    }*/
        
      /*try {
        // Validate form fields
        if (formData.password !== formData.confirmPassword) {
          throw new Error('Passwords do not match');
        }
  
        // Send signup data to the backend
        const response = await axios.post('http://your-backend-url/api/signup', formData);
  
        // Redirect to login page after successful signup
        if (response.data.success) {
          navigate.push('/login');
        } else {
          throw new Error('Signup unsuccessful');
        }
      } catch (error) {
        console.error('Error during signup:', error.message);
      }*/
    };
  
  
  return <>
    <div className='container'>
      <div className='header'>
      <h2 className='text'>Sign Up</h2></div>
      <form  method='POST' className='inputs'>

        <div className='input'>
      
        <input type="email" placeholder='Enter your email adddress' name="email" value={formData.email} onChange={handleChange} autoComplete='on'required /></div>
        
        <div className='input'>
       
        <input type="tel" name="phoneNumber" placeholder='Enter your phone no' value={formData.phoneNumber} onChange={handleChange} autoComplete='on' required /></div>
        

        <div className='input'>
       
        <input type="password" placeholder='Enter your password' name="password" value={formData.password} onChange={handleChange} autoComplete='on' required /></div>
        

        <div className='input'>
      
        <input type="password" placeholder='Confirm Password' name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} autoComplete='on' required /></div>
        
        <div className='submit-container'>
        <button className='submit' type="button" onClick={handleSubmit}>
          Submit
        </button></div>
      </form>
    </div>
</>
};

export default SignupForm;
