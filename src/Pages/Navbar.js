import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for styling

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/view-books">View Books</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/view-one-book">View One Book</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/add-one-book">Add a book</Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to="/search/:query">Search Book</Link>
            </li>
            {/* Add more links for your other pages */}
          </ul>
          {/* Add the search bar input element */}
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;