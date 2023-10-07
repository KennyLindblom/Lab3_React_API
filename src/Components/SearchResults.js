import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SearchResults() {
    const {query} = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [books, setBooks] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false); 
  const [showUpdateModal, setShowUpdateModal] = useState(false); 
  const [bookToDeleteId, setBookToDeleteId] = useState(null); 
  const [bookToUpdate, setBookToUpdate] = useState(null); 

  useEffect(() => {
    
    const apiUrl = `https://localhost:7232/book/search?searchString=${query}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error('Error fetching search results', error);
      });
  }, [query]);

  const showDeleteConfirmation = (bookId) => {
    setBookToDeleteId(bookId);
    setShowDeleteModal(true);
  };

  
  const showUpdateForm = (book) => {
    setBookToUpdate(book);
    setShowUpdateModal(true);
  };

  return (
    <div>
      <h2>Search Results for "{query}" </h2>
      <h2>All Books in System</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Is Available</th>
            <th>Release Year</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.isAvailable ? 'true' : 'false'}</td>
              <td>{book.releaseYear}</td>
              <td>
                <button className='btn btn-danger' onClick={() => showDeleteConfirmation(book.id)}>Delete</button>

                
                <button className='btn btn-primary' onClick={() => showUpdateForm(book)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;