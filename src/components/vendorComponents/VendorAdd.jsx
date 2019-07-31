import React, { Component } from "react";
import { connect } from "react-redux";
import { addVendor } from "../../actions/vendor";

class VendorAdd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newVendorObject: { name: "", prefix: "" },
		};
	}

	inputFieldValueChanged = event => {
		this.setState({
			newVendorObject: {
				...this.state.newVendorObject,
				[event.target.id]: event.target.value,
			},
		});
	};

	addVendor = () => {
		const vendor = this.state.newVendorObject;
		this.props.addVendorLocal(vendor);
		this.setState({
			newVendorObject: { name: "", prefix: "" },
		});
	};

	render = () => {
		return (
			<div className="vendorAdd">
				<h4>Add a new ECR Vendor</h4>
				<p>
					Name:
					<input
						id="name"
						type="text"
						onChange={this.inputFieldValueChanged}
						value={this.state.newVendorObject.name}
					/>
				</p>
				<br />
				<button type="button" onClick={this.addVendor}>
					Add
				</button>
			</div>
		);
	};
}

const mapDispatchToProps = dispatch => ({
	addVendorLocal: vendor => {
		dispatch(addVendor(vendor));
	},
});

export default connect(
	null,
	mapDispatchToProps
)(VendorAdd);
