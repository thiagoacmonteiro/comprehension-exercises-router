import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Exercise 7: Change this component to receive props from App
class Users extends Component {
  render() {
    const { greetingsMessage } = this.props

    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage }, My awesome Users component </p>
        <Link to="/">Home </Link>
      </div>
    );
  }
};

export default Users;
