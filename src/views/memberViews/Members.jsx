import React, { Component } from "react";
import MemberList from "../../components/memberComponents/MemberList";
import MemberAdd from "../../components/memberComponents/MemberAdd";

export default class Members extends Component {
	render() {
		return (
			<div>
				<h2>All Members</h2>
				<MemberAdd />
				<MemberList />
			</div>
		);
	}
}
