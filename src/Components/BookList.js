import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteBook from './DeleteBook';
import UpdateBook from './UpdateBook';

function BookList() {
  const [books, setBooks] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false); 
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [bookToDeleteId, setBookToDeleteId] = useState(null); 
  const [bookToUpdate, setBookToUpdate] = useState(null); 

  useEffect(() => {
    
    const apiUrl = 'https://localhost:7232/book'; 

    axios.get(apiUrl)
      .then((response) => {
        setBooks(response.data);
        console.log("API Svaret:", response)
      })
      .catch((error) => {
        console.error('Fel vid hämtning av böcker', error);
      });
  }, []);

  
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
      <h2 className='white-text'>All Books in System</h2>
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
              <td>{Boolean(book.isAvaliabel) ? 'true' : 'false'}</td>
              <td>{book.releaseYear}</td>
              <td>
                <button className='btn btn-danger' onClick={() => showDeleteConfirmation(book.id)}>Delete</button>

                
                <button className='btn btn-primary' onClick={() => showUpdateForm(book)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      {showDeleteModal && (
        <DeleteBook
          bookId={bookToDeleteId}
          onDeleteSuccess={() => {
            setShowDeleteModal(false);
            
          }}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}

      
      {showUpdateModal && (
        <UpdateBook
          book={bookToUpdate}
          onUpdateSuccess={() => {
            setShowUpdateModal(false);
            
          }}
          onCancel={() => setShowUpdateModal(false)}
        />
      )}
    </div>
  );
}

export default BookList;
