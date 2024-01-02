import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AddStartupPopup from './AddStartupPopup';
import StartupList from './StartupList'; // Create StartupList component to display the list of startups
import logo from "../assests/startup_78360.png"
import "./AddStartupPopup.css"
import axios from 'axios'
import { useLocation } from 'react-router-dom';


const AddStartupPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [startupList, setStartupList] = useState([]);
  const [startupData, setStartupData] = useState({});
  const [userEmail, setUserEmail] = useState(''); // Maintain a list of startups

  const handleAddStartup = (startupData) => {
    // Add the new startup to the list
    setStartupList([...startupList, startupData]);

    // Close the Add Startup Popup
    setShowPopup(false);
  };

  const handlePopupClose = () => {
    // Close the Add Startup Popup
    setShowPopup(false);
  };

  useEffect(() => {
    // Replace 'http://localhost:4000/startup-page' with your actual backend route

    let responsestartup = axios.get('http://localhost:4000/startup-page')
      .then(responsestartup => {
        setStartupData(responsestartup.data);
      })
      .catch(error => {
        console.error('Error fetching startup data:', error);
      });

    // Check if there is a user email in local storage (set during login)
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  return (
    <div>
     
      {/* Navbar */}
      <nav>
        <div className="navbar-left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-right">
          <h2>{userEmail}</h2>
        </div>
      </nav>

      {/* Body */}
      {!showPopup && (
      <div className="body-container">
        
        {/* Left Section */}
        <div className="left-section">
          <h3>Startups</h3>
        </div>

        
        {/* Right Section */}
        <div className="right-section">
           
          
          <div className='startup-conatiner'>
          
          <input className='searchbar' type="text" placeholder="Search" />
          
          <button type="button" className='addstartup-button' onClick={() => setShowPopup(true)}>
            Add Startup
          </button>
          
          </div>
          
          
          <StartupList startups={startupList} />{/* Pass the list of startups to the StartupList component */}

         
          
          </div>
          
          
          
          </div>

          )}
         
          {/* Display startup details from the popup window */}
          {showPopup && <AddStartupPopup onClose={handlePopupClose} onAddStartup={handleAddStartup} />}
    </div>
  );
};

export default AddStartupPage;































/*const AddStartupPage = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = React.useState(false);

  const handleAddStartup = () => {
    // Open the Add Startup Popup
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    // Close the Add Startup Popup
    setShowPopup(false);
  };

  return <>
    <div>
      
      {!showPopup && (
        <button type="button" onClick={handleAddStartup}>
          Add Startup
        </button>
      )}

      {showPopup && <AddStartupPopup onClose={handlePopupClose} />}
    </div></>
};

export default AddStartupPage;*/
