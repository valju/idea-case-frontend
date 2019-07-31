import React, { Component } from "react";
import { fetchAllVendors, deleteVendor } from "../../actions/vendor";
import VendorItemPrefix from "./VendorItemPrefix";

import { connect } from "react-redux";
import VendorListItem from "./VendorListItem";

import { Link } from "react-router-dom";

class VendorList extends Component {
	componentDidMount() {
		this.props.vendorsFetchAll();
	}

	render() {
		console.log(<VendorListItem />);
		return (
			<div>
				<br />
				<h4>List of ECR Vendors</h4>
				<div className="table">
					<table>
						<thead>
							<tr>
								<th>
									ECR Vendor Name <p id="click">(click for details)</p>
								</th>
								<th>Prefix</th>
								<th>Detete, Update</th>
							</tr>
						</thead>
						<tbody>
							{this.props.vendors.vendorList.map(item => (
								<tr key={item._id}>
									<td>
										<Link to={`/vendor/${item._id}`}>{item.name}</Link>
									</td>
									<td>
										<VendorItemPrefix item={item} />
									</td>
									<td>
										<VendorListItem
											item={item}
											delete={this.props.deleteVendorLocal}
										/>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	vendorsFetchAll: () => {
		dispatch(fetchAllVendors());
	},
	deleteVendorLocal: id => {
		dispatch(deleteVendor(id));
	},
});

const mapStateToProps = state => ({
	vendors: state.vendors,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VendorList);
