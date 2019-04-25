import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateIdea } from '../../actions/idea';
import { Link } from 'react-router-dom';

import IdeaUpdateForm from './IdeaUpdateForm';

//Styling
import Button from '@material-ui/core/Button';

class IdeaUpdate extends Component {

    inputFieldValueChanged = (event) => {
        this.setState(
            {
                ideaObject:
                    { ...this.state.ideaObject, [event.target.id]: event.target.value }
            });
    };

    updateIdeaButtonClicked = () => {
        const idea = this.state.ideaObject;
        idea.id = Number(idea.id);  // id to Number
        idea.budgetLimit = Number(idea.budgetLimit);

        this.props.updateIdeaLocal(idea);

        // this.setState(
        //     {
        //         newIdeaObject:
        //             { id: "", name: "", budgetLimit: "" },
        //     }
        // );
        // this.props.addIdeaLocal(this.state.newIdeaObject);   // Other way
    };

    render = () => {
        return (
            <div>
                <h2>Idea id {this.props.ideaId}</h2>
                {/* <p>
                    Name: <input id="name" type="text" onChange={this.inputFieldValueChanged} value={this.state.ideaObject.name} /><br />
                    Description: <input id="description" type="text" onChange={this.inputFieldValueChanged} value={this.state.ideaObject.description} /><br />
                    Budget limit: <input id="budgetLimit" type="text" onChange={this.inputFieldValueChanged} value={this.state.ideaObject.budgetLimit} /><br />

                    <Button type="button" onClick={this.updateIdeaButtonClicked} color="primary">UPDATE</Button>
                </p> */}
                <p><Link to="/Ideas">Back to all ideas</Link></p>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    updateIdeaLocal: (idea) => {
        dispatch(updateIdea(idea));
      },
});

const mapStateToProps = state => ({
    ideas: state.ideas,
});

export default connect(mapStateToProps, mapDispatchToProps)(IdeaUpdate);

