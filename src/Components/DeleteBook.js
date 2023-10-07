import React from 'react';
import axios from 'axios';

function DeleteBook(props) {
  const { bookId, onDeleteSuccess, onCancel } = props;

  const handleDelete = () => {
    const API_BASE_URL = 'https://localhost:7232';

    axios
      .delete(`${API_BASE_URL}/book/${bookId}`)
      .then((response) => {
        console.log('Boken har tagits bort:', response.data);
        onDeleteSuccess();
        window.location.reload();
      })
      .catch((error) => {
        console.error('Fel vid borttagning av boken', error);
      });
  };

  return (
    <div>
      <h3>Do You Really Wanna Delete?</h3>
      <button className='btn btn-danger' onClick={handleDelete}>Yes</button>
      <button className='btn btn-success' onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default DeleteBook;

