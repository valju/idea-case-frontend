import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MerchantListItem extends Component {
	render() {
		//console.log(this.props.item);
		return (
			<div>
				<button
					type="button"
					onClick={() => {
						this.props.delete(this.props.item._id);
					}}
				>
					Delete
				</button>
				<Link
					to={{
						pathname: "/merchant/update/" + this.props.item._id,
						state: { merchant: this.props.item },
					}}
				>
					<button type="button">Update</button>
				</Link>
			</div>
		);
	}
}
