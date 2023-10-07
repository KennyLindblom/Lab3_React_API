import React, { useState } from 'react';
import axios from 'axios';


function UpdateBook(props) {
  const { book, onUpdateSuccess, onCancel } = props;

  const [formData, setFormData] = useState({
    id: book.id,
    title: book.title,
    author: book.author,
    genre: book.genre,
    isAvaliabel: book.isAvaliabel, 
    releaseYear: book.releaseYear,
    description: book.description,
  });

  const handleInputChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleUpdate = () => {
    const API_BASE_URL = 'https://localhost:7232';

    axios
      .put(`${API_BASE_URL}/book/${book.id}`, formData)
      .then((response) => {
        console.log('Boken har uppdaterats:', response.data);
        onUpdateSuccess(); 
        window.location.reload();
      })
      .catch((error) => {
        console.error('Fel vid uppdatering av boken', error.response.data);
        
      });
  };

  return (
    <div className='container'>
      <h3 className='text-white'>Update Book</h3>
      <form>
        
        <div className="form-group">
          <label className='text-white'>Title:</label>
          <input
            className="form-control"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className='text-white'>Author:</label>
          <input
            className="form-control"
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className='text-white'>Genre:</label>
          <input
            className="form-control"
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className='text-white'>Is Available:</label>
          <input
            className="form-check-input"
            type="checkbox"
            name="isAvaliabel"
            checked={formData.isAvaliabel}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className='text-white'>Release Year:</label>
          <input
            className="form-control"
            type="text"
            name="releaseYear"
            value={formData.releaseYear}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className='text-white'>Description:</label>
          <input
            className="form-control"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-primary" type="button" onClick={handleUpdate}>
          Update
        </button>
        <button className="btn btn-secondary" type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
    
  );
}

export default UpdateBook;

