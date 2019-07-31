import React, { Component } from "react";
import SkyLight from "react-skylight";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import { getVendor } from "../../actions/vendor";
import { connect } from "react-redux";
import { addMerchant } from "../../actions/merchant";

class AddMerchant extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			newMerchantObject: {
				name: "",
				ecrVendor: this.props.vendors[0],
				terminals: "",
				password: "",
			},
		};
		this.addModal = React.createRef();
	}

	componentDidMount = () => {
		this.props.vendorGetById(this.props.vendorId);
	};

	handleChange = event => {
		this.setState({
			newMerchantObject: {
				...this.state.newMerchantObject,
				[event.target.name]: event.target.value,
			},
		});
	};

	addMerchant = event => {
		event.preventDefault();
		const merchant = this.state.newMerchantObject;
		this.props.addMerchantLocal(merchant);
		this.setState({
			newMerchantObject: {
				name: "",
				ecrVendor: this.props.vendors[0],
				terminals: "",
				password: "",
			},
		});

		this.addModal.current.hide();
	};

	render() {
		const addDialog = {
			width: "250px",
			height: "250px",
			marginLeft: "-15%",
		};

		return (
			<div>
				<Button
					style={{ margin: 10 }}
					variant="contained"
					color="primary"
					onClick={() => this.addModal.current.show()}
				>
					<AddIcon />
					New Merchant
				</Button>
				<SkyLight
					dialogStyles={addDialog}
					hideOnOverlayClicked
					ref={this.addModal}
					title="Add a new merchant"
				>
					<br />
					<TextField
						placeholder="Name"
						name="name"
						onChange={this.handleChange}
						value={this.state.newMerchantObject.name}
					/>
					<br />
					<TextField
						placeholder="password"
						name="password"
						onChange={this.handleChange}
						value={this.state.newMerchantObject.password}
					/>
					<select
						id="ecrVendor"
						name="ecrVendor"
						defaultValue={this.props.vendors[0]}
						onChange={this.handleChange}
					>
						{this.props.vendors.vendorList.map(item => {
							return (
								<option key={item._id} value={item._id}>
									{" "}
									{item.name}{" "}
								</option>
							);
						})}
					</select>
					<br />
					{/*<TextField
						placeholder="Terminal"
						name="terminals"
						onChange={this.handleChange}
						value={this.state.newMerchantObject.terminals}
					/>*/}
					<br />
					<Button
						style={{ margin: 10 }}
						variant="contained"
						color="primary"
						onClick={this.addMerchant}
					>
						<SaveIcon />
						Add merchant
					</Button>
				</SkyLight>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	vendors: state.vendors,
});

const mapDispatchToProps = dispatch => ({
	addMerchantLocal: merchant => {
		dispatch(addMerchant(merchant));
	},
	vendorGetById: id => {
		dispatch(getVendor(id));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddMerchant);
