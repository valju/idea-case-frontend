import React, { Component } from 'react';

class IdeaUpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ideaObject: {
                id: this.props.ideaId,
                name: '',
                description: '',
                budget: '',
                readyForComments: false,
                peopleNeeded: '',
                creationDate: '',
                lastModified: '',
                categoryId: ''
            },
        };
    }

    inputFieldValueChanged = (event) => {
        this.setState(
            {
                ideaObject:
                {
                    ...this.state.ideaObject,
                    [event.target.id]: event.target.value
                }
            });
    };

    resetInputBox = () => {
        this.setState({
            ideaObject: {
                id: '',
                name: '',
                description: '',
                budget: '',
                readyForComments: false,
                peopleNeeded: '',
                creationDate: '',
                lastModified: '',
                categoryId: ''
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const ideaObject = this.state.ideaObject;
        this.resetInputBox();
        this.props.updateIdeaButtonClicked(ideaObject);
    }

    render = () => {
        return (
            <form>
                {/* Id: <input
                    id="id"
                    type="text"
                    onChange={this.inputFieldValueChanged}
                    value={this.state.ideaObject.id} />
                <br /> */}
                Name: <input
                    id="name"
                    type="text"
                    onChange={this.inputFieldValueChanged}
                    value={this.state.ideaObject.name} />
                <br />

                Description: <input
                    id="description"
                    type="text"
                    value={this.state.ideaObject.description}
                    onChange={this.inputFieldValueChanged}
                    margin="normal"
                />
                <br />
                Budget: <input
                    id="budget"
                    type="text"
                    value={this.state.ideaObject.budget}
                    onChange={this.inputFieldValueChanged}
                    margin="normal"
                />
                <br />
                Ready For Comment: <input
                    id="readyForComment"
                    type="checkbox"
                    value={this.state.ideaObject.readyForComment}
                    onChange={this.inputFieldValueChanged}
                    margin="normal"
                />
                <br />
                People Needed: <input
                    id="peopleNeeded"
                    type="text"
                    value={this.state.ideaObject.peopleNeeded}
                    onChange={this.inputFieldValueChanged}
                    margin="normal"
                />
                <br />
                Category ID: <input
                    id="categoryId"
                    type="text"
                    value={this.state.ideaObject.categoryId}
                    onChange={this.inputFieldValueChanged}
                    margin="normal"
                />

                <br />

                <button
                    type="button"
                    onClick={this.handleSubmit}>
                    UPDATE IDEA
                </button>

            </form>
        );
    };
}

export default IdeaUpdateForm;