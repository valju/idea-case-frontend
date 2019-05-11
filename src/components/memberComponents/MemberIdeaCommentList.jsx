import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMemberIdeaCommentByMemberId } from '../../actions/member';
import MemberIdeaCommentListItem from './MemberIdeaCommentListItem';

class MemberIdeaCommentList extends Component {

  componentDidMount() {  
    this.props.memberIdeaCommentById(this.props.id);
    console.log("commentlist-id"+this.props.id);
  }


  render() {
    console.dir(this.props.members.memberIdeaCommentList);
    return (
      <div>
        <h4> Members Comments </h4>
        <ol>
          {this.props.members.memberIdeaCommentList.map(item => (
            <MemberIdeaCommentListItem
              key={item.id}
              item={item}
            />
          ))}
        </ol>
        
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