import React, { Component } from "react";
import { Link } from "react-router-dom";
import MemberItem from "./MemberItem";

export default class MemberListItem extends Component {
	render() {
		return (
			<li>
				<Link to={"/Member/" + this.props.item.id}>
					<MemberItem item={this.props.item} />
				</Link>
			</li>
		);
	}
}
