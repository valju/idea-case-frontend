import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateTerminal } from "../../actions/terminal";
import { fetchAllMerchants } from "../../actions/merchant";
import TerminalItem from "./TerminalItem";

class TerminalUpdate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editedTerminalObj: null,
		};
	}

	componentDidMount() {
		if (this.props.terminals.terminalCurrent != null) {
			this.setState({
				editedTerminalObj: this.props.temrinals.terminalCurrent[0],
			});
		}
	}

	inputFieldValueChanged = event => {
		const newField = event.target.name;
		let newValue = event.target.value;
		this.setState({
			editedTerminalObj: {
				...this.state.editedTerminalObj,
				[newField]: newValue,
			},
		});
	};

	updateTerminal = () => {
		this.props.updateTerminalLocal(this.state.editedTerminalObj);
		if (updateTerminal && this.state.editedTerminalObj.id !== "") {
			alert("Update successful!");
		} else {
			alert("ID is required!");
		}
		window.location.href = "/terminals/";
	};

	render = () => {
		return (
			<div>
				{this.state.editedTerminalObj === null ? (
					<p>Waiting server response for update ...</p>
				) : (
					<div>
						<h3>Terminal</h3>
						<TerminalItem item={this.state.editedTerminalObj} />
						<div>
							<input
								name="id"
								onChange={this.inputFieldValueChanged}
								value={this.state.editedTerminalObj.id}
							/>
							<br />
							<br />
							<button type="button" onClick={this.updateTerminal}>
								Save
							</button>
							<p>
								<Link to="/terminals/">Back to terminal list</Link>
							</p>
						</div>
					</div>
				)}
			</div>
		);
	};
}

const mapDispatchToProps = dispatch => ({
	updateTerminalLocal: terminal => {
		dispatch(updateTerminal(terminal));
	},
	merchantsFetchAll: () => {
		dispatch(fetchAllMerchants());
	},
});
const mapStateToProps = state => ({
	terminals: state.terminals,
	merchants: state.merchants,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TerminalUpdate);
