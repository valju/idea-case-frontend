import React, { Component } from 'react';
import IdeaMemberItem from './IdeaMemberItem';
import { Link } from "react-router-dom";
class IdeaMemberListItem extends Component {
  render() {
    return (
      <li style={{listStyle: 'none'}}>
				<Link to={"/idea_member/" + this.props.item.ideaId + "/" + this.props.item.memberId}>
          <div>
            <IdeaMemberItem item={this.props.item} />
          </div>
				</Link>
			</li>
    );
  }
}

export default IdeaMemberListItem;