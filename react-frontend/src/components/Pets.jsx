import React, { Component } from "react";
import axios from "axios";

class Pet extends Component {
	state = {
		pets: []
	};

	componentDidMount() {
		axios.get("http://localhost:3001/pets").then(response => {
			console.log(response);
			let pets = response.data;
			this.setState({
				pets
			});
		});
	}

	render() {
		const { pets } = this.state;
		return (
			<div className="container">
				{pets.map(pet => {
					return (
						<div className="container" key={pet.results}>
							<h3>Welcome {pet.name}!</h3>
							<ul>
								<li>Name: {pet.name}</li>
								<li>ID# {pet.id}</li>
								<li>Username: {pet.username}</li>
								<li>About Me: {pet.description}</li>
							</ul>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Pet;
