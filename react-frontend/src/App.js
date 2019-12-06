import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Pet from "./components/Pets/Pets";
import Post from "./components/Posts/Posts";
import "./App.css";

class App extends Component {
	state = {};

	render() {
		return (
			<>
				<div>
					<ul>
						<li>
							<Link to="/pets">
								<Pet />
							</Link>
						</li>
						<li>
							<Link to="/posts">
								<Post />
							</Link>
						</li>
					</ul>
				</div>
			</>
		);
	}
}

export default App;
