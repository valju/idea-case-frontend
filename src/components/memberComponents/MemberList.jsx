import React, { Component } from "react";
import { fetchAllMembers, deleteMember } from "../../actions/member";
import MemberListItem from "./MemberListItem";
import { connect } from "react-redux";

class MemberList extends Component {
  componentDidMount() {
    this.props.membersFetchAll();
  }

  render() {
    return (
      <div>
        <h4>List of Members</h4>
        <ol>
          {this.props.members.memberList.map(item => (
            <MemberListItem
              key={item.id}
              item={item}
              deleteMemberClicked={this.props.deleteMemberLocal}
            />
          ))}
        </ol>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  membersFetchAll: () => {
    dispatch(fetchAllMembers());
  },
  deleteMemberLocal: id => {
    dispatch(deleteMember(id));
  }
});

const mapStateToProps = state => ({
  members: state.members
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberList);
