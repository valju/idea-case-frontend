import React, { Component } from "react";
import CategoryUpdate from "../../components/categoryComponents/CategoryUpdate";

export default class CategoryUpdateView extends Component {
  render() {
    return (
      <div>
        <CategoryUpdate categoryId={this.props.match.params.id} />
      </div>
    );
  }
}
