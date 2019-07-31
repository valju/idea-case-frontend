import React, { Component } from "react";
import SkyLight from "react-skylight";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import { connect } from "react-redux";
import { addTerminal } from "../../actions/terminal";
import { fetchAllTerminals } from "../../actions/terminal";

class AddTerminal extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		/*
		this.state = {
			newTerminalObject: {
				terminalId: "",
				merchant: 0,
			},
		};
		*/
		this.state = {
			merchant: this.props.id,
			terminalId: "",
		};
		this.addModal = React.createRef();
	}
	componentDidUpdate = () => {
		this.props.terminalsFetchAll();
	};

	handleChange = event => {
		this.state.terminalId = event.target.value;
		//this.state.newTerminalObject.terminalId = event.target.value;
		/*
		this.setState({
			newTerminalObject: {
				...this.state.newTerminalObject,
				[event.target.name]: event.target.value,
			},
		});
		*/
	};

	addTerminal = event => {
		event.preventDefault();
		const terminal = Object.assign({}, this.state);
		this.props.addTerminalLocal(terminal);

		this.state.terminalId = "";

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
					New Terminal
				</Button>
				<SkyLight
					dialogStyles={addDialog}
					hideOnOverlayClicked
					ref={this.addModal}
					title="Add a new terminal"
				>
					<br />
					<TextField
						placeholder="Terminal"
						name="terminalId"
						onChange={this.handleChange}
					/>
					<br />
					<Button
						style={{ margin: 10 }}
						variant="contained"
						color="primary"
						onClick={this.addTerminal}
					>
						<SaveIcon />
						Add terminal
					</Button>
				</SkyLight>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	terminals: state.terminals,
});

const mapDispatchToProps = dispatch => ({
	addTerminalLocal: terminal => {
		dispatch(addTerminal(terminal));
	},
	terminalsFetchAll: () => {
		dispatch(fetchAllTerminals());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTerminal);
