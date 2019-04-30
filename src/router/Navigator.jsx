import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Categories from "../views/categoryViews/Categories";
import CategoryDetailsView from "../views/categoryViews/CategoryDetailsView";
import Members from "../views/memberViews/Members";
import CommentsTechnicalView from "../views/commentViews/CommentsTechnicalView";
import MemberDetailsView from "../views/memberViews/MemberDetailsView";
import CategoryUpdateView from "../views/categoryViews/CategoryUpdateView";
// import CategoryUpdate from '../views/categoryViews/CategoryUpdate';

class Navigator extends Component {
	render() {
		return (
			<Router>
				<div>
					<nav>
						<Link to="/">
							<span>Categories</span>
						</Link>
						-
						<Link to="/members">
							<span>All Members</span>
						</Link>
						-
						<Link to="/comments_technical">
							<span>Comments Tech</span>
						</Link>
					</nav>

					<Switch>
						<Route exact path="/" component={Categories} />
						<Route path="/categories" component={Categories} />
						<Route path="/members" component={Members} />
						<Route exact path="/category/:id" component={CategoryDetailsView} />
						<Route path="/member/:id" component={MemberDetailsView} />
						<Route exact path="/category/update/:id" component={CategoryUpdateView} />
						<Route
							path="/comments_technical"
							component={CommentsTechnicalView}
						/>
						{/* <Route path="/category_update/:id" component={CategoryUpdate} /> */}
						<Route render={() => <h1>Page not found</h1>} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default Navigator;
