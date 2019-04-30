import React, { Component } from "react";
import { connect } from "react-redux";
import { updateIdea } from "../../actions/idea";
import { Link } from "react-router-dom";

import IdeaUpdateForm from "./IdeaUpdateForm";

class IdeaUpdate extends Component {
  updateIdeaButtonClicked = ideaObject => {
    const idea = ideaObject;
    idea.id = Number(idea.id); // id to Number
    idea.budget = Number(idea.budget);
    idea.peopleNeeded = Number(idea.peopleNeeded);
    idea.categoryId = Number(idea.categoryId);
    console.log("clicked");
    console.log(idea);
    this.props.updateIdeaLocal(idea);
    // this.props.addIdeaLocal(this.state.newIdeaObject);   // Other way
  };

  render = () => {
    console.dir(this.props.idea);
    return (
      <div>
        <h2>Idea id {this.props.idea.id}</h2>
        <IdeaUpdateForm
          updateIdeaButtonClicked={this.updateIdeaButtonClicked}
          idea={this.props.idea}
        />
        <p>
          <Link to="/Ideas">Back to all ideas</Link>
        </p>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  updateIdeaLocal: idea => {
    dispatch(updateIdea(idea));
  }
});

const mapStateToProps = state => ({
  ideas: state.ideas
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IdeaUpdate);
