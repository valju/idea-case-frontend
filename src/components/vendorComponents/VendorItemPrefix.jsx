import React, { Component } from "react";

export default class VendorItemPrefix extends Component {
	render() {
		return (
			<div>
				<span>{this.props.item.prefix}</span>
			</div>
		);
	}
}
