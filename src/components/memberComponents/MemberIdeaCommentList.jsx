import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMemberIdeaCommentByMemberId } from '../../actions/member';
import MemberIdeaCommentListItem from './MemberIdeaCommentListItem';

class MemberIdeaCommentList extends Component {

  componentDidMount() {
    this.props.memberIdeaCommentById(this.props.id);
    console.log("commentlist-id" + this.props.id);
  }


  render() {
    return (
      <div>
        {(this.props.members.memberIdeaCommentList.length === 0)
          ?
          (<div>No Ideas or Comments for this person!!!</div>)
          : (this.props.members.memberIdeaCommentList.map((item, id) =>
            <MemberIdeaCommentListItem
              key={id}
              item={item}
            />
          )
          )}

      </div>

    );
  }
}

const mapDispatchToProps = dispatch => ({
  memberIdeaCommentById: (id) => {
    dispatch(getMemberIdeaCommentByMemberId(id))
  }
});

const mapStateToProps = state => ({
  members: state.members
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberIdeaCommentList);