import React from 'react';
import './App.css';
import Navbar from './Pages/Navbar';
import BookList from './Components/BookList';
import SingleBook from './Components/SingelBook';
import AddBookForm from './Components/AddBookForm';
import Homepage from './Components/HomePage';
import SearchResults from './Components/SearchResults';
import SearchBooks from './Components/SearchBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/view-books" element={<BookList />} />
          <Route path="/view-one-book" element={<SingleBook />} />
          <Route path="/add-one-book" element={<AddBookForm />} />
          <Route path="/search/:query" element={<SearchBooks />} />
        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;