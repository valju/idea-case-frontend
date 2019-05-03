import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/comment';
import { fetchAllmembers } from '../../actions/member';
import { fetchAllIdeas } from '../../actions/idea';

class CommentAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newComment:
        { ideaId: "1002", memberId: "101", commentText: "", },
    };
  }

  componentDidMount() {
    this.props.fetchAllMembersLocal();
    this.props.fetchAllIdeasLocal();
  }

  inputFieldValueChanged = (event) => {
    this.setState(
      {
        newComment:
          { ...this.state.newComment, [event.target.id]: event.target.value }
      });
  };

  addComment = () => {
    const comment = this.state.newComment;
    if (comment.commentText === "") {
      this.setState(
        {
          newComment:
            { ...this.state.newComment, commentText: "Comment Box should not be left empty!", },
        }
      );
    } else {
      comment.ideaId = Number(comment.ideaId);
      comment.memberId = Number(comment.memberId);
      this.props.addCommentLocal(comment);
      this.setState(
        {
          newComment:
            { ...this.state.newComment, commentText: "", },
        }
      );
    }
  };

  render() {
    return (
      <div>
        <h4>Add new Comment</h4>
        <select id="memberId" onChange={this.inputFieldValueChanged}>
          {
            this.props.members.memberList.map((item) =>
              <option key={item.id} value={item.id}>{item.firstName} {item.lastName}</option>
            )
          }
        </select>
        <select id="ideaId" onChange={this.inputFieldValueChanged}>
        {
            this.props.ideas.ideaList.map((item) =>
              <option key={item.id} value={item.id}>{item.name}</option>
            )
          }
        </select>
        <p>
          Comment Text: <input id="commentText" type="text" size="50" onChange={this.inputFieldValueChanged} value={this.state.newComment.commentText} /><br />
          <button type="button" onClick={this.addComment}>ADD NEW COMMENT</button>
        </p>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  addCommentLocal: (comment) => {
    dispatch(addComment(comment));
  },
  fetchAllMembersLocal: () => {
    dispatch(fetchAllmembers());
  },
  fetchAllIdeasLocal: () => {
    dispatch(fetchAllIdeas());
  },
});

const mapStateToProps = state => ({
  members: state.members,
  ideas: state.ideas,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentAdd);
