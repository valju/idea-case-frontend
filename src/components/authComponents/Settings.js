import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { deleteUser } from "../../actions/user";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class Settings extends Component {
  onDeleteClick(id) {
    this.props.deleteUser(id);
  }

  render() {
    const { classes, user } = this.props;
    return (
      <div>
        <h2>Information</h2>
        <span>Id: {user.id}</span>
        <br />
        <span>Name: {user.name}</span>
        <br />
        <span>Email: {user.email}</span>
        <br />
        <br />
        <br />

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={this.onDeleteClick.bind(this, user.id)}
        >
          Delete Account
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(
  mapStateToProps,
  { deleteUser }
)(withStyles(styles)(Settings));
