import React, { Component } from "react";
import { SkyLightStateless } from "react-skylight";
import Button from "@material-ui/core/Button";

class Confirm extends Component {
	onConfirmed = value => {
		this.props.onConfirmed(value);
	};

	render() {
		const addDialog = {
			width: "250px",
			height: "100px",
			marginLeft: "-15%",
		};

		return (
			<div>
				<SkyLightStateless
					isVisible={true}
					hideOnOverlayClicked
					dialogStyles={addDialog}
					title={this.props.title}
				>
					<Button
						style={{ margin: 10 }}
						variant="contained"
						color="primary"
						onClick={() => this.onConfirmed(true)}
					>
						Yes
					</Button>
					<Button
						style={{ margin: 10 }}
						variant="contained"
						color="primary"
						onClick={() => this.onConfirmed(false)}
					>
						No
					</Button>
				</SkyLightStateless>
			</div>
		);
	}
}

export default Confirm;
