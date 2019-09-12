import React, { Component } from "../../../node_modules/react";
import MerchantUpdate from "../../components/merchantComponents/MerchantUpdate";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AddTerminal from "../../components/merchantComponents/AddTerminal";

export default class MerchantUpdateView extends Component {
	render() {
		return (
			<div className="data-container">
				<Header />
				<h2>Update Merchant</h2>
				<AddTerminal id={this.props.match.params.id} />
				<MerchantUpdate merchant={this.props.location.state.merchant} />
				<Footer />
			</div>
		);
	}
}
