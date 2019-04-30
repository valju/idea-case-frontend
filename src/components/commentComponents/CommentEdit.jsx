import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateComment, fetchOneComment } from '../../actions/comment';

class CommentEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      commentObject: { id: "", commentText: "", },
      showBackButton: false,
    };
  }

  componentWillMount() {
    this.props.getOneCommentLocal(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.comments.commentCurrent !== prevProps.comments.commentCurrent) {
      this.setState({
        commentObject:
          { ...this.state.commentObject, id: this.props.comments.commentCurrent[0].id, commentText: this.props.comments.commentCurrent[0].commentText, }
      });
    }
  }

  inputFieldValueChanged = (event) => {
    this.setState({
      commentObject:
        { ...this.state.commentObject, commentText: event.target.value, }
    });
  };

  updateComment = () => {
    this.setState({ showBackButton: true, });
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
          <p>
            <input
              id="commentText" type="text" size="50"
              onChange={this.inputFieldValueChanged}
              value={this.state.commentObject.commentText}
            />
          </p>
          <p>
            <button type="button" onClick={this.updateComment}>Edit comment</button>
          </p>
          {this.state.showBackButton &&
            <div>
              <p>
                Comment edited!
              </p>
              <p>
                <Link to="/comments_technical"><span>Back</span></Link>
              </p>
            </div>
          } 
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
