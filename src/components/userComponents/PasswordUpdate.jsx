import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../actions/user";
import { Link } from "react-router-dom";

import PasswordUpdateForm from "./PasswordUpdateForm";

class PasswordUpdate extends Component {
	updatePasswordButtonClicked = userObject => {
		const user = userObject;

		user.password = user.password;

		this.props.updateUserLocal(user);
	};

	render = () => {
		console.log(`user  ${this.user}`);
		return (
			<div>
				<h2>User: {this.props.user.username}</h2>
				<PasswordUpdateForm
					user={this.props.user}
					updatePasswordButtonClicked={this.updatePasswordButtonClicked}
				/>
				<p>
					<Link to="/vendors">
						<button type="submit">Back</button>
					</Link>
				</p>
			</div>
		);
	};
}

const mapDispatchToProps = dispatch => ({
	updateUserLocal: user => {
		dispatch(updateUser(user));
	},
});

export default connect(
	null,
	mapDispatchToProps
)(PasswordUpdate);
