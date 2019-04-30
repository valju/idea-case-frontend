import React, { Component } from "react";
// import { withRouter, BrowserRouter } from "react-router-dom";

export default class IdeaUpdateForm extends Component {
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
                {/*Not working yet, cannot uncheck the value */}
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
                {/* <br />
                Category ID: <input
                    id="categoryId"
                    type="number"
                    value={this.state.ideaObject.categoryId}
                    onChange={this.inputFieldValueChanged}
                    margin="normal"
                /> */}
                <br />
                {/*Working but the field always show the first option, not the current value*/}
                Category:
                <select id="categoryId" onChange={this.inputFieldValueChanged}>
                    {
                        this.props.categories.map((item) =>
                            <option key={item.id} value={item.id}>{item.name}</option>
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
// export default withRouter(IdeaUpdateForm)
