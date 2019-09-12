import React, { Component } from "react";
import { connect } from "react-redux";
import MerchantItemName from "./MerchantItemName";
import { getMerchant } from "../../actions/merchant";
import { fetchAllUsers } from "../../actions/user";
import { Link } from "react-router-dom";
import MerchantItem from "./MerchantItem";
import MerchantItemTerminals from "./MerchantItemTerminals";

class MerchantDetails extends Component {
	componentDidMount = () => {
		this.props.merchantGetById(this.props.merchantId);
		this.props.usersFetchAll();
	};

	render = () => {
		console.log(this.props.merchants);

		return (
			<div>
				<div className="table">
					<table>
						<thead>
							<tr>
								<th>Merchant name</th>
								<th>Username</th>
								<th>Terminals</th>
							</tr>
						</thead>

						<tbody>
							{this.props.merchants.merchantCurrent === null ? (
								<tr>
									<td>
										<MerchantItem item={{ name: "placeholder" }} />
									</td>
								</tr>
							) : (
								<>
									<tr>
										<td>
											<MerchantItemName
												item={this.props.merchants.merchantCurrent}
											/>
										</td>
										<td>
											{this.props.users.userList.map(i => {
												if (
													this.props.merchants.merchantCurrent._id ===
													i.merchant
												) {
													return i.username;
												}
												console.log(` username ${i.username}`);
												console.log(
													` merchantCurrent id ${this.props.merchants.merchantCurrent._id}`
												);
											})}
										</td>

										<td>
											<MerchantItemTerminals
												item={this.props.merchants.merchantCurrent}
											/>
										</td>
									</tr>
								</>
							)}
						</tbody>
					</table>
				</div>
				<p>
					<button type="button">
						<Link to="/merchants">Back to all merchants</Link>
					</button>
				</p>
			</div>
		);
	};
}

const mapDispatchToProps = dispatch => ({
	merchantGetById: id => {
		dispatch(getMerchant(id));
	},
	usersFetchAll: () => {
		dispatch(fetchAllUsers());
	},
});

const mapStateToProps = state => ({
	merchants: state.merchants,
	users: state.users,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MerchantDetails);
