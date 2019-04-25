import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Categories from '../views/categoryViews/Categories';
import CategoryDetailsView from '../views/categoryViews/CategoryDetailsView';
import CategoryUpdateView from '../views/categoryViews/CategoryUpdateView';
import Ideas from '../views/ideaViews/Ideas';
import IdeaDetailsView from '../views/ideaViews/IdeaDetailsView';
import IdeaUpdateView from '../views/ideaViews/IdeaUpdateView';

class Navigator extends Component {

  render() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/Categories" ><span>Categories</span></Link>
                    <Link to="/Ideas" > <span>Ideas</span></Link>
                </nav>

                <Route exact path="/Categories" component={Categories} />
                <Route path="/Ideas" component={Ideas} />
                <Route path="/Idea/:id" component={IdeaDetailsView} />
                <Route path="/IdeaUpdate/:id" component={IdeaUpdateView} />
                <Route path="/Category/:id" component={CategoryDetailsView} />
                <Route path="/CategoryUpdate/:id" component={CategoryUpdateView} />
            </div>
        </Router>
    );
  }
}

export default Navigator;
