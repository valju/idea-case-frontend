import React, { Component } from "../../../node_modules/react";
import VendorDetails from "../../components/vendorComponents/VendorDetails";
import AddMerchant from "../../components/vendorComponents/AddMerchant";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default class VendorDetailsView extends Component {
	render() {
		return (
			<div className="data-container">
				<Header />
				<div className="vendorDetails">
					<h2>ECR Vendor Details</h2>
					<p>ECR Vendor Id: {this.props.match.params.id}</p>
					<VendorDetails vendorId={this.props.match.params.id} />
					<br />
					<AddMerchant vendorId={this.props.match.params.id} />
				</div>
				<Footer />
			</div>
		);
	}
}
