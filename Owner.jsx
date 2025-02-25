import React from "react";
import { Link } from 'react-router-dom';

const Owner = () => {
  return (
    <div>
      <nav className="navbar" style={{  backgroundColor: '#2d3748', padding: '1rem',borderRadius:'0' }}>
        <div 
          className="navbar-container" 
          style={{
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            maxWidth: '1280px', 
            margin: '0 auto', 
            gap: '20px', 
            flexWrap: 'wrap', /* Allows elements to wrap on smaller screens */
          }}
        >
          <h1 
            className="navbar-logo" 
            style={{
              fontSize: '1.25rem', 
              fontWeight: 'bold', 
              color: '#fbbf24', 
              width: 'auto',
              textAlign: 'center',
            }}
          >
            Owner Dashboard
          </h1>
          <div 
            style={{
              display: 'flex', 
              flexDirection: 'row', 
              gap: '20px', 
              flexWrap: 'wrap', /* Allows links to wrap on smaller screens */
            }}
          >
            <ul 
              className="navbar-links" 
              style={{
                display: 'flex', 
                listStyleType: 'none', 
                padding: 0, 
                margin: 0, 
                gap: '1rem', 
                flexDirection: 'row', /* Links aligned horizontally by default */
                flexWrap: 'wrap', 
              }}
            >
              <li>
                <Link 
                  to="/financial-data" 
                  className="navbar-link" 
                  style={{
                    padding: '0.5rem 1rem', 
                    borderRadius: '0.375rem', 
                    textDecoration: 'none', 
         
                    transition: 'background-color 0.2s ease, color 0.2s ease',
                    display: 'block',
                    backgroundColor: '#4a5568', /* Tailwind's hover:bg-gray-700 */
                    color: '#fbbf24'
                    
                  }}
                >
                  View Expenses
                </Link>
              </li>
              <li>
                <Link 
                  to="/lodge-complaint" 
                  className="navbar-link" 
                  style={{
                    padding: '0.5rem 1rem', 
                    borderRadius: '0.375rem', 
                    textDecoration: 'none', 
              
                    transition: 'background-color 0.2s ease, color 0.2s ease',
                    display: 'block',
                    backgroundColor: '#4a5568', /* Tailwind's hover:bg-gray-700 */
                    color: '#fbbf24'
                  }}
                >
                  Lodge Complaint
                </Link>
              </li>
              <li>
                <Link 
                  to="/ownerServices" 
                  className="navbar-link" 
                  style={{
                    padding: '0.5rem 1rem', 
                    borderRadius: '0.375rem', 
                    textDecoration: 'none', 
     
                    transition: 'background-color 0.2s ease, color 0.2s ease',
                    display: 'block',
                    backgroundColor: '#4a5568', /* Tailwind's hover:bg-gray-700 */
                    color: '#fbbf24'
                  }}
                >
                  Owner Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/pay-maintainence" 
                  className="navbar-link" 
                  style={{
                    padding: '0.5rem 1rem', 
                    borderRadius: '0.375rem', 
                    textDecoration: 'none', 
                    transition: 'background-color 0.2s ease, color 0.2s ease',
                    display: 'block',
                    backgroundColor: '#4a5568', /* Tailwind's hover:bg-gray-700 */
                    color: '#fbbf24'
                  }}
                >
                  Pay Maintenance
                </Link>
              </li>
              <li>
                <Link 
                  to="/financial-expenses" 
                  className="navbar-link" 
                  style={{
                    padding: '0.5rem 1rem', 
                    borderRadius: '0.375rem', 
                    textDecoration: 'none', 
                    transition: 'background-color 0.2s ease, color 0.2s ease',
                    display: 'block',
                    backgroundColor: '#4a5568', /* Tailwind's hover:bg-gray-700 */
                    color: '#fbbf24'
                  }}
                >
                  Expense Graphic View
                </Link>
              </li>
              <li>
                <Link 
                  to="/view-temp" 
                  className="navbar-link" 
                  style={{
                    padding: '0.5rem 1rem', 
                    borderRadius: '0.375rem', 
                    textDecoration: 'none', 
                    transition: 'background-color 0.2s ease, color 0.2s ease',
                    display: 'block',
                    backgroundColor: '#4a5568', /* Tailwind's hover:bg-gray-700 */
                    color: '#fbbf24'
                  }}
                >
                  View Temperature
                </Link>
              </li>
              <li>
                <Link 
                  to="/gas-info" 
                  className="navbar-link" 
                  style={{
                    padding: '0.5rem 1rem', 
                    borderRadius: '0.375rem', 
                    textDecoration: 'none', 
                    transition: 'background-color 0.2s ease, color 0.2s ease',
                    display: 'block',
                    backgroundColor: '#4a5568', /* Tailwind's hover:bg-gray-700 */
                    color: '#fbbf24'
                  }}
                >
                  View Gas Info
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style>
        {`
          /* Responsive Design for Smaller Screens */
          @media (max-width: 768px) {
            .navbar-container {
              flex-direction: column; /* Stack items vertically */
              gap: 20px;
            }

            .navbar-links {
              flex-direction: column; /* Stack links vertically on small screens */
              gap: 10px;
              align-items: center; /* Center the links */
            }

            .navbar-link {
              width: 100%; /* Make links take full width on mobile */
              text-align: center; /* Center text */
            }

            .navbar-logo {
              font-size: 1.125rem; /* Smaller font size for the logo */
              text-align: center; /* Center the logo */
            }
          }
        `}
      </style>
    </div>
  );
}

export default Owner;
