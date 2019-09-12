import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import util from "util";

class PasswordUpdateForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userObject: {
				id: 0,
				password: "",
			},
		};
	}

	componentDidMount = () => {
		console.log("component did mount");
		this.setState({
			userObject: {
				id: this.props.user._id,
				password: this.props.user.password,
			},
		});
		console.dir(
			`user object on component mount${util.inspect(this.state.userObject)}`
		);
	};

	inputFieldValueChanged = event => {
		this.setState({
			userObject: {
				...this.state.userObject,
				[event.target.id]: event.target.value,
			},
		});
	};

	toggleCheckboxValue = () => {
		this.setState({
			userObject: {
				...this.state.userObject,
			},
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		const userObject = this.state.userObject;
		this.props.updatePasswordButtonClicked(userObject);
		this.props.history.push("/merchants");
	};

	render = () => {
		return (
			<form>
				New password:{" "}
				<input
					id="password"
					type="text"
					onChange={this.inputFieldValueChanged}
					value={this.state.userObject.password || ""}
				/>
				<br />
				<button type="button" onClick={this.handleSubmit}>
					Update password
				</button>
			</form>
		);
	};
}
export default withRouter(PasswordUpdateForm);
