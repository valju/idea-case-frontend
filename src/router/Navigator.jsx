import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles, /*MuiThemeProvider*/ } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
//import { useTheme } from '@material-ui/core/styles';
import theme from '../stylings/theme/theme';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { mainListItems, secondaryListItems } from './listItems';

import Categories from '../views/categoryViews/Categories';
import Categories2 from '../views/categoryViews/Categories2';
import CategoryDetailsView from '../views/categoryViews/CategoryDetailsView';
import CategoryUpdateView from '../views/categoryViews/CategoryUpdateView';
import Ideas from '../views/ideaViews/Ideas';
import IdeaDetailsView from '../views/ideaViews/IdeaDetailsView';
import IdeaUpdateView from '../views/ideaViews/IdeaUpdateView';
import Members from '../views/memberViews/Members';
import MemberDetailsView from "../views/memberViews/MemberDetailsView";
import CommentEditView from '../views/commentViews/CommentEditView';
import IdeaMembers from '../views/ideaMemberViews/IdeaMembers';
import IdeaMemberDetailsView from '../views/ideaMemberViews/IdeaMemberDetailsView';
import MemberUpdateView from '../views/memberViews/MemberUpdateView';
import IdeaMemberUpdateView from '../views/ideaMemberViews/IdeaMemberUpdateView';
import IdeaUpdateOnly from '../components/ideaMemberComponents/IdeaUpdateOnly';
import MemberUpdateOnly from '../components/ideaMemberComponents/MemberUpdateOnly';
import HomeView from '../views/HomeView';
import MemberIdeaCommentView from '../views/memberViews/MemberIdeaCommentView';

const styles = () => ({
  root: {
    display: 'flex',
    //color: theme.palette.primary.main,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed,
    //color: theme.palette.primary.main,
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
    //...theme.mixins.title,
    //color: theme.palette.primary.main,
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
    //color: theme.palette.primary.main,
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
              { /* <Route exact path="/" component={HomeView} /> */ }
              { /* <Route exact path="/" component={Categories} /> */ }
              { /* <Route exact path="/home" component={HomeView} /> */ }
              { /* <Route exact path="/home" component={Categories} /> */ }
              <Route exact path="/home" component={HomeView} />
              <Route exact path="/categories" component={Categories} />
              <Route path="/categories2" component={Categories2} />
              <Route path="/members" component={Members} />
              <Route exact path="/member/:id" component={MemberDetailsView} />
              <Route exact path="/member/update/:id" component={MemberUpdateView} />
              <Route exact path="/member/idea/comment/:id" component={MemberIdeaCommentView} />
              <Route exact path="/category/:id" component={CategoryDetailsView} />
						  <Route exact path="/category/update/:id" component={CategoryUpdateView} />
              <Route path="/ideas" component={Ideas} />
              <Route exact path="/idea/:id" component={IdeaDetailsView} />
              <Route exact path="/idea/update/:id" component={IdeaUpdateView} />
              <Route path="/comment_edit/:id" component={CommentEditView} />
              <Route exact path="/idea_member" component={IdeaMembers} />
              <Route exact path="/idea_member/:ideaId/:memberId" component={IdeaMemberDetailsView} />
              <Route exact path="/idea_member/update/:ideaId/:memberId" component={IdeaMemberUpdateView} />
              <Route exact path="/idea_member/update/idea/:ideaId/:memberId" component={IdeaUpdateOnly} />
              <Route exact path="/idea_member/update/member/:ideaId/:memberId" component={MemberUpdateOnly} />
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
