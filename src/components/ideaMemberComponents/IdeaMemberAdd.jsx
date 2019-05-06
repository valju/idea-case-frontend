import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllMembers } from '../../actions/member';
import { fetchAllIdeas } from '../../actions/idea';
import { addIdeaMember } from '../../actions/ideaMember';

class IdeaMemberAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ideaId: null,
      memberId: null
    }
  }

  componentDidMount() {
    console.log(this.props)
    this.props.fetchAllIdeasLocal();
    this.props.fetchAllMembersLocal();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: Number(event.target.value)
    })
  }

  addIdeaMember = () => {
    console.log(this.state)
    console.log(this.props)

    const { ideaId, memberId } = this.state;
    const newIdeaMember = { ideaId, memberId }
    this.props.addIdeaMemberLocal(newIdeaMember);

  }

  render() {
    return (
      <div>
        <h4>Add new Idea-member</h4>
        <div>
          <label htmlFor="ideaId">Idea: </label>
          <select id="ideaId" name="ideaId" onChange={this.handleChange}>
            <option>SELECT IDEA</option>
            {
              this.props.ideaList.map((item) =>
                <option key={item.id} value={item.id}>{item.name}</option>
              )
            }
          </select>
        </div>
        <div>
          <label htmlFor="memberId">Member: </label>
          <select id="memberId" name="memberId" onChange={this.handleChange}>
            <option>SELECT MEMBER</option>  
            {
              this.props.memberList.map((item) =>
                <option key={item.id} value={item.id}>{item.firstName} {item.lastName}</option>
              )
            }
          </select>
        </div>
        <button 
          disabled={this.state.ideaId === null || this.state.memberId === null} 
          onClick={this.addIdeaMember}>
            ADD NEW IDEA-MEMBER
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllMembersLocal: () => {
    dispatch(fetchAllMembers());
  },
  fetchAllIdeasLocal: () => {
    dispatch(fetchAllIdeas());
  },
  addIdeaMemberLocal: (newIdeaMember) => {
    dispatch(addIdeaMember(newIdeaMember))
  }
});

const mapStateToProps = state => ({
  memberList: state.members.memberList,
  ideaList: state.ideas.ideaList,
});

export default connect(mapStateToProps, mapDispatchToProps)(IdeaMemberAdd);