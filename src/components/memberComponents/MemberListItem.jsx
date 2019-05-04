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
				<span> </span> {/* Just one space added before delete button */}
				<button
					onClick={() => {
						this.props.deleteMemberClicked(this.props.item.id);
					}}
				>
					X
        </button>
				<span> </span>
				<Link to={"/MemberUpdate/" + this.props.item.id}>
					<button type="button">Update this member</button>
				</Link>
			</li>
		);
	}
}
