import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { Link } from 'react-router-dom';
// Exercise 1: Make the aplication navegable using 'BrowserRouter'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* Exercise 2: Create a route to 'Home' */}
        <Route path exact="/" component={ Home } /> {/* Exercise 4: Change the way of routing for 'Home' to avoid rendering another component */}
        {/* Exercise 3: Create a route to 'About' */}
        <Route path="/about" component={ About } />
        {/* Exercise 5: Create a route to 'Users' */}
        <Route path="/users" render={(props) => <Users { ...props } greetingsMessage="Good Morning!" /> } /> {/* Exercise 8: Assign a string to the param 'greetingsMessage' to be seen by 'Users' */}
        {/* Exercise 6: Create links to 'About' and 'Users' */}
        <Link to="/about">About </Link>
        <Link to="/users">Users</Link>
      </BrowserRouter>
    );
  }
}

export default App;
