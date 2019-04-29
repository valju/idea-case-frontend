import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mainListItems, secondaryListItems } from './listItems';

import Categories from '../views/categoryViews/Categories';
import CategoryDetailsView from '../views/categoryViews/CategoryDetailsView';
import Members from '../views/memberViews/Members';
import CommentsTechnicalView from '../views/commentViews/CommentsTechnicalView';
// import CategoryUpdate from '../views/categoryViews/CategoryUpdate';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
});

class Navigator extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div>

          <div className={classes.root}>
            <CssBaseline />
            <Drawer variant="permanent">
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
            <Route path="/category/:id" component={CategoryDetailsView} />
            <Route path="/comments_technical" component={CommentsTechnicalView} />
            {/* <Route path="/category_update/:id" component={CategoryUpdate} /> */}
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
