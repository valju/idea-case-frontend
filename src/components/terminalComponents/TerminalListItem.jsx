import React, { Component } from "react";
import { Link } from "react-router-dom";
import TerminalItem from "./TerminalItem";

export default class TerminalListItem extends Component {
	render() {
		return (
			<li>
				<TerminalItem item={this.props.item} />
				<span> </span>
				<Link to={"/terminal/" + this.props.item._id}>
					<button>View</button>
				</Link>
				<span> </span>
				<button
					onClick={() => {
						this.props.delete(this.props.item._id);
					}}
				>
					Delete
				</button>
				<Link
					to={{
						pathname: "/terminal/" + this.props.item._id,
						state: { terminal: this.props.item },
					}}
				>
					<button type="button">Update</button>
				</Link>
				<hr />
			</li>
		);
	}
}
