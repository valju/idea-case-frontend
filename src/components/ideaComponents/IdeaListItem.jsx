import React, { Component } from 'react';
import IdeaItem from './IdeaItem';
import { Link } from 'react-router-dom';

//Styling
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

export default class IdeaListItem extends Component {

  render() {
    return (
      <li>
        <Link to={"/Idea/" + this.props.item.id}>
          <IdeaItem item={this.props.item} />
        </Link>
        <span> </span>  {/* Just one space added before delete button */}
        <Button
          type="button"
          color="primary"
          onClick={() => {
            this.props.deleteCategoryClicked(
              this.props.item.id
            )
          }}
        >
          <DeleteIcon></DeleteIcon>
        </Button>

        <Link to={"/IdeaUpdate/" + this.props.item.id}>
          <Button type="button" color="primary">
            <UpdateIcon></UpdateIcon>
          </Button>
        </Link>

      </li>
    );
  }
}
