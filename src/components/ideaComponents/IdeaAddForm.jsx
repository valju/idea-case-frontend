import React, { Component } from "react";

class IdeaAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newIdeaObject: {
        // id: '',
        name: "",
        description: "",
        budget: "",
        readyForComments: false,
        peopleNeeded: "",
        creationDate: "",
        lastModified: "",
        categoryId: ""
      }
    };
  }

  inputFieldValueChanged = event => {
    this.setState({
      newIdeaObject: {
        ...this.state.newIdeaObject,
        [event.target.id]: event.target.value
      }
    });
  };

  resetInputBox = () => {
    this.setState({
      newIdeaObject: {
        // id: '',
        name: "",
        description: "",
        budget: "",
        readyForComments: false,
        peopleNeeded: "",
        creationDate: "",
        lastModified: "",
        categoryId: ""
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newIdeaObject = this.state.newIdeaObject;
    this.resetInputBox();
    this.props.addIdeaButtonClicked(newIdeaObject);
  };

  render = () => {
    return (
      <form>
        {/* Id: <input
                    id="id"
                    type="text"
                    onChange={this.inputFieldValueChanged}
                    value={this.state.newIdeaObject.id} />
                <br /> */}
        Name:{" "}
        <input
          id="name"
          type="text"
          onChange={this.inputFieldValueChanged}
          value={this.state.newIdeaObject.name}
          placeholder="required"
          required={true}
        />
        <br />
        Description:{" "}
        <input
          id="description"
          type="text"
          value={this.state.newIdeaObject.description}
          onChange={this.inputFieldValueChanged}
          margin="normal"
          placeholder="required"
          required={true}
        />
        <br />
        Budget:{" "}
        <input
          id="budget"
          type="number"
          value={this.state.newIdeaObject.budget}
          onChange={this.inputFieldValueChanged}
          margin="normal"
        />
        <br />
        Ready For Comment:{" "}
        <input
          id="readyForComment"
          type="checkbox"
          value={this.state.newIdeaObject.readyForComment}
          onChange={this.inputFieldValueChanged}
          margin="normal"
        />
        <br />
        People Needed:{" "}
        <input
          id="peopleNeeded"
          type="number"
          value={this.state.newIdeaObject.peopleNeeded}
          onChange={this.inputFieldValueChanged}
          margin="normal"
        />
        <br />
        Category:
                <select id="categoryId" onChange={this.inputFieldValueChanged}>
          {
            this.props.categories.map((item) =>
              <option key={item.id} value={item.id} > {item.name} </option>
            )

          }
        </select>
        <br />
        <button type="button" onClick={this.handleSubmit}>
          ADD NEW IDEA
        </button>
      </form>
    );
  };
}

export default IdeaAddForm;
