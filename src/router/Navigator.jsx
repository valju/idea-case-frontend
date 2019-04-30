import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Categories from "../views/categoryViews/Categories";
import CategoryDetailsView from "../views/categoryViews/CategoryDetailsView";

import CategoryUpdateView from "../views/categoryViews/CategoryUpdateView";

class Navigator extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">
              <span>Categories</span>
            </Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Categories} />
            <Route path="/categories" component={Categories} />
            <Route exact path="/category/:id" component={CategoryDetailsView} />
            {<Route exact path="/category/update/:id" component={CategoryUpdateView} />}
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navigator;
