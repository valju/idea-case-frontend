import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MemberItem from './MemberItem';

export default class MemberListItem extends Component {

  render() {
    return (
      <li>
        <Link to={"/Member/"+this.props.item.id}>
          <MemberItem item={this.props.item} />
        </Link>
        <span> </span>  {/* Just one space added before delete button */}
        <button type="button" 
            onClick={()=>{this.props.deleteMemberClicked(
              this.props.item.id
            )}}
        >Delete Member</button>

        {/* <span> </span>

        <Link to={"/CategoryUpdate/"+this.props.item.id}>
          <button type="button">Update this category</button>
        </Link> */}
        
      </li>
    );
  }
}
