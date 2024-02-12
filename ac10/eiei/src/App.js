import logo from './logo.svg';
import './App.css';

import { Component } from "react";
import React from 'react';

class Idk extends React.Component{
	display(){
		alert('Hello world!');
	}
	render() {
		return (
			<button onClick={this.display} type="button">Click Me!</button>
		);
	}
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
		<Idk />
      </header>
    </div>
  );
}

export default App;
