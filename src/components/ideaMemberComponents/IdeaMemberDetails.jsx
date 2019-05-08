import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getIdeaMemberById } from '../../actions/ideaMember';

class IdeaMemberDetails extends Component {

  componentDidMount() {
    const { ideaId, memberId } = this.props.ids    
    this.props.ideaMemberById(ideaId, memberId)
  }

  render() {
    const { ideaId, memberId, firstName, lastName, name } = this.props.ideaMember.ideaMemberCurrent
    return (
      <div>
        <b>Member:</b> {firstName} {lastName}, ID number {memberId} <br/>
        <b>Idea:</b> {name}, ID number {ideaId}
        <p>
          <Link to="/idea_member">Back</Link>
        </p>
      </div>
      
    );
  }
}

const mapDispatchToProps = dispatch => ({
	ideaMemberById: (ideaId, memberId) => {
    dispatch(getIdeaMemberById(ideaId, memberId))
	}
});

const mapStateToProps = state => ({
	ideaMember: state.ideaMembers
});

export default connect(mapStateToProps, mapDispatchToProps)(IdeaMemberDetails);