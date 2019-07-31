import React, { Component } from "react";
import { connect } from "react-redux";
import VendorItem from "./VendorItem";
import { getVendor } from "../../actions/vendor";
import { Link } from "react-router-dom";
import VendorItemMerchants from "./VendorItemMerchants";
import VendorItemName from "./VendorItemName";

class VendorDetails extends Component {
	componentDidMount = () => {
		this.props.vendorGetById(this.props.vendorId);
	};

	render = () => {
		return (
			<div>
				{this.props.vendors.vendorCurrent === null ? (
					<VendorItem item={{ name: "placeholder" }} />
				) : (
					<>
						<h2>ECR Vendor Name:</h2>

						<VendorItemName item={this.props.vendors.vendorCurrent} />
						<br />
						<br />

						<VendorItemMerchants item={this.props.vendors.vendorCurrent} />
					</>
				)}
				<br />
				<br />
				<button type="button">
					<Link to="/vendors">Back to all vendors</Link>
				</button>
			</div>
		);
	};
}

const mapDispatchToProps = dispatch => ({
	vendorGetById: id => {
		dispatch(getVendor(id));
	},
});

const mapStateToProps = state => ({
	vendors: state.vendors,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VendorDetails);
