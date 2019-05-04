import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/comment';
import { fetchAllmembers } from '../../actions/member';

class CommentAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newComment:
        { ideaId: "1002", memberId: "101", commentText: "", },
    };
  }

  componentDidMount() {
    this.props.membersFetchAllLocal();
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
        <h4>New Comment</h4>
        <select id="memberId" defaultValue="101" onChange={this.inputFieldValueChanged}>
          {
            this.props.members.memberList.map((item) =>
              <option key={item.id} value={item.id}>{item.firstName} {item.lastName}</option>
            )
          }
        </select>
        <select id="ideaId" defaultValue="1002" onChange={this.inputFieldValueChanged}>
          <option value="1002">1002</option>
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
  membersFetchAllLocal: () => {
    dispatch(fetchAllmembers());
  },
});

const mapStateToProps = state => ({
  members: state.members,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentAdd);
