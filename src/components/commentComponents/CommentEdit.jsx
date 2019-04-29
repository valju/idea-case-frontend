import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateComment, fetchOneComment } from '../../actions/comment';

class CommentEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      commentObject: {
        ideaId: this.props.ideaId,
        memberId: this.props.memberId,
        commentTimeStamp: this.props.commentTimeStamp,
      }
    };
  }

  componentDidMount() {
    this.setState({
      commentObject: {
        ...this.state.commentObject,
        ideaId: this.props.ideaId,
        memberId: this.props.memberId,
        commentTimeStamp: this.props.commentTimeStamp,
      }
    });
    this.props.getOneCommentLocal(this.state.commentObject);
  }

  inputFieldValueChanged = (event) => {
    this.setState(
      {
        commentObject:
          { ...this.state.commentObject, commentText: event.target.value }
      });
  };

  updateCommentLocal = () => {
    const comment = this.state.commentObject;

    comment.ideaId = Number(comment.ideaId);
    comment.memberId = Number(comment.memberId);
    this.props.updateCommentLocal(comment);
    this.setState(
      {
        commentObject:
          { ...this.state.commentObject, commentText: "", },
      }
    );
  }


  render() {
    return (
      <div>
        <h4>Edit Comment</h4>
        <p>
          Comment Text: <input id="commentText" type="text" size="50" onChange={this.inputFieldValueChanged} value={this.state.commentText} /><br />
          <button type="button" onClick={this.updateCommentLocal}>Edit comment</button>
        </p>
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  updateCommentLocal: (commentObject) => {
    dispatch(updateComment(commentObject));
  },
  getOneCommentLocal: (comment) => {
    dispatch(fetchOneComment(comment))
  }
});

const mapStateToProps = state => ({
  commentCurrent: state.commentCurrent,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentEdit);
