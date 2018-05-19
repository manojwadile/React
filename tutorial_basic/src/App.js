import React, { Component } from 'react';
//import logo from './logo.svg';
import Flat from './components/flat'
import './branding/style/app.css'

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <Flat />
        </div>
        <div className="col-md-4">.col-md-6</div>
      </div>
    );
  }
}

export default App;
