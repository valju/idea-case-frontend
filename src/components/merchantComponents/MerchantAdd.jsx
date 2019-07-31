import React, { Component } from "react";
import { connect } from "react-redux";
import { addMerchant } from "../../actions/merchant";
import { fetchAllVendors } from "../../actions/vendor";

class MerchantAdd extends Component {
	componentDidMount() {
		console.log("did mount");
		this.props.vendorsFetchAll();
	}
	addMerchantButtonClicked = newMerchant => {
		const merchant = newMerchant;

		this.props.addMerchantLocal(merchant);
	};

	render = () => {
		return (
			<div>
				<h4>Add a new merchant</h4>
				{/*<MerchantAddForm
					addMerchantButtonClicked={this.addMerchantButtonClicked}
					vendors={this.props.vendors.vendorList}
				/>*/}
			</div>
		);
	};
}
const mapStateToProps = state => ({
	vendors: state.vendors,
});

const mapDispatchToProps = dispatch => ({
	addMerchantLocal: merchant => {
		dispatch(addMerchant(merchant));
	},
	vendorsFetchAll: () => {
		dispatch(fetchAllVendors());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MerchantAdd);
