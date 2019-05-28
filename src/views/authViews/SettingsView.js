import React, { Component } from "react";
import SettingsComp from "../../components/authComponents/Settings";

export default class SettingsView extends Component {
  render() {
    return (
      <div>
        <h1>User Account</h1>
        <SettingsComp />
      </div>
    );
  }
}
