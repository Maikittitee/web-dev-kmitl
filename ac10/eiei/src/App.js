import logo from './logo.svg';
import './App.css';

import React from 'react';

class Idk extends React.Component{
	
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick() {
		alert(this.props.title)
	}
	
	render() {
		return (
			<button onClick={this.handleClick} type="button" title={this.props.title}>{this.props.title}</button>
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
		<Idk title="My Button" />
      </header>
    </div>
  );
}

export default App;
