import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import AddStartupPopup from './components/AddStartupPopup';
import AddStartupPage from './components/AddStartupPage';

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element = {<SignupForm/>} />
          <Route path="/login" element = {<LoginForm/>} />
          <Route path="/startup-page" element ={<AddStartupPage/>}/>
          <Route path="/add-startup"  render={() => <div>Add Start-Up Page</div>} />
          {/* Add more routes as needed */}
        </Routes>
      </div></>
  
  );
};

export default App;
