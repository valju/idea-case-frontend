import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import PersonIcon from '@material-ui/icons/Person';
import CommentIcon from '@material-ui/icons/Comment';
import PortraitIcon from '@material-ui/icons/Portrait';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Category" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <WbIncandescentIcon />
      </ListItemIcon>
      <ListItemText primary="Idea" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Member" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <CommentIcon />
      </ListItemIcon>
      <ListItemText primary="Comment" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <PortraitIcon />
      </ListItemIcon>
      <ListItemText primary="IdeaMember" />
    </ListItem>
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