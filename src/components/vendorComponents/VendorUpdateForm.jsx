import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import util from "util";

class VendorUpdateForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vendorObject: {
				id: 0,
				name: "",
				prefix: "",
			},
		};
	}

	componentDidMount = () => {
		console.log("component did mount");
		this.setState({
			vendorObject: {
				id: this.props.vendor._id,
				name: this.props.vendor.name,
				prefix: this.props.vendor.prefix,
			},
		});
		console.dir(
			`vendor object on component mount${util.inspect(this.state.vendorObject)}`
		);
	};

	inputFieldValueChanged = event => {
		this.setState({
			vendorObject: {
				...this.state.vendorObject,
				[event.target.id]: event.target.value,
			},
		});
	};

	toggleCheckboxValue = () => {
		this.setState({
			vendorObject: {
				...this.state.vendorObject,
			},
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		const vendorObject = this.state.vendorObject;
		this.props.updateVendorButtonClicked(vendorObject);
		this.props.history.push("/vendors");
	};

	render = () => {
		return (
			<form>
				Name:{" "}
				<input
					id="name"
					type="text"
					onChange={this.inputFieldValueChanged}
					value={this.state.vendorObject.name}
				/>
				<br />
				Prefix:{" "}
				<input
					id="prefix"
					type="text"
					onChange={this.inputFieldValueChanged}
					value={this.state.vendorObject.prefix}
				/>
				<br />
				<button type="button" onClick={this.handleSubmit}>
					Update ECR Vendor
				</button>
			</form>
		);
	};
}
export default withRouter(VendorUpdateForm);
