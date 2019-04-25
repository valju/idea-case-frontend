import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIdea } from '../../actions/idea';

import IdeaAddForm from './IdeaAddForm';

class IdeaAdd extends Component {
    addIdeaButtonClicked = (newIdea) => {
        const idea = newIdea;
        idea.id = Number(idea.id);  // id to Number
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
                <IdeaAddForm addIdeaButtonClicked={this.addIdeaButtonClicked} />
            </div>
        );
    };
}

const mapDispatchToProps = dispatch => ({
    addIdeaLocal: (idea) => {
        dispatch(addIdea(idea));
    },
});

export default connect(null, mapDispatchToProps)(IdeaAdd);