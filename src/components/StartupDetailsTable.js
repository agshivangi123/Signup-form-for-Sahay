
import React from 'react';
import './AddStartupPopup.css'

const StartupDetailsTable = ({ startups }) => {
  return (
    <div>
      <h3>Startup Details</h3>
      <table>
        <thead>
          <tr>
            <th>Startup Name</th>
            <th>Incorporation Date</th>
            <th>Startup Address</th>
            <th>City</th>
            <th>State</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Founder Name</th>
            <th>Industry</th>
            <th>Sector</th>
            {/* Add other columns as needed */}
          </tr>
        </thead>
        <tbody>
          {startups.map((startup, index) => (
            <tr key={index}>
              <td>{startup.startupName}</td>
              <td>{startup.incorporationDate}</td>
              <td>{startup.startupAddress}</td>
              <td>{startup.city}</td>
              <td>{startup.state}</td>
              <td>{startup.emailAddress}</td>
              <td>{startup.startupAddress}</td>
              <td>{startup.phoneNumber}</td>
              <td>{startup.founderName}</td>
              <td>{startup.industry}</td>
              <td>{startup.sector}</td>
              {/* Add other cells for startup data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StartupDetailsTable;
