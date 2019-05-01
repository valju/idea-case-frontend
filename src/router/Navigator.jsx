import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mainListItems, secondaryListItems } from './listItems';

import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Categories from '../views/categoryViews/Categories';
import CategoryDetailsView from '../views/categoryViews/CategoryDetailsView';
import CategoryUpdateView from "../views/categoryViews/CategoryUpdateView";
import Members from '../views/memberViews/Members';
import MemberDetailsView from "../views/memberViews/MemberDetailsView";
import CommentsTechnicalView from '../views/commentViews/CommentsTechnicalView';
import CommentEditView from '../views/commentViews/CommentEditView';
import IdeaMembers from '../views/ideaMemberViews/IdeaMembers';
import IdeaMemberDetailsView from '../views/ideaMemberViews/IdeaMemberDetailsView';


const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    //padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
    //width: '20%',
    //maxWidth: 240,
    width: 200,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  h4: {

  }
});

class Navigator extends Component {
  state = {
    open: true,
  };

  componentDidMount() {
    window.addEventListener("resize", this.checkWidth);
  };

  checkWidth = () => {
    if (window.innerWidth <= 800) {
      this.setState({ open: false });
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
              <Drawer variant="permanent"
                classes={{
                  paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                }}
                open={this.state.open}
              >
                <div className={classes.toolbarIcon}>
                  <IconButton onClick={this.handleDrawer}>
                    <MenuIcon />
                  </IconButton>
                </div>
                <h4>Index</h4>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
              </Drawer>
            </div>

            <Switch>
              <Route exact path="/" component={Categories} />
              <Route path="/categories" component={Categories} />
              <Route path="/members" component={Members} />
              <Route path="/member/:id" component={MemberDetailsView} />
              <Route exact path="/category/:id" component={CategoryDetailsView} />
						  <Route exact path="/category/update/:id" component={CategoryUpdateView} />
              <Route path="/comments_technical" component={CommentsTechnicalView} />
              <Route path="/comment_edit/:id" component={CommentEditView} />
              <Route exact path="/idea_member" component={IdeaMembers} /> 
              <Route path="/idea_member/:ideaId/:memberId" component={IdeaMemberDetailsView} />                                         
              <Route render={ () => <h1>Page not found</h1>} />
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
