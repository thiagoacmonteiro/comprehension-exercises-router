import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Exercise 7: Change this component to receive props from App
class Users extends Component {
  render() {
    const { greetingsMessage } = this.props
    // Exercise 9: Change the route at 'App' using de param 'id' to render the id on the emement <p>
    const { id } = this.props.match.params

    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage }, My awesome Users component { id }</p>
        <Link to="/">Home </Link>
      </div>
    );
  }
};

export default Users;
