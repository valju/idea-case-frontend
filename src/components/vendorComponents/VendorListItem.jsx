import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class VendorListItem extends Component {
	render() {
		return (
			<div>
				<button
					type="button"
					onClick={() => this.props.delete(this.props.item._id)}
				>
					Delete
				</button>
				<Link
					to={{
						pathname: "/vendor/update/" + this.props.item._id,
						state: { vendor: this.props.item },
					}}
				>
					<button type="button">Update</button>
				</Link>
			</div>
		);
	}
}
