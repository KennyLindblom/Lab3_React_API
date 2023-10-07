import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from './Typewriter';
import logo from '../logo.svg'; 




function Homepage() {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome Library 2000</h1>
        <p className="lead">Using API to see,add and delete books in our system</p>
        <hr className="my-4" />
        <p>Take a look at my other projects!</p>
        <a className="btn btn-primary btn-lg" href="https://github.com/KennyLindblom" role="button">Learn More</a>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Powerd by React</p>
        <div>
          <p className='white-text'>
          <Typewriter text="This website was made by Kenny Lindblom......." delay={80} />
          </p>
        </div>
    </div>
  );
}

export default Homepage;
