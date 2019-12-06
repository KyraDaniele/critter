import React, { Component } from "react";
import Pet from "./components/Pets";
import "./App.css";

class App extends Component {
	state = {
		pets: []
	};

	render() {
		return (
			<>
				<div>
					<Pet />
				</div>
			</>
		);
	}
}

export default App;
