import React, { Component } from "react";
import { connect } from "react-redux";
import MerchantItemName from "./MerchantItemName";
import { getMerchant } from "../../actions/merchant";

import { Link } from "react-router-dom";
import MerchantItem from "./MerchantItem";
import MerchantItemTerminals from "./MerchantItemTerminals";

class MerchantDetails extends Component {
	componentDidMount = () => {
		this.props.merchantGetById(this.props.merchantId);
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
});

const mapStateToProps = state => ({
	merchants: state.merchants,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MerchantDetails);
