import React, { Component } from "react";

import MemberAdd from "../../components/memberComponents/MemberAdd";
import MemberList from "../../components/memberComponents/MemberList";
import MemberRandomized from "../../components/memberComponents/MemberRandomized";

export default class Members extends Component {
  render() {
    return (
      <div>
        <h2>My Members</h2>
        <MemberAdd />
        <MemberList />
        <MemberRandomized />
      </div>
    );
  }
}
