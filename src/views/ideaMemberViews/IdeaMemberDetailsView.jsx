import React, { Component } from 'react';
import IdeaMemberDetails from '../../components/ideaMemberComponents/IdeaMemberDetails';

class IdeaMemberDetailsView extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
				<h2>Idea-Member Details</h2>        
        <IdeaMemberDetails ids={this.props.match.params}/>
      </div>
    );
  }
}

export default IdeaMemberDetailsView;