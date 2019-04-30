import React, { Component } from 'react';
import { fetchAllCommentsByIdeaId } from '../../actions/comment';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class CommentList extends Component {

  componentDidMount() {
    this.props.commentsFetchByIdeaId();
  }

  render() {
    return (
      <div>
        <h4>List of ideas with comments (Currently for Idea with id 1002)</h4>
        <ol>
          {
            this.props.comments.commentListByIdeaId.map((item) =>
              <li key={`${item.id}`}>{item.firstName} {item.lastName} says: {item.commentText}
                <Link to={`/comment_edit/${item.id}`}> Edit</Link></li>
            )
          }
        </ol>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  commentsFetchByIdeaId: () => {
    dispatch(fetchAllCommentsByIdeaId());
  },
});

const mapStateToProps = state => ({
  comments: state.comments,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
