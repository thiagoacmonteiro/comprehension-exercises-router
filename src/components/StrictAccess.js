import React, { Component } from 'react';

// Exercise 11: Create component StrictAccess to render 'Welcome Thiago' if username is Thiago and password is 1234
class StrictAccess extends Component {
  render() {
    const { username, password } = this.props.match.params;

    return (
      <div>
        { username === 'Thiago'
          && password === '1234'
          ? <p>Welcome Thiago!</p> : alert('Access Denied') }
      </div>
    )
  }
}

export default StrictAccess;