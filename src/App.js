import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { Link } from 'react-router-dom';
// Exercise 1: Make the aplication navegable using 'BrowserRouter'
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* Exercise 10: Encapsulate routes inside the Switch and order from the most specific to the most generic */}
        <Switch>
          {/*  */}
          <Route path="/strictaccess/:username/:password" render={(props) => <StrictAccess { ...props } /> } />
          {/* Exercise 3: Create a route to 'About' */}
          <Route path="/about" component={ About } />
          {/* Exercise 5: Create a route to 'Users' */}
          <Route path="/users/:id" render={(props) => <Users { ...props } greetingsMessage="Good Morning!" /> } /> {/* Exercise 8: Assign a string to the param 'greetingsMessage' to be seen by 'Users' */}
          {/* Exercise 2: Create a route to 'Home' */}
          <Route path exact="/" component={ Home } /> {/* Exercise 4: Change the way of routing for 'Home' to avoid rendering another component */}
          {/* Exercise 6: Create links to 'About' and 'Users' */}
        </Switch>
        <Link to="/about">About </Link>
        <Link to="/users">Users</Link>        
      </BrowserRouter>
    );
  }
}

export default App;
