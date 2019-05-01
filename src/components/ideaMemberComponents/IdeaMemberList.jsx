import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllIdeaMember } from '../../actions/ideaMember';
import IdeaMemberListItem from './IdeaMemberListItem';

class IdeaMemberList extends Component {
  
  componentDidMount() {
    this.props.ideaMemberFetchAll();
    console.log(this.props.ideaMembers)
  }

  render() {
    console.log(this.props.ideaMembers)
    
    return (
      <div>
        <h4>List of Idea-Member</h4>
        <ol>
          {
            this.props.ideaMembers.ideaMemberList.map(item => 
              <IdeaMemberListItem 
                key={`${item.ideaId}-${item.memberId}`}
                item={item}
              />
            )
          }
        </ol>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  ideaMemberFetchAll: () => {
    dispatch(fetchAllIdeaMember())
  },
})

const mapStateToProps = (state) => ({
  ideaMembers: state.ideaMembers
})

export default connect(mapStateToProps, mapDispatchToProps)(IdeaMemberList);