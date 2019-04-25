import React, { Component } from 'react';

//Styling
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class IdeaUpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newIdeaObject: {
                id: '',
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
                newIdeaObject:
                {
                    ...this.state.newIdeaObject,
                    [event.target.id]: event.target.value
                }
            });
    };

    resetInputBox = () => {
        this.setState({
            newIdeaObject: {
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

        const newIdeaObject = this.state.newIdeaObject;
        this.resetInputBox();
        this.props.updateIdeaButtonClicked(newIdeaObject);
    }

    render = () => {
        const { classes } = this.props;

        return (
            <form>
                <TextField
                    id="id"
                    label="id"
                    className={classes.textField}
                    value={this.state.newIdeaObject.id}
                    onChange={this.inputFieldValueChanged}
                    margin="normal"
                />
                <br />
                <TextField
                    id="name"
                    label="name"
                    className={classes.textField}
                    value={this.state.newIdeaObject.name}
                    onChange={this.inputFieldValueChanged}
                    margin="normal"
                />
                <br />
                <TextField
                    id="description"
                    label="description"
                    className={classes.textField}
                    value={this.state.newIdeaObject.description}
                    onChange={this.inputFieldValueChanged}
                    margin="normal"
                />
                <br />
                <TextField
                    id="budget"
                    label="budget"
                    className={classes.textField}
                    value={this.state.newIdeaObject.budget}
                    onChange={this.inputFieldValueChanged}
                    margin="normal"
                />
                <br />
                <TextField
                    id="readyForComment"
                    label="readyForComment"
                    className={classes.textField}
                    value={this.state.newIdeaObject.readyForComment}
                    onChange={this.inputFieldValueChanged}
                    margin="normal"
                />
                <br />
                <TextField
                    id="peopleNeeded"
                    label="peopleNeeded"
                    className={classes.textField}
                    value={this.state.newIdeaObject.peopleNeeded}
                    onChange={this.inputFieldValueChanged}
                    margin="normal"
                />
                <br />
                <TextField
                    id="categoryId"
                    label="categoryId"
                    className={classes.textField}
                    value={this.state.newIdeaObject.categoryId}
                    onChange={this.inputFieldValueChanged}
                    margin="normal"
                />
                <br />
                <Button
                    variant="outlined"
                    type="button"
                    onClick={this.handleSubmit}
                    color="primary" >ADD NEW IDEA</Button>
            </form>
        );
    };
}

IdeaUpdateForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IdeaUpdateForm);