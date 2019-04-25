import React, { Component } from 'react';
// import { fetchTestIdeas as oldOne } from '../../models/Test';
import {fetchAllIdeas, deleteIdea} from '../../actions/idea';
import IdeaListItem from './IdeaListItem';
import { connect } from 'react-redux';

import SimpleCard from '../MUI-Card';

class IdeaList extends Component {
  componentDidMount() {
    this.props.ideasFetchAll();
  }

  render() {
    return (
      <div>
        <h4>List of Ideas</h4>
        <ol>
          {
            this.props.ideas.ideaList.map((item) =>
                <IdeaListItem key={item.id} item={item}
                deleteIdeaClicked={this.props.deleteIdeaLocal} />
                /* <SimpleCard key={item.id} item={item} 
                deleteCategoryClicked={this.props.deleteCategoryLocal} /> */
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
  deleteIdeaLocal: (id) => {
    dispatch(deleteIdea(id))
  }
});

const mapStateToProps = state => ({
  ideas: state.ideas,
});

export default connect(mapStateToProps, mapDispatchToProps)(IdeaList);

// What happens with last line? Kind of this:
// export default prepareToConnect(mapStateToProps,mapDispatchToProps)(CategoryList);
// export default doActualConnect(CategoryList);
// export default reduxConnectedComponentType;   // exports a redux-connected React component