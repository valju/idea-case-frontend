import React, { Component } from 'react';
import { Link } from "react-router-dom";

class IdeaMemberUpdate extends Component {

  render() {
    const { ideaId, memberId } = this.props.ids
    return (
      <div>
        <div>
          <Link to={"/idea_member/update/idea/" + ideaId + "/" + memberId}>        
            <button>UPDATE IDEA</button>
          </Link>
        </div>

        <div>
          <Link to={"/idea_member/update/member/" + ideaId + "/" + memberId}> 
            <button>UPDATE MEMBER</button>   
          </Link>  
        </div>  
         
        <p>
          <Link to="/idea_member">Back</Link>
        </p>
      </div>
    );
  }
}

export default IdeaMemberUpdate;