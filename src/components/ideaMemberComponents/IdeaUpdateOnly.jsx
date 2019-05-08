import React, { Component } from 'react';
import { fetchAllIdeas } from '../../actions/idea';
import { getIdeaMemberById, updateIdeaOfIdeaMember } from '../../actions/ideaMember';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class IdeaUpdateOnly extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newIdeaId: this.props.match.params.ideaId,
      message: ""
    }
  }
  
  componentDidMount() {
    this.props.fetchAllIdeasLocal()

    const { ideaId, memberId } = this.props.match.params    
    this.props.ideaMemberById(ideaId, memberId)    
  }

  handleChange = (event) => {
    this.setState({
      newIdeaId: event.target.value
    })
  }

  updateIdea = () => {
    const { ideaId, memberId } = this.props.match.params
    const { newIdeaId } = this.state
    this.props.updateIdea(Number(ideaId), Number(newIdeaId), Number(memberId))
  }

  render() {
    const { name, firstName, lastName } = this.props.ideaMemberCurrent
    console.log(this.props.ideaMemberCurrent)
    console.log(this.props.message)
    return (
      <div>
        <h2>Update IDEA of Idea-Member</h2>
        {JSON.stringify(this.props.ideaMemberCurrent) === JSON.stringify({})
          ? (<p>Waiting server response for update ...</p>)
          : (
            <div>
              <h4>OLD IDEA-MEMBER:</h4>
              <p>Idea: {name}</p>
              <p>Member: {firstName} {lastName}</p>

              <h4>NEW IDEA:</h4>
              <div>
                <label htmlFor="ideaId">Idea: </label>
                <select id="ideaId" value={this.state.newIdeaId} name="ideaId" onChange={this.handleChange}>
                  {
                    this.props.ideaList.map((item) => 
                      <option key={item.id} value={item.id}>{item.name}</option>
                    )
                  }
                </select>
              </div>
              <div>
              <p>Member: {firstName} {lastName}</p>
              </div>
              <button onClick={this.updateIdea}>UPDATE IDEA</button>    
            </div>
          )
        }
        <h4>{this.props.message}</h4>       
        <p>
          <Link to="/idea_member">Back</Link>
        </p> 
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAllIdeasLocal: () => {
    dispatch(fetchAllIdeas());
  },
  ideaMemberById: (ideaId, memberId) => {
    dispatch(getIdeaMemberById(ideaId, memberId))
  },
  updateIdea: (oldIdeaId, newIdeaId, memberId) => {
    dispatch(updateIdeaOfIdeaMember(oldIdeaId, newIdeaId, memberId))
  }
})

const mapStateToProps = (state) => ({
  ideaMemberCurrent: state.ideaMembers.ideaMemberCurrent,  
  ideaList: state.ideas.ideaList,
  message: state.ideaMembers.ideaMemberMessage
})

export default connect(mapStateToProps, mapDispatchToProps)(IdeaUpdateOnly);