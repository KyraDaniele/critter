import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<ContactForm />
				<Route path="/" exact component={BlogList} />
				<Route path="/post/:post_id?" component={BlogPost} />
			</div>
		</Router>
	);
}

export default App;
