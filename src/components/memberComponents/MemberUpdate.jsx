import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateMember } from "../../actions/member";
import MemberItem from "./MemberItem";

class MemberUpdate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editedMemberObj: null
    };
  }

  componentDidMount() {
    if (this.props.members.memberCurrent != null) {
      this.setState({
        editedMemberObj: this.props.members.memberCurrent[0]
      });
    }
  }

  inputFieldValueChanged = event => {
    const newField = event.target.name;
    let newValue = event.target.value;
    this.setState({
      editedMemberObj: {
        ...this.state.editedMemberObj,
        [newField]: newValue
      }
    });
  };

  updateMember = () => {
    this.props.updateMemberLocal(this.state.editedMemberObj);
    if (updateMember && this.state.editedMemberObj.firstName !== "") {
      alert("Update successful!");
    } else {
      alert("All fields are required!");
    }
    window.location.href = "/members/";
  };

  render = () => {
    return (
      <div>
        {this.state.editedMemberObj === null ? (
          <p>Waiting server response for update . ..</p>
        ) : (
            <div>
              <h3>Previous Member</h3>
              <MemberItem item={this.state.editedMemberObj} />
              <div>
                <input
                  name="id"
                  type="hidden"
                  onChange={this.inputFieldValueChanged}
                  value={this.state.editedMemberObj.id}
                />
                First Name:&nbsp;
              <input
                  name="firstName"
                  type="text"
                  onChange={this.inputFieldValueChanged}
                  value={this.state.editedMemberObj.firstName}
                />
                <br />
                Last Name:{" "}
                <input
                  name="lastName"
                  type="text"
                  onChange={this.inputFieldValueChanged}
                  value={this.state.editedMemberObj.lastName}
                />
                <br />
                Email:{" "}
                <input
                  name="email"
                  type="text"
                  size="50"
                  onChange={this.inputFieldValueChanged}
                  value={this.state.editedMemberObj.email}
                />
                <br />
                <br />
                <button type="button"
                  onClick={this.updateMember}
                >
                  SAVE
              </button>
                <p>
                  <Link to="/members/" >
                    Back to Member List
                </Link>
                </p>
              </div>
            </div>
          )}
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  updateMemberLocal: member => {
    dispatch(updateMember(member));
  }
});
const mapStateToProps = state => ({
  members: state.members
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberUpdate);

