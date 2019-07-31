import React, { Component } from "../../../node_modules/react";
import TerminalDetails from "../../components/terminalComponents/TerminalDetails";

export default class TerminalDetailsView extends Component {
	render() {
		return (
			<div>
				<h2>Terminal Details</h2>
				<p> Terminal Id: {this.props.match.params.id}</p>
				<TerminalDetails terminalId={this.props.match.params.id} />
			</div>
		);
	}
}
