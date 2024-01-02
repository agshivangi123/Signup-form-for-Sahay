import React, { useState } from 'react';
import './AddStartupPopup.css'; // Import the CSS file

const industries = ['IT services', 'agriculture', 'biotechnologies', 'Design', 'Fashion', 'Green Technologies', 'Marketing', 'Others'];
const sectors = ['IT consultancy', 'IT management', 'IT services', 'agri tech', 'agriculture chemicals', 'organic agriculture', 'web design', 'fashion technologies', 'Others'];

const AddStartupPopup = ({ onClose, onAddStartup }) => {
  const [startupData, setStartupData] = useState({
    startupName: '',
    incorporationDate: '',
    startupAddress: '',
    city: '',
    state: '',
    emailAddress: '',
    phoneNumber: '',
    founderName: '',
    industry: industries[0],
    sector: sectors[0],
    businessIdea: '',
    // Add other startup fields here
  });

  const handleChange = (e) => {
    setStartupData({ ...startupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Perform validation and submit the startup data
    // ...

    // Call the onAddStartup prop to notify the parent component
    onAddStartup(startupData);

    // Close the popup
    onClose();
  };

  return (
    <div className="popup-container">
      <h2 className="popup-title">Add Start-Up</h2>
     
      <form className="popup-form">
        {/* Form fields for startup data */}
        <table>
      <thead>
        <tr className='row1'>
          <th><label>Startup Name:</label></th>
          <th><label>Incorporation Date:</label></th>
          <th><label>Startup Address:</label></th>
        </tr>
      </thead> 
      <tbody>    
      <tr>     
      <td><input type="text" name="startupName" value={startupData.startupName} onChange={handleChange} /></td>
      <td>
      <input type="date" name="incorporationDate" value={startupData.incorporationDate} onChange={handleChange} /></td>
      <td>
      <input type="text" name="startupAddress" value={startupData.startupAddress} onChange={handleChange} /></td>
      </tr>  
      </tbody> 
      <thead>
        <tr>
          <th><label>City:</label></th>
          <th><label>State:</label></th>
          <th><label>Email Address:</label></th>
        </tr>
      </thead>
      <tbody>
      <tr>
      <td><input type="text" name="city" value={startupData.city} onChange={handleChange} /></td>
      <td><input type="text" name="state" value={startupData.state} onChange={handleChange} /></td>
      <td><input type="email" name="emailAddress" value={startupData.emailAddress} onChange={handleChange} /></td></tr>
      </tbody>
      <thead>
        <tr>
          <th><label>Phone Number:</label></th>
          <th><label>Founder Name:</label></th>
          <th><label>Industry:</label></th>
        </tr>
      </thead>
      <tbody>
      <tr>
      <td><input type="tel" name="phoneNumber" value={startupData.phoneNumber} onChange={handleChange} /></td>
      <td><input type="text" name="founderName" value={startupData.founderName} onChange={handleChange} /></td>
      <td><select name="industry" value={startupData.industry} onChange={handleChange}>
        {industries.map((industry) => (
          <option key={industry} value={industry}>
            {industry}
          </option>
        ))}
      </select></td></tr></tbody>
      <thead>
        <tr>
          <th><label>Sector:</label></th>
          <th><label>Business Idea:</label></th>
        </tr>
      </thead>
      <tbody>
      <tr>
      <td><select name="sector" value={startupData.sector} onChange={handleChange}>
        {sectors.map((sector) => (
          <option key={sector} value={sector}>
            {sector}
          </option>
        ))}
      </select></td> 
      <td><textarea name="businessIdea" value={startupData.businessIdea} onChange={handleChange}></textarea></td></tr>
      </tbody>
        {/* Add other form fields for startup data here */}
        </table>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        
      </form> 
    </div>
  );
};

export default AddStartupPopup;
