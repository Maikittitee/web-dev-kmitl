import React from 'react';

class IncreseButton extends React.Component{
	render(){
		return (<button>Vote</button>);
	}
}

class DecreseButton extends React.Component{
	render(){
		return (<button>Unvote</button>);
	}
}
class Card extends React.Component{
	render(){
		return (
			<div>
				<h2>{this.props.title}</h2>
				<p>{this.props.content}</p>
				< IncreseButton />
				< DecreseButton />

			</div>
		);
		}
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<Card title="Fried Rice" content="lorem lipsom"/>
		<Card title="Lod chong" content="lorem lipsom"/>
      </header>
    </div>
  );
}

export default App;
