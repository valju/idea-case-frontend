import React, { Component } from "react";
import { withRouter, BrowserRouter } from "react-router-dom";

class IdeaUpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideaObject: {
        ...this.props.idea,
        readyForComments: this.props.idea.readyForComments == 1 ? true : false
      }
    };
  }

  inputFieldValueChanged = event => {
    this.setState({
      ideaObject: {
        ...this.state.ideaObject,
        [event.target.id]: event.target.value
      }
    });
  };

  resetInputBox = () => {
    this.setState(
      {
        ideaObject: {
          id: "",
          name: "",
          description: "",
          budget: "",
          readyForComments: false,
          peopleNeeded: "",
          creationDate: "",
          lastModified: "",
          categoryId: ""
        }
      },
      () => {
        this.props.history.push("/Ideas");
      }
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    const ideaObject = this.state.ideaObject;
    this.props.updateIdeaButtonClicked(ideaObject);
    this.resetInputBox();
  };

  handleCheckBox = event => {
    console.log(event.target);
    this.setState({
      ideaObject: {
        ...this.state.ideaObject,
        readyForComments: !this.state.ideaObject.readyForComments
      }
    });
  };

  render = () => {
    console.log("updateForm");
    console.log(this.state.ideaObject);
    return (
      <form>
        {/* Id: <input
                    id="id"
                    type="text"
                    onChange={this.inputFieldValueChanged}
                    value={this.state.ideaObject.id} />
                <br /> */}
        Name:{" "}
        <input
          id="name"
          type="text"
          onChange={this.inputFieldValueChanged}
          value={this.state.ideaObject.name}
        />
        <br />
        Description:{" "}
        <input
          id="description"
          type="text"
          value={this.state.ideaObject.description}
          onChange={this.inputFieldValueChanged}
          margin="normal"
        />
        <br />
        Budget:{" "}
        <input
          id="budget"
          type="number"
          value={this.state.ideaObject.budget}
          onChange={this.inputFieldValueChanged}
          margin="normal"
        />
        <br />
        Ready For Comments:{" "}
        <input
          id="readyForComments"
          type="checkbox"
          checked={this.state.ideaObject.readyForComments}
          onChange={this.handleCheckBox}
          margin="normal"
        />
        <br />
        People Needed:{" "}
        <input
          id="peopleNeeded"
          type="number"
          value={this.state.ideaObject.peopleNeeded}
          onChange={this.inputFieldValueChanged}
          margin="normal"
        />
        <br />
        Category ID:{" "}
        <input
          id="categoryId"
          type="number"
          value={this.state.ideaObject.categoryId}
          onChange={this.inputFieldValueChanged}
          margin="normal"
        />
        <br />
        <button type="button" onClick={this.handleSubmit}>
          UPDATE IDEA
        </button>
      </form>
    );
  };
}

export default withRouter(IdeaUpdateForm);
