import React, { Component } from "react";
import IdeaItem from "./IdeaItem";
import { Link } from "react-router-dom";

export default class IdeaListItem extends Component {
  render() {
    return (
      <li>
        <IdeaItem item={this.props.item} />
        &nbsp;&nbsp;
        <Link to={"/Idea/" + this.props.item.id}>
          View
        </Link>
        &nbsp;&nbsp;
        <span> </span> {/* Just one space added before delete button */}
        <button
          type="button"
          onClick={() => {
            this.props.deleteIdeaClicked(this.props.item.id);
          }}
        >
          DELETE
        </button>

        <Link to={{
          pathname: "/idea/update/" + this.props.item.id,
          state: { idea: this.props.item }
        }}>
          <button type="button">
            UPDATE
          </button>

        </Link>
        <hr />
      </li>
    );
  }
}
