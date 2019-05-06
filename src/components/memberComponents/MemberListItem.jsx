import React, { Component } from "react";
import { Link } from "react-router-dom";
import MemberItem from "./MemberItem";

export default class MemberListItem extends Component {
  render() {
    return (
      <li>
        <MemberItem item={this.props.item} />
        <span> </span>
        <Link to={"/member/" + this.props.item.id}>
          <button>view</button>
        </Link>
        <span> </span>
        <button
          onClick={() => {
            this.props.deleteMemberClicked(this.props.item.id);
          }}
        >
          DELETE
        </button>
      </li>
    );
  }
}
