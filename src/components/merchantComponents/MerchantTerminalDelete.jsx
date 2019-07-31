import React, { Component } from "react";

export default class MerchantTerminalDelete extends Component {
	render() {
		return (
			<div>
				<button
					type="button"
					onClick={() => this.props.delete(this.props.item._id)}
				>
					Delete
				</button>
			</div>
		);
	}
}
