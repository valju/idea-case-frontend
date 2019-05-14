import React, { Component } from 'react';
import { fetchAllComments } from '../../actions/comment';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Moment from 'moment';

class CommentActivity extends Component {

  constructor(props) {
    super(props);
    this.counter = 0;
  }

  componentDidMount() {
    this.props.fetchAllCommentsLocal();
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
    const currentDate = new Date();
    let that = this;
    return (
      <div>
        <h3>Today's commenting activity:</h3>
        <div>
          {this.props.comments.commentsAll.length === 0
            ? <p>Loading...</p>
            : <div>
              {this.props.comments.commentsAll.map((item) => {
                return <div key={`${item.id}`}>
                  {this.formatDate(item.commentTimeStamp) === this.formatDate(currentDate)
                    ?
                    <div>
                      <span hidden>{that.counter++}</span>
                      <p>{this.formatTime(item.commentTimeStamp)} {item.firstName} {item.lastName} commented on <Link to={`/Idea/${item.ideaId}`}>{item.name}</Link>:</p>
                      <p>{item.commentText}</p>
                    </div>
                    : <span></span>
                  }
                </div>
              })
              }
              {that.counter === 0
                ? <p>No one has been commenting today :(</p>
                : <span></span>}
            </div>
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllCommentsLocal: () => {
    dispatch(fetchAllComments())
  },
});

const mapStateToProps = state => ({
  comments: state.comments,
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentActivity);
