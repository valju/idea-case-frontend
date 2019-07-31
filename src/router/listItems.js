import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HomeIcon from "@material-ui/icons/Home";
import StoreIcon from "@material-ui/icons/Store";
import DescriptionIcon from "@material-ui/icons/Description";
//import PaymentIcon from "@material-ui/icons/Payment";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

export const mainListItems = (
	<div>
		<ListItemLink href="/home">
			<ListItemIcon>
				<HomeIcon />
			</ListItemIcon>
			<ListItemText primary="Home" />
		</ListItemLink>
		<ListItemLink href="/vendors">
			<ListItemIcon>
				<DescriptionIcon />
			</ListItemIcon>
			<ListItemText primary="ECR Vendor" />
		</ListItemLink>
		<ListItemLink href="/merchants">
			<ListItemIcon>
				<StoreIcon />
			</ListItemIcon>
			<ListItemText primary="Merchants" />
		</ListItemLink>
		{/* <ListItemLink href="/terminals">
      <ListItemIcon>
      <PaymentIcon />
      </ListItemIcon>
      <ListItemText primary="Terminals" />
</ListItemLink>*/}
	</div>
);

export const secondaryListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<ExitToAppIcon />
			</ListItemIcon>
			<ListItemText primary="Sign Out" />
		</ListItem>
	</div>
);
