import React, { Component } from "react";
import { connect } from "react-redux";
import TerminalItem from "./TerminalItem";
import { getTerminal } from "../../actions/terminal";
import { Link } from "react-router-dom";

class TerminalDetails extends Component {
	componentDidMount = () => {
		this.props.terminalGetById(this.props.terminalId);
	};

	render = () => {
		return (
			<div>
				<h2>Terminal</h2>

				{this.props.terminals.terminalCurrent === null ? (
					<TerminalItem item={{ _id: "placeholder" }} />
				) : (
					<TerminalItem item={this.props.terminals.terminalCurrent} />
				)}
				<p>
					<Link to="/terminals">Back to all terminals</Link>
				</p>
			</div>
		);
	};
}

const mapDispatchToProps = dispatch => ({
	terminalGetById: id => {
		dispatch(getTerminal(id));
	},
});

const mapStateToProps = state => ({
	terminals: state.terminals,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TerminalDetails);
