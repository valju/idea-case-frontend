import React, { Component } from "react";
import { connect } from "react-redux";
import { addMember } from "../../actions/member";

class MemberAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMemberObject: {
        id: null,
        firstName: null,
        lastName: null,
        email: null
      }
    };
  }
  inputFieldValueChanged = event => {
    this.setState({
      newMemberObject: {
        ...this.state.newMemberObject,
        [event.target.id]: event.target.value
      }
    });
  };
  addMemberButtonClicked = () => {
    const member = this.state.newMemberObject;
    member.id = Number(member.id); // id to Number

    this.props.addMemberLocal(member);

    this.setState({
      newMemberObject: { id: "", firstname: "", lastname: "", email: "" }
    });
  };
  render = () => {
    return (
      <div>
        <h4>New Member</h4>
        <p>
          Id:{" "}
          <input
            id="id"
            type="text"
            onChange={this.inputFieldValueChanged}
            value={this.state.newMemberObject.id}
          />
          <br />
          FirstName:{" "}
          <input
            id="firstName"
            type="text"
            onChange={this.inputFieldValueChanged}
            value={this.state.newMemberObject.firstName}
          />
          <br />
          LastName:{" "}
          <input
            id="lastName"
            type="text"
            onChange={this.inputFieldValueChanged}
            value={this.state.newMemberObject.lastName}
          />
          <br />
          Email:{" "}
          <input
            id="email"
            type="text"
            onChange={this.inputFieldValueChanged}
            value={this.state.newMemberObject.email}
          />
          <br />
          <button type="button" onClick={this.addMemberButtonClicked}>
            ADD NEW CATEGORY
          </button>
        </p>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  addMemberLocal: member => {
    dispatch(addMember(member));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(MemberAdd);
