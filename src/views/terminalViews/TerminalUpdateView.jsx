import React, { Component } from 'react';
import TerminalUpdate from '../../components/terminalComponents/TerminalUpdate';

class TerminalUpdateView extends Component {
  render() {
    return (
      <div>
        <h1>Update Terminal</h1>
        <TerminalUpdate id={this.props.match.params.id} />
      </div>
    );
  }
}

export default TerminalUpdateView;