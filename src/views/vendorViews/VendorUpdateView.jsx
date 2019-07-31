import React, { Component } from "react";
import VendorUpdate from "../../components/vendorComponents/VendorUpdate";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default class VendorUpdateView extends Component {
	render() {
		return (
			<div className="data-container">
				<Header />
				<h2>Update Vendor</h2>
				<VendorUpdate vendor={this.props.location.state.vendor} />
				<Footer />
			</div>
		);
	}
}
