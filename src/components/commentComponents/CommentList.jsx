import React, { Component } from 'react';
import { fetchAllCommentsByIdeaId } from '../../actions/comment';
//import CategoryListItem from './CategoryListItem';
import { connect } from 'react-redux';

class CommentList extends Component {

  componentDidMount() {
    this.props.commentsFetchByIdeaId();
  }

  render() {
    return (
      <div>
        <h4>List of ideas with comments</h4>
        <ol>
          {
            this.props.comments.commentListByIdeaId.map((item) =>
              <li key={item.commentTimeStamp}>{item.firstName} {item.lastName} says: {item.commentText}</li>
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
