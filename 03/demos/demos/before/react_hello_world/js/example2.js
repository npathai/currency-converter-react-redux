
class Score extends React.Component {
	render() {
		return (
			<div>
				<h2>Score board for the {this.props.teamName}</h2>
				<div>
					Score: 50 <br/>
					<button>+</button>
					<button>-</button>
				</div>
			</div>
		);
	}
}


var el = document.getElementById('two');
ReactDOM.render(<Score teamName="Tigers" />, el);
