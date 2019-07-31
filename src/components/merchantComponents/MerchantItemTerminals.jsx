import React, { Component } from "react";

export default class MerchantItemTerminals extends Component {
	render = () => {
		console.log(this.props);
		return (
			<div>
				{this.props.item.terminals.length === 0 ? (
					<p>No terminals added yet.</p>
				) : (
					<div>
						{this.props.item.terminals.map(t => (
							<ul key={t._id}>
								<li>{t.terminalId}</li>
							</ul>
						))}
					</div>
				)}
			</div>
		);
	};
}
