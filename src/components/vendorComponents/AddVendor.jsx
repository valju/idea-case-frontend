import React, { Component } from "react";
import SkyLight from "react-skylight";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import { connect } from "react-redux";
import { addVendor } from "../../actions/vendor";

class AddVendor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newVendorObject: {
				name: "",
			},
		};
		this.addModal = React.createRef();
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
		this.setState({
			newVendorObject: {
				...this.state.newVendorObject,
				[event.target.name]: event.target.value,
			},
		});
	};

	addVendor = () => {
		const vendor = this.state.newVendorObject;
		this.props.addVendorLocal(vendor);
		this.setState({
			newVendorObject: { name: "" },
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
					New ECR Vendor
				</Button>
				<SkyLight
					dialogStyles={addDialog}
					hideOnOverlayClicked
					ref={this.addModal}
					title="Add a new ECR vendor"
				>
					<TextField
						placeholder="name"
						name="name"
						onChange={this.handleChange}
						value={this.state.newVendorObject.name}
					/>
					<br />
					<Button
						style={{ margin: 10 }}
						variant="contained"
						color="primary"
						onClick={this.addVendor}
					>
						<SaveIcon />
						Save
					</Button>
				</SkyLight>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	addVendorLocal: vendor => {
		dispatch(addVendor(vendor));
	},
});

export default connect(
	null,
	mapDispatchToProps
)(AddVendor);
