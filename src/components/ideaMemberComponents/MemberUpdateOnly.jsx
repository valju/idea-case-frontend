import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchAllMembers } from '../../actions/member';
import { getIdeaMemberById, updateMemberOfIdeaMember } from '../../actions/ideaMember';
import { Link } from "react-router-dom";

class MemberUpdateOnly extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newMemberId: this.props.match.params.memberId,
      message: ""
    }
  }

  componentDidMount() {
    this.props.fetchAllMembersLocal()

    const { ideaId, memberId } = this.props.match.params    
    this.props.ideaMemberById(ideaId, memberId)    
  }

  handleChange = (event) => {
    this.setState({
      newMemberId: event.target.value
    })
  }

  updateMember = () => {
    const { ideaId, memberId } = this.props.match.params
    const { newMemberId } = this.state
    this.props.updateIdea(Number(ideaId), Number(memberId), Number(newMemberId))
  }

  render() {
    const { name, firstName, lastName } = this.props.ideaMemberCurrent
    console.log(this.props.match.params)
    return (
      <div>
        <h2>Update MEMBER of Idea-Member</h2>
        {JSON.stringify(this.props.ideaMemberCurrent) === JSON.stringify({})
          ? (<p>Waiting server response for update ...</p>)
          : (
            <div>
              <h4>OLD IDEA-MEMBER:</h4>
              <p>Idea: {name}</p>
              <p>Member: {firstName} {lastName}</p>

              <h4>NEW MEMBER:</h4>
              <div>
                <p>Idea: {name}</p>
              </div>
              <div>
                <label htmlFor="memberId">Member: </label>
                <select id="memberId" value={this.state.newMemberId} name="memberId" onChange={this.handleChange}>
                  {
                    this.props.memberList.map((item) => 
                      <option key={item.id} value={item.id}>{item.firstName} {item.lastName}</option>
                    )
                  }
                </select>
              </div>
              <br/>
              <button onClick={this.updateMember}>UPDATE MEMBER</button>    
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
  fetchAllMembersLocal: () => {
    dispatch(fetchAllMembers());
  },
  ideaMemberById: (ideaId, memberId) => {
    dispatch(getIdeaMemberById(ideaId, memberId))
  },
  updateIdea: (ideaId, memberId, newMemberId) => {
    dispatch(updateMemberOfIdeaMember(ideaId, memberId, newMemberId))
  }
})

const mapStateToProps = (state) => ({
  ideaMemberCurrent: state.ideaMembers.ideaMemberCurrent,  
  memberList: state.members.memberList,
  message: state.ideaMembers.ideaMemberMessage
})

export default connect(mapStateToProps, mapDispatchToProps)(MemberUpdateOnly);