import VendorList from "../../components/vendorComponents/VendorList";
import Header from "../../components/Header";
import React, { Component } from "react";
import Footer from "../../components/Footer";
import AddVendor from "../../components/vendorComponents/AddVendor";
//import { Link } from "react-router-dom";

export default class Vendors extends Component {
	render() {
		return (
			<div className="data-container">
				<Header />
				<AddVendor />
				{/*<button type="button">
					<Link to="/users">Show userlist</Link>
		</button>*/}
				<VendorList />
				<Footer />
			</div>
		);
	}
}
