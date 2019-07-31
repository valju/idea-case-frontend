import React, { Component } from "react";

export default class VendorItem extends Component {
	render() {
		const merchantIdListString =
			this.props.item.merchants &&
			this.props.item.merchants.map(
				m =>
					`item(_id: ${m._id}, merchantId: ${m.merchantId}, merchant name: ${
						m.name
					})`
			);
		return (
			<div>
				<span>{this.props.item.name}</span>
				<br />
				<span>{`Prefix: ${this.props.item.prefix}`}</span>
				<br />
				<span>{`Merchants: ${merchantIdListString}`}</span>
			</div>
		);
	}
}
