import React, { Component } from 'react';
import { fetchAllCommentsByIdeaId, deleteComment } from '../../actions/comment';
import { connect } from 'react-redux';
import CommentItem from './CommentItem';
import CommentAdd from './CommentAdd';

class CommentBox extends Component {

  componentDidMount() {
    this.props.fetchCommentsByIdeaLocal(this.props.ideaId);
  }

  render() {
    return (
      <div>
        <h3>Comments:</h3>
        <div>
          {this.props.comments.commentListByIdeaId.length === 0
            ? <p>There are no comments for this idea!</p>
            : <div>
              {
                this.props.comments.commentListByIdeaId.map((item) =>
                  <div key={`${item.id}`}>
                    <CommentItem key={item.id} item={item} deleteComment={this.props.deleteCommentLocal} />
                  </div>
                )
              }
            </div>
          }
        </div>
        <CommentAdd ideaId={this.props.ideaId} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCommentsByIdeaLocal: (ideaId) => {
    dispatch(fetchAllCommentsByIdeaId(ideaId));
  },
  deleteCommentLocal: (commentObject) => {
    dispatch(deleteComment(commentObject))
  },
});

const mapStateToProps = state => ({
  comments: state.comments,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
