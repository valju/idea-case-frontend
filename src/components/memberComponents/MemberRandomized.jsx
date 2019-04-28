import React, { Component } from "react";
import MemberItem from "./MemberItem";
import { connect } from "react-redux";

class MemberRandomized extends Component {
  render() {
    let member = { id: -1, name: "N/A", budgetLimit: "-1" };
    const memberList = this.props.members.memberList;

    if (memberList && memberList.length > 0) {
      let randomizedId = Math.floor(Math.random() * memberList.length);
      member = memberList[randomizedId];
    }

    return (
      <div>
        <h4>Randomized member:</h4>
        <MemberItem item={member} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  members: state.members
});

export default connect(
  mapStateToProps,
  null
)(MemberRandomized);
