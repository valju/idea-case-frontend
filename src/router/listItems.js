import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'
import PersonIcon from '@material-ui/icons/Person';
import PortraitIcon from '@material-ui/icons/Portrait';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
    <ListItemLink href="/categories">
      <ListItemIcon>
      <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Category" />
    </ListItemLink>
    <ListItemLink href="/ideas">
      <ListItemIcon>
      <WbIncandescentIcon />
      </ListItemIcon>
      <ListItemText primary="Idea" />
    </ListItemLink>
    <ListItemLink href="/members">
      <ListItemIcon>
      <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Member" />
    </ListItemLink>
    <ListItemLink href="/idea_member">
      <ListItemIcon>
      <PortraitIcon />
      </ListItemIcon>
      <ListItemText primary="IdeaMember" />
    </ListItemLink>
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