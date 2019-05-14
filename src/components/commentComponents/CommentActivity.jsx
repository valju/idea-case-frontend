import React, { Component } from 'react';
import { fetchAllCommentsFromToday } from '../../actions/comment';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Moment from 'moment';

class CommentActivity extends Component {

  componentDidMount() {
    this.props.fetchAllCommentsFromTodayLocal();
  }

  formatDate = (timeStamp) => {
    let formattedDate = Moment(timeStamp).format("DD/MM/YYYY")
    return formattedDate;
  }

  formatTime = (timeStamp) => {
    let formattedTime = Moment(timeStamp).format("HH:mm")
    return formattedTime;
  }

  render() {
    return (
      <div>
        <h3>Today's commenting activity:</h3>
        <div>
          {this.props.comments.commentsAll.length === 0
            ? <p>No one has been commenting today :(</p>
            : <div>
              {this.props.comments.commentsAll.map((item) => {
                return <div key={`${item.id}`}>
                  <div>
                    <p>{this.formatTime(item.commentTimeStamp)} {item.firstName} {item.lastName} commented on <Link to={`/Idea/${item.ideaId}`}>{item.name}</Link>:</p>
                    <p>{item.commentText}</p>
                  </div>
                </div>
              })
              }
            </div>
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllCommentsFromTodayLocal: () => {
    dispatch(fetchAllCommentsFromToday())
  },
});

const mapStateToProps = state => ({
  comments: state.comments,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentActivity);
