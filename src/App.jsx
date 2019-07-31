import React, { Component } from "react";
import "./App.scss";
import Navigator from "./router/Navigator";
import "typeface-roboto";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigator />
			</div>
		);
	}
}

export default App;
