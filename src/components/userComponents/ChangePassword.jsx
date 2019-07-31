import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ChangePassword extends Component {
	render() {
		console.log(this.props.item);
		return (
			<div>
				<Link
					to={{
						pathname: "/user/update/" + this.props.item._id,
						state: { user: this.props.item },
					}}
				>
					<button type="button">Update</button>
				</Link>
			</div>
		);
	}
}
