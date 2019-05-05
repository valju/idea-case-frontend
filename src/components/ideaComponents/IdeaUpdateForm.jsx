import React, { Component } from "react";
import { withRouter, BrowserRouter } from "react-router-dom";

class IdeaUpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ideaObject: {
                id: 0,
                name: '',
                description: '',
                budget: 0,
                readyForComments: false,
                peopleNeeded: 0,
                categoryId: 0
            },
        };
    }

    componentDidMount = () => {
        this.setState({
            ideaObject: {
                id: this.props.idea.id,
                name: this.props.idea.name,
                description: this.props.idea.description,
                budget: this.props.idea.budget,
                readyForComments: this.props.idea.readyForComments === 1 ? true : false,
                peopleNeeded: this.props.idea.peopleNeeded,
                categoryId: this.props.idea.categoryId
            }
        })
    }

    inputFieldValueChanged = event => {
        this.setState({
            ideaObject: {
                ...this.state.ideaObject,
                [event.target.id]: event.target.value
            }
        });
    };

    toggleCheckboxValue = () => {
        this.setState({
            ideaObject: {
                ...this.state.ideaObject,
                readyForComments: !this.state.readyForComments,
            }
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const ideaObject = this.state.ideaObject;
        this.props.updateIdeaButtonClicked(ideaObject);
        this.props.history.push('/ideas')

    }

    render = () => {
        return (
            <form>
                Name: <input
                    id="name"
                    type="text"
                    onChange={this.inputFieldValueChanged}
                    value={this.state.ideaObject.name} />
                <br />

                Description: <input
                    id="description"
                    type="text"
                    size="50"
                    value={this.state.ideaObject.description}
                    onChange={this.inputFieldValueChanged}
                    margin="normal"
                />
                <br />
                Budget: <input
                    id="budget"
                    type="number"
                    value={this.state.ideaObject.budget}
                    onChange={this.inputFieldValueChanged}
                    margin="normal"
                />
                <br />
                Ready For Comment: <input
                    id="readyForComments"
                    type="checkbox"
                    checked={this.state.ideaObject.readyForComments}
                    value={this.state.ideaObject.readyForComments}
                    onChange={this.toggleCheckboxValue}
                    margin="normal"
                />
                <br />
                People Needed: <input
                    id="peopleNeeded"
                    type="number"
                    value={this.state.ideaObject.peopleNeeded}
                    onChange={this.inputFieldValueChanged}
                    margin="normal"
                />
                <br />
                Category:
                <select id="categoryId" onChange={this.inputFieldValueChanged}>
                    {
                        this.props.categories.map((item) =>
                            <option key={item.id} value={item.id} selected={item.id == this.state.ideaObject.categoryId ? true : false}>{item.name} </option>
                        )

                    }
                </select>

                <br />
                <button type="button" onClick={this.handleSubmit}>
                    UPDATE IDEA
                </button>

            </form>
        );
    };
}
export default withRouter(IdeaUpdateForm)
