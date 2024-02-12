import logo from './logo.svg';
import './App.css';

import { Component } from "react";
import React from 'react';

class Haha1 extends React.Component{
	render() {
		return (
			<button type="button">Click Me!</button>
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
		<Haha1 />
      </header>
    </div>
  );
}

export default App;
