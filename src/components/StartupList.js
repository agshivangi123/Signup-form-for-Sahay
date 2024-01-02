import React from 'react';
import'./AddStartupPopup.css'
import StartupDetailsTable from './StartupDetailsTable.js';

const StartupList = ({ startups }) => {
  return <>
   
   { /*<div>
      <h3>Startup Details</h3>
      <ul>
        {startups.map((startup, index) => (
          <li key={index}>
            <strong>{startup.startupName}</strong>
            <p>Email: {startup.emailAddress}</p>
            <p>Industry: {startup.industry}</p>
            {/* Add other details as needed 
          </li>
        ))}
      </ul>
    </div>*/}

    <div className='startup-details-table'>
    <h3>Startup Details</h3>
  <table>
    <thead>
      <tr>
            <th>Startup Name</th>
            {/*<th>Incorporation Date</th>*/}
            <th>Startup Address</th>
            <th>City</th>
            {/*<th>State</th>*/}
            <th>Email Address</th>
            {/*<th>Phone Number</th>*/}
            <th>Founder Name</th>
            {/*<th>Industry</th>
            <th>Sector</th>*/}
      </tr>
    </thead>
    <tbody>
          {startups.map((startup, index) => (
            <tr key={index}>
              <td>{startup.startupName}</td>
              {/*<td>{startup.incorporationDate}</td>*/}
              <td>{startup.startupAddress}</td>
              <td>{startup.city}</td>
              {/*<td>{startup.state}</td>*/}
              <td>{startup.emailAddress}</td>
              <td>{startup.founderName}</td>
              {/*<td>{startup.phoneNumber}</td>
              <td>{startup.founderName}</td>*/}
              {/*<td>{startup.industry}</td>
              <td>{startup.sector}</td>*/}
              {/* Add other cells for startup data */}
            </tr>
          ))}
        </tbody>
  </table>
    </div>
    </>
};

export default StartupList;
