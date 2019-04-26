import React, { Component } from 'react';
import IdeaItem from './IdeaItem';
import { Link } from 'react-router-dom';

export default class IdeaListItem extends Component {

  render() {
    return (
      <li>
        <Link to={"/Idea/" + this.props.item.id}>
          <IdeaItem item={this.props.item} />
        </Link>
        <span> </span>  {/* Just one space added before delete button */}
        <button
          type="button"
          onClick={() => {
            this.props.deleteIdeaClicked(
              this.props.item.id
            )
          }}
        >
          DELETE
        </button>

        <Link to={"/IdeaUpdate/" + this.props.item.id}>
          <button type="button">
            UPDATE
          </button>
        </Link>

      </li>
    );
  }
}
