import React, { useState } from 'react';
import axios from 'axios';

export default function AddBookForm(props) {
  const initialFormData = {
    title: '',
    author: '',
    genre: '',
    isAvaliabel: 'false',
    releaseYear: new Date().getFullYear().toString(),
    description: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Book Was Added with no problems")

    const bookToCreate = {
        title: formData.title,
      author: formData.author,
      genre: formData.genre,
      isAvaliabel: formData.isAvaliabel,
      releaseYear: formData.releaseYear,
      description: formData.description,
    };

    const urlToCreate = 'https://localhost:7232/book';

    axios
      .post(urlToCreate, bookToCreate, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response.data);
        //props.onBookCreated(response.data); 
      })
      .catch((error) => {
        console.error(error);
        alert(error.message || 'Somethin went wrong when creating the book');
      });
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setShowSuccessMessage(false); 
  };

  return (
    <form className="w-100 px-5">
      <h1 className="white-text">Create new Book</h1>
      {showSuccessMessage && (
        <div className="alert alert-success" role="alert">
          Your Book has been added 
        </div>
      )}

      <div className="mt-3">
        <label className="h3 form-label white-text">Title</label>
        <input
          value={formData.title}
          name="title"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mt-3">
        <label className="h3 form-label white-text">Author</label>
        <input
          value={formData.author}
          name="author"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mt-3">
        <label className="h3 form-label white-text">Genre</label>
        <input
          value={formData.genre}
          name="genre"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mt-3">
        <label className="h3 form-label white-text">Published</label>
        <input
          value={formData.releaseYear}
          name="releaseYear"
          type="number"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mt-3">
        <label className="h3 form-label white-text">Description</label>
        <input
          value={formData.description}
          name="description"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mt-3">
        <label className="h3 form-label white-text">Available</label>
        <input
          value={formData.isAvaliabel}
          name="isAvaliable"
          type="checkbox"
          className="checkboxDesign"
          onChange={(e) =>
            setFormData({ ...formData, isAvaliabel: e.target.checked })
          }
        />
      </div>

      <button onClick={handleSubmit} className="btn btn-success btn-lg w-40 mt-3">
        Submit
      </button>
      <button
        type="button"
        onClick={resetForm}
        className="btn btn-secondary btn-lg w-40 mt-3 mr-20"
      >
        Reset
      </button>
    </form>
  );
}

