import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
	state = {
		posts: [],
		pets: []
	};

	componentDidMount() {
		axios.get("http://localhost:3001/posts").then(response => {
			console.log(response);
			let posts = response.data;
			this.setState({
				posts
			});
		});
		axios.get("http://localhost:3001/pets").then(response => {
			console.log(response);
			let pets = response.data;
			this.setState({
				pets
			});
		});
	}

	render() {
		const { posts, pets } = this.state;
		return (
			<div className="container">
				{posts.map(post => {
					return (
						<div className="container" key={post.results}>
							<h3>{post.title}!</h3>
							<ul>
								<li>{post.content}</li>
								<li>ID# {post.id}</li>
								{pets.map(pet => {
									return (
										<li>
											Posted by: {post.pet_id},{" "}
											{pet.username}
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Post;
