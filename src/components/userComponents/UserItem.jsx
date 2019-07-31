import React, { Component } from "react";

export default class UserItem extends Component {
	render() {
		return (
			<div>
				<span>{this.props.item.name}</span>
			</div>
		);
	}
}
