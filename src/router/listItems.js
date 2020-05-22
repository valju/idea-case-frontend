import React from 'react';
import {Link} from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'
import PersonIcon from '@material-ui/icons/Person';
import PortraitIcon from '@material-ui/icons/Portrait';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

/*
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
*/

export const mainListItems = (
  <div>
    <Link to="/home">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </Link>
    <Link to="/categories">
      <ListItemIcon>
      <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Categories" />
    </Link>
    <Link to="/categories2">
      <ListItemIcon>
      <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Categories2 -Traditional" />
    </Link>
    <Link to="/ideas">
      <ListItemIcon>
      <WbIncandescentIcon />
      </ListItemIcon>
      <ListItemText primary="Ideas" />
    </Link>
    <Link to="/members">
      <ListItemIcon>
      <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Members" />
    </Link>
    <Link to="/idea_member">
      <ListItemIcon>
      <PortraitIcon />
      </ListItemIcon>
      <ListItemText primary="Idea Members" />
    </Link>
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
