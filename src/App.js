import React, { Component } from 'react';
import Home from './components/Home';
// Exercise 1: Make the aplication navegable using BrowserRouter
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* Exercise 2: Create a route to Home */}
        <Route path="/" component={ Home } />
      </BrowserRouter>
    );
  }
}

export default App;
