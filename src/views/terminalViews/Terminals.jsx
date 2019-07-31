import React, { Component } from "../../../node_modules/react";
import TerminalList from "../../components/terminalComponents/TerminalList";
import TerminalAdd from "../../components/terminalComponents/TerminalAdd";
import Header from "../../components/Header";

export default class Terminals extends Component {
	render() {
		return (
			<div>
				<Header />
				<h2>All Terminals</h2>
				<TerminalAdd />
				<TerminalList />
			</div>
		);
	}
}
