import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Categories from "../views/categoryViews/Categories";
import CategoryDetailsView from "../views/categoryViews/CategoryDetailsView";
import CategoryUpdateView from "../views/categoryViews/CategoryUpdateView";

//import CategoryUpdate from '../views/categoryViews/CategoryUpdate';

class Navigator extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/Categories">
              <span>Categories</span>
            </Link>
          </nav>

          <Route exact path="/Categories" component={Categories} />
          <Route exact path="/Category/:id" component={CategoryDetailsView} />
          <Route
            exact
            path="/Category/update/:id"
            component={CategoryUpdateView}
          />
          {/* <Route path="/CategoryUpdate/:id" component={CategoryUpdate} /> */}
        </div>
      </Router>
    );
  }
}

export default Navigator;
