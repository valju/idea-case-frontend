import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Categories from '../views/categoryViews/Categories';
import CategoryDetailsView from '../views/categoryViews/CategoryDetailsView';
import Members from '../views/memberViews/Members';
//import CategoryUpdate from '../views/categoryViews/CategoryUpdate';

class Navigator extends Component {

  render() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/Categories" ><span>Categories</span></Link> 
                    
                </nav>
                <nav>
                    
                    <Link to="/Members" ><span>All Members</span></Link>
                </nav>

                <Route exact path="/Categories" component={Categories} />
                <Route path="/Category/:id" component={CategoryDetailsView} />
                {/* <Route path="/CategoryUpdate/:id" component={CategoryUpdate} /> */}
                <Route exact path="/Members" component={Members} />
            </div>
        </Router>
    );
  }
}

export default Navigator;
