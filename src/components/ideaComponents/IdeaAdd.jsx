import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIdea } from '../../actions/idea';
import { fetchAllCategories } from '../../actions/category';

import IdeaAddForm from './IdeaAddForm';

class IdeaAdd extends Component {
    componentDidMount() {
        this.props.categoriesFetchAll();
    }
    addIdeaButtonClicked = (newIdea) => {
        const idea = newIdea;
        // idea.id = Number(idea.id);  // id to Number
        idea.budget = Number(idea.budget);
        idea.peopleNeeded = Number(idea.peopleNeeded);
        idea.categoryId = Number(idea.categoryId);

        this.props.addIdeaLocal(idea);
        // this.props.addIdeaLocal(this.state.newIdeaObject);   // Other way
    };

    render = () => {
        return (
            <div>
                <h4>New Idea</h4>
                <IdeaAddForm addIdeaButtonClicked={this.addIdeaButtonClicked} categories={this.props.categories.categoryList} />
            </div>
        );
    };
}
const mapStateToProps = state => ({
    // ideas: state.ideas,
    categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
    addIdeaLocal: (idea) => {
        dispatch(addIdea(idea));
    },
    categoriesFetchAll: () => {
        dispatch(fetchAllCategories());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(IdeaAdd);