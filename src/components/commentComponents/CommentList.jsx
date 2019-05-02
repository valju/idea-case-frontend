import React, { Component } from 'react';
import { fetchAllCommentsByIdeaId, deleteComment } from '../../actions/comment';
import { Link } from "react-router-dom";
import { fetchAllIdeas } from '../../actions/idea';
import { connect } from 'react-redux';

class CommentList extends Component {

  constructor(props) {
    super(props);
    this.state= { ideaId: "" }
  }
  componentDidMount() {
    this.props.fetchAllIdeasLocal();
  }

  inputFieldValueChanged = (event) => {
    this.setState({ ideaId: event.target.value })
  };

  render() {
    return (
      <div>
        <h4>Select which Idea's comments you want to see</h4>
        <select id="ideaId" onChange={this.inputFieldValueChanged}>
          <option value="poop"></option>
          {
            this.props.ideas.ideaList.map((item) =>
              <option key={item.id} value={item.id}>{item.name}</option>
            )
          }
        </select>
        <button onClick={() => this.props.commentsFetchByIdeaId(this.state.ideaId)}>Select</button>
        &nbsp;

        {this.props.comments.commentListByIdeaId.length === 0
          ? <p>There are no comments for this idea</p>
          :
          <ol>
            {

              this.props.comments.commentListByIdeaId.map((item) =>
                <li key={`${item.id}`}>
                  {item.firstName} {item.lastName} says: {item.commentText}
                  &nbsp;
                <Link to={`/comment_edit/${item.id}`}>Edit</Link>
                  &nbsp;
                <button type="button" onClick={() => this.props.deleteCommentLocal(item)}>Delete</button>
                </li>
              )
            }
          </ol>
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  commentsFetchByIdeaId: (ideaId) => {
    dispatch(fetchAllCommentsByIdeaId(ideaId));
  },
  deleteCommentLocal: (commentObject) => {
    dispatch(deleteComment(commentObject))
  },
  fetchAllIdeasLocal: () => {
    dispatch(fetchAllIdeas());
  },
});

const mapStateToProps = state => ({
  comments: state.comments,
  ideas: state.ideas,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
