import React, { Component } from "react";
import MemberDetails from "../../components/memberComponents/MemberDetails";

export default class MemberDetailsView extends Component {
	render() {
		return (
			<div>
				<h2> Member Details</h2>
				<MemberDetails id={this.props.match.params.id} />
			</div>
		);
	}
}
