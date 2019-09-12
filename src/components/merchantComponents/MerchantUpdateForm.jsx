import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ChangePassword from "../userComponents/ChangePassword";

class MerchantUpdateForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			merchantObject: {
				id: 0,
				name: "",
				ecrVendor: this.props.vendors[0],
			},
		};
	}

	componentDidMount = () => {
		this.setState({
			merchantObject: {
				id: this.props.merchant._id,
				name: this.props.merchant.name,
				ecrVendor: this.props.merchant.ecrVendor,
			},
		});
	};
	inputFieldValueChanged = event => {
		this.setState({
			merchantObject: {
				...this.state.merchantObject,
				[event.target.id]: event.target.value,
			},
		});
	};

	toggleCheckboxValue = () => {
		this.setState({
			merchantObject: {
				...this.state.merchantObject,
			},
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		const merchantObject = this.state.merchantObject;
		this.props.updateMerchantButtonClicked(merchantObject);
		this.props.history.push("/merchants");
	};

	render = () => {
		return (
			<div>
				<div className="table">
					<table className="merchantUpdateTable">
						<thead>
							<tr>
								<th>Merchant Name</th>
								<th>Terminal(s)</th>
								<th>Change password</th>
								<th>Vendor</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<input
										id="name"
										type="text"
										onChange={this.inputFieldValueChanged}
										value={this.state.merchantObject.name}
									/>
								</td>
								<td>
									<ol id="terminals">
										{this.props.merchant.terminals.map(item => (
											<li key={item._id} value={item.id}>
												{item.terminalId}
												<button
													type="button"
													onClick={() => this.props.delete(item._id)}
												>
													Delete
												</button>
											</li>
										))}
									</ol>
								</td>
								<td>
									{this.props.users.userList.map((u, i) => {
										if (this.props.merchant._id === u.merchant) {
											console.log(` userlist user ${u}`);
											return <ChangePassword key={i} item={u} />;
										}
									})}
								</td>
								<td>
									<select id="ecrVendor" onChange={this.inputFieldValueChanged}>
										{this.props.vendors.map(item => (
											<option key={item._id} value={item.id}>
												{item.name}{" "}
											</option>
										))}
									</select>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<button type="button" onClick={this.handleSubmit}>
					Update
				</button>
			</div>
		);
	};
}

export default withRouter(MerchantUpdateForm);
