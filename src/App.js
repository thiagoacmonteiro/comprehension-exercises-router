import React, { Component } from 'react';
import Home from './components/Home';
// Exercise 1: Make the aplication navegable using BrowserRouter
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  }
}

export default App;
