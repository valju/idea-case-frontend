import React, { Component } from "react";
import { fetchAllUsers } from "../../actions/user";
import { connect } from "react-redux";
import ChangePassword from "../userComponents/ChangePassword";

class VendorItemMerchants extends Component {
	componentDidMount() {
		this.props.usersFetchAll();
	}
	render = () => {
		return (
			<div>
				{this.props.item.merchants.length === 0 ? (
					<p>No merchants added yet.</p>
				) : (
					<div className="table-container">
						<div className="table-vendoritemmerchant">
							<table>
								<thead>
									<tr>
										<th>Merchant Id</th>
										<th>Merchant Name</th>
										<th>Username</th>
										<th>Change Password</th>
									</tr>
								</thead>
								<tbody>
									{this.props.item.merchants.map((m, i) => (
										<tr key={i}>
											<td>{m._id}</td>
											<td>{m.name}</td>
											<td>
												{this.props.users.userList.map(item => {
													if (m._id === item.merchant) {
														return item.username;
													}
												})}
											</td>
											<td>
												{this.props.users.userList.map((item, i) => {
													if (m._id === item.merchant) {
														return <ChangePassword key={i} item={item} />;
													}
												})}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				)}
			</div>
		);
	};
}
const mapDispatchToProps = dispatch => ({
	usersFetchAll: () => {
		dispatch(fetchAllUsers());
	},
});

const mapStateToProps = state => ({
	users: state.users,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VendorItemMerchants);
