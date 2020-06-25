
class Score extends React.Component {
	constructor(props) {
		super(props);
		this.state = {score: 0};
		// make 'this' available in click handlers
		this.incrementScore = this.incrementScore.bind(this);
		this.decrementScore = this.decrementScore.bind(this);
	}

	incrementScore() {
		this.setState({
			score: this.state.score + 1
		})
	}

	decrementScore() {
		this.setState({
			score: this.state.score - 1
		})
	}

	render() {
		return (
			<div>
				<h2>Score board for the {this.props.teamName}</h2>
				<div>
					Score: {this.state.score} <br/>
					<button onClick={this.incrementScore}>+</button>
					<button onClick={this.decrementScore}>-</button>
				</div>
			</div>
		);
	}
}


var el = document.getElementById('two');
ReactDOM.render(<Score teamName="Tigers" />, el);

