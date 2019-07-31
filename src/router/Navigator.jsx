import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { mainListItems, secondaryListItems } from "./listItems";

import classNames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Vendors from "../views/vendorViews/Vendors";
import VendorUpdateView from "../views/vendorViews/VendorUpdateView";
import Merchants from "../views/merchantViews/Merchants";
import VendorDetailsView from "../views/vendorViews/VendorDetailsView";
import TerminalDetailsView from "../views/terminalViews/TerminalDetailsView";
import MerchantDetailsView from "../views/merchantViews/MerchantDetailsView";
import MerchantUpdateView from "../views/merchantViews/MerchantUpdateView";
import Terminals from "../views/terminalViews/Terminals";
import TerminalUpdateView from "../views/terminalViews/TerminalUpdateView";
import HomeView from "../views/HomeView";
import UserList from "../components/userComponents/UserList";
import ChangePasswordView from "../views/userViews/ChangePasswordView";

const styles = theme => ({
	root: {
		display: "flex",
	},
	toolbar: {
		paddingRight: 24,
		paddingLeft: 20, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "0 1 1px",
		...theme.mixins.toolbar,
	},
	title: {
		flexGrow: 1,
	},
	drawerPaper: {
		overflowX: "hidden",
		whiteSpace: "nowrap",
		maxWidth: 240,
		width: "20 %",
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: "hidden",
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing.unit * 7,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing.unit * 9,
		},
	},
	iconButton: {
		width: "50%",
		display: "inline-block",
		margin: "5 0 5 5px",
		alignItems: "center",
		/* justifyContent: 'center'; */
		color: "deepskyblue",
	},

	menu: {
		color: "#005776",
	},
});

class Navigator extends Component {
	state = {
		open: true,
	};

	componentDidMount() {
		this.checkWidth();
		window.addEventListener("resize", this.checkWidth);
	}

	checkWidth = () => {
		if (window.innerWidth <= 800) {
			this.setState({ open: false });
		} else {
			this.setState({ open: true });
		}
	};

	handleDrawer = () => {
		if (this.state.open === false) {
			this.setState({ open: true });
		} else if (this.state.open === true) {
			this.setState({ open: false });
		}
	};

	render() {
		const { classes } = this.props;

		return (
			<Router>
				<div>
					<div className={classes.root}>
						<CssBaseline />
						<Drawer
							variant="permanent"
							classes={{
								paper: classNames(
									classes.drawerPaper,
									!this.state.open && classes.drawerPaperClose
								),
							}}
							open={this.state.open}
						>
							<div className={classes.toolbarIcon}>
								<IconButton
									className={classes.iconButton}
									onClick={this.handleDrawer}
								>
									<MenuIcon />
								</IconButton>
							</div>
							<h4>Menu</h4>
							<Divider />
							<List>{mainListItems}</List>
							<Divider />
							<List>{secondaryListItems}</List>
						</Drawer>
					</div>

					<Switch>
						<Route exact path="/" component={HomeView} />
						<Route exact path="/home" component={HomeView} />
						<Route path="/vendors" component={Vendors} />
						<Route path="/terminals" component={Terminals} />
						<Route exact path="/terminal/:id" component={TerminalDetailsView} />
						<Route
							exact
							path="/terminal/update/:id"
							component={TerminalUpdateView}
						/>
						<Route exact path="/vendor/:id" component={VendorDetailsView} />
						<Route
							exact
							path="/vendor/update/:id"
							component={VendorUpdateView}
						/>
						<Route path="/merchants" component={Merchants} />
						<Route exact path="/merchant/:id" component={MerchantDetailsView} />
						<Route
							exact
							path="/merchant/update/:id"
							component={MerchantUpdateView}
						/>
						<Route path="/users" component={UserList} />
						<Route
							exact
							path="/user/update/:id"
							component={ChangePasswordView}
						/>
						<Route render={() => <h1>Page not found</h1>} />
					</Switch>
				</div>
			</Router>
		);
	}
}

Navigator.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
