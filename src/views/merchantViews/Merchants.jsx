import React, { Component } from "../../../node_modules/react";
import MerchantAdd from "../../components/merchantComponents/MerchantAdd";
import MerchantList from "../../components/merchantComponents/MerchantList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AddMerchant from "../../components/vendorComponents/AddMerchant";

export default class Merchants extends Component {
	render() {
		return (
			<div className="data-container">
				<Header />

				<MerchantAdd />
				<AddMerchant />
				<h2>All Merchants</h2>
				<MerchantList />
				<Footer />
			</div>
		);
	}
}
