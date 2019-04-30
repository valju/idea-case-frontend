import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateIdea } from '../../actions/idea';
import { fetchAllCategories } from '../../actions/category';
import { Link } from 'react-router-dom';

import IdeaUpdateForm from "./IdeaUpdateForm";

class IdeaUpdate extends Component {
    componentDidMount() {
        this.props.categoriesFetchAll();
    }
    updateIdeaButtonClicked = (ideaObject) => {
        const idea = ideaObject;
        idea.id = Number(idea.id);  // id to Number
        idea.budget = Number(idea.budget);
        idea.peopleNeeded = Number(idea.peopleNeeded);
        idea.categoryId = Number(idea.categoryId);

        this.props.updateIdeaLocal(idea);
        // this.props.addIdeaLocal(this.state.newIdeaObject);   // Other way
    };

    render = () => {
        return (
            <div>
                <h2>Idea id {this.props.idea.id}</h2>
                <IdeaUpdateForm 
                    idea={this.props.idea} 
                    updateIdeaButtonClicked={this.updateIdeaButtonClicked} 
                    categories={this.props.categories.categoryList} />
                <p>
                    <Link to="/ideas">Back to all ideas</Link>
                </p>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateIdeaLocal: (idea) => {
        dispatch(updateIdea(idea));
    },
    categoriesFetchAll: () => {
        dispatch(fetchAllCategories());
    },
});

const mapStateToProps = state => ({
    // ideas: state.ideas,
    categories: state.categories,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IdeaUpdate);
