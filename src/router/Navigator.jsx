import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

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

import PrivateRoute from "../components/common/PrivateRoute";
import { logoutUser } from "../actions/user";

import Categories from "../views/categoryViews/Categories";
import CategoryDetailsView from "../views/categoryViews/CategoryDetailsView";
import CategoryUpdateView from "../views/categoryViews/CategoryUpdateView";
import Ideas from "../views/ideaViews/Ideas";
import IdeaDetailsView from "../views/ideaViews/IdeaDetailsView";
import IdeaUpdateView from "../views/ideaViews/IdeaUpdateView";
import Members from "../views/memberViews/Members";
import MemberDetailsView from "../views/memberViews/MemberDetailsView";
import CommentEditView from "../views/commentViews/CommentEditView";
import IdeaMembers from "../views/ideaMemberViews/IdeaMembers";
import IdeaMemberDetailsView from "../views/ideaMemberViews/IdeaMemberDetailsView";
import MemberUpdateView from "../views/memberViews/MemberUpdateView";
import IdeaMemberUpdateView from "../views/ideaMemberViews/IdeaMemberUpdateView";
import IdeaUpdateOnly from "../components/ideaMemberComponents/IdeaUpdateOnly";
import MemberUpdateOnly from "../components/ideaMemberComponents/MemberUpdateOnly";
import HomeView from "../views/HomeView";
import MemberIdeaCommentView from "../views/memberViews/MemberIdeaCommentView";
import Login from "../components/authComponents/Login";
import Register from "../components/authComponents/Register";
import Settings from "../views/authViews/SettingsView";

const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    //padding: '0 8px',
    ...theme.mixins.toolbar
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    overflowX: "hidden",
    whiteSpace: "nowrap",
    //width: '20%',
    //maxWidth: 240,
    width: 200,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  h4: {}
});

class Navigator extends Component {
  state = {
    open: true
  };

  componentDidMount() {
    window.addEventListener("resize", this.checkWidth);
  }

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

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { classes } = this.props;
    const { user } = this.props.auth;

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
                )
              }}
              open={this.state.open}
            >
              <div className={classes.toolbarIcon}>
                <IconButton onClick={this.handleDrawer}>
                  <MenuIcon />
                </IconButton>
              </div>
              <span>
                Welcome <h3>{user.name}</h3>
              </span>
              <Divider />
              <List>{mainListItems}</List>
              <Divider />
              <List>
                <a href=" " onClick={this.onLogoutClick.bind(this)}>
                  {secondaryListItems}
                </a>
              </List>
            </Drawer>
          </div>

          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

          <Switch>
            {/* <Route exact path="/" component={HomeView} /> */}
            <PrivateRoute exact path="/home" component={HomeView} />
            <PrivateRoute path="/categories" component={Categories} />
            <PrivateRoute path="/members" component={Members} />
            <PrivateRoute
              exact
              path="/member/:id"
              component={MemberDetailsView}
            />
            <PrivateRoute
              exact
              path="/member/update/:id"
              component={MemberUpdateView}
            />
            <PrivateRoute
              exact
              path="/member/idea/comment/:id"
              component={MemberIdeaCommentView}
            />
            <PrivateRoute
              exact
              path="/category/:id"
              component={CategoryDetailsView}
            />
            <PrivateRoute
              exact
              path="/category/update/:id"
              component={CategoryUpdateView}
            />
            <PrivateRoute path="/ideas" component={Ideas} />
            <PrivateRoute exact path="/idea/:id" component={IdeaDetailsView} />
            <PrivateRoute
              exact
              path="/idea/update/:id"
              component={IdeaUpdateView}
            />
            <PrivateRoute
              path="/comment_edit/:id"
              component={CommentEditView}
            />
            <PrivateRoute exact path="/idea_member" component={IdeaMembers} />
            <PrivateRoute
              exact
              path="/idea_member/:ideaId/:memberId"
              component={IdeaMemberDetailsView}
            />
            <PrivateRoute
              exact
              path="/idea_member/update/:ideaId/:memberId"
              component={IdeaMemberUpdateView}
            />
            <PrivateRoute
              exact
              path="/idea_member/update/idea/:ideaId/:memberId"
              component={IdeaUpdateOnly}
            />
            <PrivateRoute
              exact
              path="/idea_member/update/member/:ideaId/:memberId"
              component={MemberUpdateOnly}
            />
            <PrivateRoute path="/settings" component={Settings} />
            {/* <Route render={ () => <h1>Page not found</h1>} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.user
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withStyles(styles)(Navigator));
