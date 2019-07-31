import React, { Component } from "react";

export default class VendorItemName extends Component {
	render() {
		return (
			<div>
				<span>{this.props.item.name}</span>
			</div>
		);
	}
}
