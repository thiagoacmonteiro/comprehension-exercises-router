import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
// Exercise 1: Make the aplication navegable using BrowserRouter
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* Exercise 2: Create a route to Home */}
        <Route path exact="/" component={ Home } /> {/* Exercise 4: Change the way of routing for 'Home' to avoid rendering another component */}
        {/* Exercise 3: Create a route to About */}
        <Route path="/about" component={ About } />
      </BrowserRouter>
    );
  }
}

export default App;
