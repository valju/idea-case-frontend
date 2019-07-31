import React, { Component } from "react";

export default class TerminalItem extends Component {
	render() {
		return <span>{`Terminal Id: ${this.props.item._id}`}</span>;
	}
}
