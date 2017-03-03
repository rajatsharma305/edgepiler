import React, { Component } from 'react';
import Header from './components/header';
import Core from './components/core';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <Core/>
      </div>
    );
  }
}

export default App;
