import React, { Component } from 'react';
import IdeaMemberItem from './IdeaMemberItem';
import { Link } from "react-router-dom";
class IdeaMemberListItem extends Component {
  render() {
    const { ideaId, memberId } = this.props.item
    return (
      <li style={{listStyle: 'none'}}>	
        <div>
          <IdeaMemberItem item={this.props.item} />
        </div>
        <Link to={"/idea_member/" + ideaId + "/" + memberId}>
          <button>View</button>
        </Link>
        <Link to={"/idea_member/update/" + ideaId + "/" + memberId}>        
          <button>Edit</button>
        </Link>
        <button onClick={() => this.props.delete(ideaId, memberId)}>Delete</button>
        <hr />
			</li>
    );
  }
}

export default IdeaMemberListItem;