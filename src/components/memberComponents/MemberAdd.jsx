import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMember } from '../../actions/member';


class MemberAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newMemberObject:
        { firstName: "", lastName: "", email: "", },
    };
  }

  inputValueChanged = (event) => {
    this.setState(
      {
        newMemberObject:
          { ...this.state.newMemberObject, [event.target.id]: event.target.value }
      });
  };

  addMember = () => {
    const member = this.state.newMemberObject;
    // category.budgetLimit = Number(category.budgetLimit);
    this.props.addMemberLocal(member);
    this.setState(
      {
        newMemberObject:
        { firstName: "", lastName: "", email: "", },
      }
    );
  };

  render = () => {
    return (
      <div>
        <h4>Add New Member</h4>
        <p>
          FIrst Name : <input id="firstName" type="text" onChange={this.inputValueChanged} value={this.state.newMemberObject.firstName} /><br />
          Last Name : <input id="lastName" type="text" onChange={this.inputValueChanged} value={this.state.newMemberObject.lastName}  /><br />
          Email : <input id="email" type="email" onChange={this.inputValueChanged} value={this.state.newMemberObject.email} /><br />
          <button type="button" onClick={this.addMember}>ADD MEMBER</button>
        </p>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  addMemberLocal: (member) => {
    dispatch(addMember(member));
  },
});

export default connect(null, mapDispatchToProps)(MemberAdd);
