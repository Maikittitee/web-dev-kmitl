import React from 'react';

class IncreseButton extends React.Component{
	onTrigger = () =>{
		this.props.parentCallback(1);
	};

	render(){
		return (<button onClick={this.onTrigger} >Vote</button>);
	}
}

class DecreseButton extends React.Component{
	onTrigger = () =>{
		this.props.parentCallback(-1);
	};

	render(){
		return (<button onClick={this.onTrigger}>Unvote</button>);
	};
}
class Card extends React.Component{

	state = {
		vote_cnt: 0,
	}

	handleCallback = (childData) =>{
		let vote_cnt = this.state.vote_cnt;
		if (vote_cnt == 10 && childData > 0)
			return ;
		if (vote_cnt == 0 && childData < 0)
			return ;
		console.log(vote_cnt);
		console.log(childData);
		console.log(childData + vote_cnt);
		this.setState({vote_cnt: (vote_cnt + childData)})
	}

	displayVoteCnt(){
		const vote_cnt = this.state.vote_cnt;
		if (vote_cnt == 10)
			return ("MAX");
		else if (vote_cnt == 0)
			return ("MIN");
		return (vote_cnt);
	}

	render(){
		const {vote_cnt}=this.state;
		return (
			<div>
				<h2>{this.props.title}</h2>
				<p>{this.props.content}</p>
				< IncreseButton parentCallback={this.handleCallback}/>
				< DecreseButton parentCallback={this.handleCallback}/>
				<p>vote_cnt: {this.displayVoteCnt()}</p>
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
