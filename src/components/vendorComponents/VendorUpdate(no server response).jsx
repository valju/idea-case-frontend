import React, { Component } from "react";
import { connect } from "react-redux";
import { updateVendor } from "../../actions/vendor";
import VendorItem from "./VendorItemName";
import { Link } from "react-router-dom";
import AddMerchant from "./AddMerchant";
import util from "util";

class VendorUpdate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editedVendor: null,
		};
	}

	componentDidMount() {
		if (this.props.vendors.vendorCurrent != null) {
			this.setState({
				editedVendor: this.props.vendors.vendorCurrent,
			});
		}
		console.log(util.inspect(this.state.editedVendor));
	}

	inputFieldValueChanged = event => {
		console.log("input value changed");
		const updatedField = event.target.id;
		let updatedValue = event.target.value;

		this.setState({
			editedVendor: {
				...this.state.editedVendor,
				[updatedField]: updatedValue,
			},
		});
		console.log("edited vendor state set for the new values");
	};

	updateVendor = () => {
		this.props.updateVendorLocal(this.state.editedVendor);
		if (updateVendor && this.state.editedVendor.name !== "") {
			alert("Update successful!");
		} else {
			alert("Try again.");
		}
	};

	render = () => {
		return (
			<div>
				{this.state.editedVendor === null ? (
					<p>Waiting for server response. </p>
				) : (
					<div>
						<h3>Object to update</h3>
						<VendorItem item={this.state.editedVendor} />
						<br />
						Name: &nbsp;
						<input
							id="name"
							type="text"
							onChange={this.inputFieldValueChanged}
							value={this.state.editedVendor.name}
						/>
						Prefix: &nbsp;
						<input
							id="prefix"
							type="text"
							onChange={this.inputFieldValueChanged}
							value={this.state.editedVendor.prefix}
						/>
						<br />
						<AddMerchant />
						<br />
						<button type="button" onClick={this.updateVendor}>
							Save changes
						</button>
						<p>
							<button type="submit">
								<Link to={`/vendor/${this.state.editedVendor.id}`}>Back</Link>
							</button>
						</p>
					</div>
				)}
			</div>
		);
	};
}

const mapDispatchToProps = dispatch => ({
	updateVendorLocal: vendor => {
		dispatch(updateVendor(vendor));
	},
});
const mapStateToProps = state => ({
	vendors: state.vendors,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VendorUpdate);
