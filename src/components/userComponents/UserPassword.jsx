import React, { Component } from "react";

export default class UserPassword extends Component {
	render = () => {
		return (
			<div>
				{this.props.item.users.length === 0 ? (
					<p>No user found.</p>
				) : (
					<div>
						{this.props.item.users.map(u => (
							<ul key={u._id} />
						))}
					</div>
				)}
			</div>
		);
	};
}
