import React, { Component } from "react";

export default class MerchantItem extends Component {
	render() {
		const terminalIdListString =
			this.props.item.terminals &&
			this.props.item.terminals.map(
				t => `item(_id: ${t._id}, terminalId: ${t.terminalId})`
			);
		return (
			<>
				<>
					{`Merchant name: ${this.props.item.name} 
					`}

					{`Terminals: ${terminalIdListString}`}
				</>
			</>
		);
	}
}
