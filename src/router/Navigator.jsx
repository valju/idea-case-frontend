import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Categories from '../views/categoryViews/Categories';
import CategoryDetailsView from '../views/categoryViews/CategoryDetailsView';
// import CategoryUpdate from '../views/categoryViews/CategoryUpdate';

class Navigator extends Component {

  render() {
    return (
      <Router>
        <div>
          
          <nav>
            <Link to="/"><span>Categories</span></Link>
          </nav>

          <Route exact path="/" component={Categories} />
          <Route path="/categories" component={Categories} />
          <Route path="/category/:id" component={CategoryDetailsView} />
          {/* <Route path="/category_update/:id" component={CategoryUpdate} /> */}

        </div>
      </Router>
    );
  }
}

export default Navigator;
