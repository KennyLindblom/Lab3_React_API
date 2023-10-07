import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_BASE_URL = 'https://localhost:7232'; 

function SingleBook(props) {
  const [book, setBook] = useState({});
  const [bookId, setBookId] = useState('');
  const [notFound, setNotFound] = useState(false);

  const handleInputChange = (event) => {
    setBookId(event.target.value);
  };

  const handleGetBook = () => {
    axios.get(`${API_BASE_URL}/book/${bookId}`)
      .then((response) => {
        console.log("API svar:", response)
        if (response.status === 200) {
          setBook(response.data);
          setNotFound(false);
        } else if (response.status === 404) {
          setBook({});
          setNotFound(true);
        }
      })
      .catch((error) => {
        console.error('Fel vid hämtning av enskild bok', error);
      });
  };

  return (
    <div className="container">
      <h2 className='white-text'>Get Single Book</h2>
      <div className="form-group">
        <label htmlFor="bookId" className='white-text'>Enter a book ID:</label>
        <input
          className="form-control"
          type="text"
          id="bookId"
          value={bookId}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" onClick={handleGetBook}>
          Get Book
        </button>
      </div>
      {notFound && (
        <div className="alert alert-danger">
          Boken med det angivna ID:et hittades inte.
        </div>
      )}
      {book.title && (
        <div className="card mt-3">
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
      )}
    </div>
  );
}

export default SingleBook;





