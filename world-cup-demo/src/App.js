import React, { Component } from 'react';
import Login from './components/Login'
import Teams from './components/teams'

class App extends Component {
  render() {
    return (
      <div >
         <Login></Login>
         <Teams></Teams>
      </div>
    );
  }
}

export default App;
