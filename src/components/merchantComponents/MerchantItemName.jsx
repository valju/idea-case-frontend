import React, { Component } from "react";

export default class MerchantItemName extends Component {
	render() {
		return (
			<div>
				<span>{this.props.item.name}</span>
			</div>
		);
	}
}
