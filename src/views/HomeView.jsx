import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class HomeView extends Component {
	render() {
		let d = new Date();
		let time = d.getHours();
		return (
			<div className="data-container">
				<Header />
				<br />
				<br />
				<p>
					{time > 18
						? "Good evening, "
						: time > 12
						? "Good afternoon, "
						: "Good morning, "}{" "}
					User!
				</p>
				<Footer />
			</div>
		);
	}
}
