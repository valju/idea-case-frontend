import React, { Component } from "react";
import { connect } from "react-redux";
import { updateMerchant } from "../../actions/merchant";
import { fetchAllVendors } from "../../actions/vendor";
import { Link } from "react-router-dom";
import { deleteTerminal } from "../../actions/terminal";
import { fetchAllUsers } from "../../actions/user";
import MerchantUpdateForm from "./MerchantUpdateForm";

class MerchantUpdate extends Component {
	componentDidMount() {
		this.props.vendorsFetchAll();
		this.props.usersFetchAll();
	}
	updateMerchantButtonClicked = merchantObject => {
		const merchant = merchantObject;

		merchant.name = merchant.name;
		merchant.vendorId = Number(merchant.vendorId);
		this.props.updateMerchantLocal(merchant);
	};

	render = () => {
		console.log(this.props);
		return (
			<div>
				<h2>Merchant {this.props.merchant._id}</h2>
				<MerchantUpdateForm
					merchant={this.props.merchant}
					updateMerchantButtonClicked={this.updateMerchantButtonClicked}
					vendors={this.props.vendors.vendorList}
					delete={this.props.deleteTerminalLocal}
					users={this.props.users}
				/>
				<p>
					<Link to="/merchants">
						<button type="submit">Back to all merchants</button>
					</Link>
				</p>
			</div>
		);
	};
}
const mapDispatchToProps = dispatch => ({
	updateMerchantLocal: merchant => {
		dispatch(updateMerchant(merchant));
	},
	vendorsFetchAll: () => {
		dispatch(fetchAllVendors());
	},
	usersFetchAll: () => {
		dispatch(fetchAllUsers());
	},

	deleteTerminalLocal: id => {
		dispatch(deleteTerminal(id));
	},
});

const mapStateToProps = state => ({
	vendors: state.vendors,
	terminals: state.terminals,
	users: state.users,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MerchantUpdate);
