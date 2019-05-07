import React, { Component } from 'react';
import { fetchAllCommentsByIdeaId, deleteComment } from '../../actions/comment';
import { fetchAllIdeas } from '../../actions/idea';
import { connect } from 'react-redux';
import CommentItem from './CommentItem';

class CommentList extends Component {

  constructor(props) {
    super(props);
    this.state = { ideaId: "", defaultIdeaSelected: true, }
  }

  componentDidMount() {
    this.props.fetchAllIdeasLocal();
  }

  inputFieldValueChanged = (event) => {
    this.setState({ ideaId: event.target.value });
    if (event.target.value === "default") {
      this.setState({ defaultIdeaSelected: true });
    } else {
      this.setState({ defaultIdeaSelected: false });
      this.props.fetchCommentsByIdeaLocal(event.target.value);
    }
  }

  render() {
    return (
      <div>
        <h4>Select Comments for one Idea</h4>
        <select id="ideaId" onChange={this.inputFieldValueChanged}>
          <option value="default"></option>
          {
            this.props.ideas.ideaList.map((item) =>
              <option key={item.id} value={item.id}>{item.name}</option>
            )
          }
        </select>
        {this.state.defaultIdeaSelected
          ? <p>Please select an idea.</p>
          : <div>
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
        }
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
  fetchAllIdeasLocal: () => {
    dispatch(fetchAllIdeas());
  },
});

const mapStateToProps = state => ({
  comments: state.comments,
  ideas: state.ideas,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
