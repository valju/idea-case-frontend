import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateComment, fetchOneComment } from '../../actions/comment';

class CommentEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      commentObject: { id: "", commentText: "", },
    };
  }

  componentWillMount() {
    this.props.getOneCommentLocal(this.props.id);
  }

  inputFieldValueChanged = (event) => {
    this.setState({
      commentObject:
        { ...this.state.commentObject, commentText: event.target.value, id: this.props.comments.commentCurrent[0].id, }
    });
  };

  updateComment = () => {
    this.props.updateCommentLocal(this.state.commentObject);
  }

  render() {
    if (this.props.comments.commentCurrent === null) {
      return (
        <div>
          Loading Comment
        </div>
      )
    } else {
      return (
        <div>
          <h4>Edit Comment</h4>
          <p>Old Comment: {this.props.comments.commentCurrent[0].commentText}</p>
          <p>New Comment:
            <input
              id="commentText" type="text" size="50"
              onChange={this.inputFieldValueChanged}
              value={this.state.commentObject.commentText}
            />
            <br />
            <button type="button" onClick={this.updateComment}>Edit comment</button>
          </p>
        </div>
      );
    }
  };
};

const mapDispatchToProps = dispatch => ({
  updateCommentLocal: (commentId) => {
    dispatch(updateComment(commentId));
  },
  getOneCommentLocal: (comment) => {
    dispatch(fetchOneComment(comment));
  },
});

const mapStateToProps = state => ({
  comments: state.comments,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentEdit);
