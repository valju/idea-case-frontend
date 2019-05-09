import React, { Component } from 'react';
import { connect } from 'react-redux';
import IdeaItem from './IdeaItem';
import { getIdea } from '../../actions/idea';
import { Link } from 'react-router-dom';
import CommentBox from '../commentComponents/CommentBox';

class IdeaDetails extends Component {
  componentDidMount = () => {
    this.props.ideaGetById(this.props.ideaId);
  }

  render = () => {
    return (
      <div>
        <h2>One Idea</h2>
        {/* <p>Idea id digged out of react-router-dom params: {this.props.ideaId}</p> */}

        {(this.props.ideas.ideaCurrent === null)
          ?
          <IdeaItem item={{ name: "Hard-coded placeholder", budget: 12345 }} />
          :
          <IdeaItem item={this.props.ideas.ideaCurrent} />
        }
        <CommentBox ideaId={this.props.ideaId} />
        <p><Link to="/Ideas">Back to all ideas</Link></p>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  ideaGetById: (id) => {
    dispatch(getIdea(id));
  },
});

const mapStateToProps = state => ({
  ideas: state.ideas,
});

export default connect(mapStateToProps, mapDispatchToProps)(IdeaDetails);