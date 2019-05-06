import React, { Component } from 'react';
// import { fetchTestIdeas as oldOne } from '../../models/Test';
import { fetchAllIdeas, deleteIdea, fetchIdeasByCategory } from '../../actions/idea';
import IdeaListItem from './IdeaListItem';
import { connect } from 'react-redux';

class IdeaList extends Component {
  componentDidMount() {
    this.props.ideasFetchAll();
  }

  categoryValueChanged = event => {
    this.props.ideasFetchByCategory(event.target.value);
  };

  render() {
    return (
      <div>
        <h4>List of Ideas</h4>
        <br />
        By Category:
                <select id="categoryId" onChange={this.categoryValueChanged}>
          {
            this.props.categories.categoryList.map((item) =>
              <option key={item.id} value={item.id} > {item.name} </option>
            )

          }
        </select>
        <ol>
          {
            this.props.ideas.ideaList.map((item) =>
              <IdeaListItem key={item.id} item={item}
                deleteIdeaClicked={this.props.deleteIdeaLocal} />
            )

          }
        </ol>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  ideasFetchAll: () => {
    dispatch(fetchAllIdeas());
  },
  ideasFetchByCategory: (categoryId) => {
    dispatch(fetchIdeasByCategory(categoryId));
  },
  deleteIdeaLocal: (id) => {
    dispatch(deleteIdea(id))
  }
});

const mapStateToProps = state => ({
  ideas: state.ideas,
  categories: state.categories
});

export default connect(mapStateToProps, mapDispatchToProps)(IdeaList);

// What happens with last line? Kind of this:
// export default prepareToConnect(mapStateToProps,mapDispatchToProps)(CategoryList);
// export default doActualConnect(CategoryList);
// export default reduxConnectedComponentType;   // exports a redux-connected React component