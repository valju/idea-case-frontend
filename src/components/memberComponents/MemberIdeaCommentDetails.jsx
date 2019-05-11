import React, { Component } from 'react';
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import {getMemberIdeaCommentByMemberId} from "../../actions/member"
import MemberIdeaCommentItem from './MemberIdeaCommentItem';


class MemberIdeaCommentDetails extends Component {
  componentDidMount(){
    this.props.memberIdeaCommentGetByMemberId(this.props.id);
  }

  render() {
    return (
      <div>
        {this.props.members.memberIdeaCommentList.length === 0 ? (
					<p>Waiting server response for member Idea & Comment...</p>
				) : (
          <div>
					<MemberIdeaCommentItem item={this.props.members.memberIdeaCommentList} />
          <Link to="/members">
          <button>Back to Member List</button>
          </Link>
          </div>
        )}
        
        
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
	memberIdeaCommentGetByMemberId: id => {
		dispatch(getMemberIdeaCommentByMemberId(id));
	}
});

const mapStateToProps = state => ({
	members: state.members
});

export default connect(mapStateToProps,mapDispatchToProps)(MemberIdeaCommentDetails);


