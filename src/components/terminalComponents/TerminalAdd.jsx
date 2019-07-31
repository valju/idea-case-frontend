import React, { Component } from "react";
import { connect } from "react-redux";
import { addTerminal } from "../../actions/terminal";

class TerminalAdd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newTerminalObject: { id: "" },
		};
	}

	inputValueChanged = event => {
		this.setState({
			newTerminalObject: {
				...this.state.newTerminalObject,
				[event.target.id]: event.target.value,
			},
		});
	};

	addTerminal = () => {
		const terminal = this.state.newTerminalObject;
		this.props.addTerminalLocal(terminal);
		this.setState({
			newTemrinalObject: { id: "" },
		});
	};

	render = () => {
		return (
			<div>
				<h4>Add New Terminal</h4>
				<p>
					ID:{" "}
					<input
						id="id"
						type="text"
						onChange={this.inputValueChanged}
						value={this.state.newTerminalObject.id}
					/>
					<br />
					<button type="button" onClick={this.addTerminal}>
						Add
					</button>
				</p>
			</div>
		);
	};
}

const mapDispatchToProps = dispatch => ({
	addTerminalLocal: terminal => {
		dispatch(addTerminal(terminal));
	},
});

export default connect(
	null,
	mapDispatchToProps
)(TerminalAdd);
