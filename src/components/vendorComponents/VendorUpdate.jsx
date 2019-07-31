import React, { Component } from "react";
import { connect } from "react-redux";
import { updateVendor } from "../../actions/vendor";
import { Link } from "react-router-dom";

import VendorUpdateForm from "./VendorUpdateForm";

class VendorUpdate extends Component {
	updateVendorButtonClicked = vendorObject => {
		const vendor = vendorObject;

		vendor.name = vendor.name;
		vendor.prefix = vendor.prefix;

		this.props.updateVendorLocal(vendor);
	};

	render = () => {
		console.log(this.vendor);
		return (
			<div>
				<h2>Vendor {this.props.vendor.name}</h2>
				<VendorUpdateForm
					vendor={this.props.vendor}
					updateVendorButtonClicked={this.updateVendorButtonClicked}
				/>
				<p>
					<Link to="/vendors">
						<button type="submit">Back to all ECR Vendors</button>
					</Link>
				</p>
			</div>
		);
	};
}

const mapDispatchToProps = dispatch => ({
	updateVendorLocal: vendor => {
		dispatch(updateVendor(vendor));
	},
});

export default connect(
	null,
	mapDispatchToProps
)(VendorUpdate);
