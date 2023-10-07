import React, { useState } from 'react';
import axios from 'axios';

function SearchBooks() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(''); 

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const apiUrl = `https://localhost:7232/book/search?searchString=${searchQuery}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setSearchResults(response.data);
        setNoResults(searchQuery === null); 
      })
      .catch((error) => {
        console.error('Error searching for books', error);
      });
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSearch} className="form-inline justify-content-center">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search by title or author"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>

      {noResults && (
        <div className="mt-4">
          <p>No book or author like that in the database.</p>
        </div>
      )}

{searchResults.length > 0 && (
  <div className="mt-4">
    <h3 className="white-text">Search Results:</h3>
    {searchResults.map((book) => (
      <div key={book.id} className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Book Details</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Title:</strong> {book.title}
            </li>
            <li className="list-group-item">
              <strong>Author:</strong> {book.author}
            </li>
            <li className="list-group-item">
              <strong>Genre:</strong> {book.genre}
            </li>
            <li className="list-group-item">
              <strong>Is Available:</strong> {book.isAvaliabel ? 'true' : 'false'}
            </li>
            <li className="list-group-item">
              <strong>Release Year:</strong> {book.releaseYear}
            </li>
            <li className="list-group-item">
              <strong>Description:</strong> {book.description}
            </li>
          </ul>
        </div>
      </div>
    ))}
  </div>
)}






    </div>
  );
}

export default SearchBooks;