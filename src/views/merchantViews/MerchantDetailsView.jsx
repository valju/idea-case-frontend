import React, { Component } from "../../../node_modules/react";
import MerchantDetails from "../../components/merchantComponents/MerchantDetails";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default class MerchantDetailsView extends Component {
	render() {
		return (
			<div className="data-container">
				<Header />
				<h2>Merchant details</h2>
				<p> Merchant Id: {this.props.match.params.id}</p>
				<MerchantDetails merchantId={this.props.match.params.id} />
				<Footer />
			</div>
		);
	}
}
