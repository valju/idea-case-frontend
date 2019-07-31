import React, { Component } from "react";
import { connect } from "react-redux";
import TerminalListItem from "./TerminalListItem";
import { fetchAllTerminals, deleteTerminal } from "../../actions/terminal";

class TerminalList extends Component {
	componentDidMount() {
		console.log("component did mount");
		this.props.terminalsFetchAll();
	}

	render() {
		return (
			<div>
				<h4> List of Terminals </h4>
				<ol>
					{this.props.terminals.terminalList.map(item => (
						<TerminalListItem
							key={item._id}
							item={item}
							delete={this.props.deleteTerminalLocal}
						/>
					))}
				</ol>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	terminalsFetchAll: () => {
		console.log("terminals fetch all");
		dispatch(fetchAllTerminals());
	},
	deleteTerminalLocal: id => {
		dispatch(deleteTerminal(id));
	},
});

const mapStateToProps = state => ({
	terminals: state.terminals,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TerminalList);
