import React, { Component } from "react";

export default class Footer extends Component {
	render() {
		let d = new Date();
		let y = d.getFullYear();

		return (
			<div>
				<footer>
					<p className="footer"> Nets Finland {y}</p>
				</footer>
			</div>
		);
	}
}
