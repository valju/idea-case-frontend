import React, { Component } from "react";
import * as util from "util";

class MerchantAddForm extends Component {
	constructor(props) {
		super(props);

		console.log(`constr props: ${util.inspect(this.props)}`);

		console.log(`constr: ${util.inspect(this.props.vendors)}`);
		console.log(this.props.vendors);
		this.state = {
			newMerchantObject: {
				name: "",
				ecrVendor: this.props.vendors[0],
				password: "",
			},
		};
	}

	inputFieldValueChanged = event => {
		this.setState({
			newMerchantObject: {
				...this.state.newMerchantObject,
				[event.target.id]: event.target.value,
			},
		});
	};

	resetInputBox = () => {
		this.setState({
			newMerchantObject: {
				name: "",
				ecrVendor: this.props.vendors[0],
				password: "",
			},
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		console.log(
			`state/newmerchantobject: ${util.inspect(this.state.newMerchantObject)}`
		);

		const newMerchantObject = this.state.newMerchantObject;
		this.resetInputBox();
		this.props.addMerchantButtonClicked(newMerchantObject);
	};

	render = () => {
		return (
			<div>
				<br />
				<form>
					Name:{" "}
					<input
						id="name"
						type="text"
						onChange={this.inputFieldValueChanged}
						value={this.state.newMerchantObject.name}
						placeholder="required"
						required={true}
					/>
					<br />
					ECR Vendor:
					<select id="ecrVendor" onChange={this.inputFieldValueChanged}>
						{this.props.vendors.map(item => {
							console.log(
								`2 state/newmerchantobject: ${util.inspect(
									this.state.newMerchantObject
								)}`
							);

							console.log(`item id: ${item._id}  item name:${item.name}`);

							return (
								<option key={item._id} value={item._id}>
									{" "}
									{item.name}{" "}
								</option>
							);
						})}
					</select>
					<br />
					Password:{" "}
					<input
						id="password"
						type="text"
						onChange={this.inputFieldValueChanged}
						value={this.state.newMerchantObject.password}
						placeholder="required"
						required={true}
					/>
					<br />
					<button type="button" onClick={this.handleSubmit}>
						Add new merchant
					</button>
				</form>
			</div>
		);
	};
}

export default MerchantAddForm;
