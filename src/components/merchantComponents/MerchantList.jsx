import React, { Component } from "react";
import { fetchAllMerchants, deleteMerchant } from "../../actions/merchant";
import MerchantListItem from "./MerchantListItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MerchantItemTerminals from "./MerchantItemTerminals";

class MerchantList extends Component {
	componentDidMount() {
		this.props.merchantsFetchAll();
	}

	render() {
		return (
			<div>
				<h4>List of Merchants</h4>
				<div className="table">
					<table>
						<thead>
							<tr>
								<th>
									Merchant Name <p id="click">(click for details)</p>
								</th>
								<th>Terminal(s)</th>
								<th>Detete, Update</th>
							</tr>
						</thead>
						<tbody>
							{this.props.merchants.merchantList.map(item => (
								<tr key={item._id}>
									<td>
										<Link to={`/merchant/${item._id}`}>{item.name}</Link>
									</td>
									<td>
										<MerchantItemTerminals item={item} />
									</td>
									<td>
										<MerchantListItem
											item={item}
											delete={this.props.deleteMerchantLocal}
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
	merchantsFetchAll: () => {
		dispatch(fetchAllMerchants());
	},
	deleteMerchantLocal: id => {
		dispatch(deleteMerchant(id));
	},
});

const mapStateToProps = state => ({
	merchants: state.merchants,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MerchantList);
