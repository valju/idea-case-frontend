import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/comment';
import { fetchAllMembers } from '../../actions/member';
import { getIdea } from '../../actions/idea';

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
    this.props.getIdeaLocal(this.props.ideaId);
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
      comment.ideaId = Number(this.props.ideaId);
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
        <h3>Add new Comment</h3>
        {(this.props.ideas.ideaCurrent === null || this.props.ideas.ideaCurrent.readyForComments === 0)
          ? <p>This idea cannot be commented... yet</p>
          : <div>
            Select a member: <select id="memberId" onChange={this.inputFieldValueChanged}>
              {
                this.props.members.memberList.map((item) =>
                  <option key={item.id} value={item.id}>{item.firstName} {item.lastName}</option>
                )
              }
            </select>
            <p>
              Comment Text: <input id="commentText" type="text" size="50" onChange={this.inputFieldValueChanged} value={this.state.newComment.commentText} /><br />
              <button type="button" onClick={this.addComment}>ADD NEW COMMENT</button>
            </p>
          </div>}
          </div>
      );
    };
  }
  
const mapDispatchToProps = dispatch => ({
          addCommentLocal: (comment) => {
          dispatch(addComment(comment));
        },
  fetchAllMembersLocal: () => {
          dispatch(fetchAllMembers());
        },
  getIdeaLocal: (ideaId) => {
          dispatch(getIdea(ideaId));
        },
      });
      
const mapStateToProps = state => ({
          members: state.members,
        ideas: state.ideas,
      });
      
      export default connect(mapStateToProps, mapDispatchToProps)(CommentAdd);
