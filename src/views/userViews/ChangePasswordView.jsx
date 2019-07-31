import React, { Component } from "react";
import PasswordUpdate from "../../components/userComponents/PasswordUpdate";

export default class ChangePasswordView extends Component {
	render() {
		return (
			<div>
				<h2>Update Password</h2>
				<PasswordUpdate user={this.props.location.state.user} />
			</div>
		);
	}
}
