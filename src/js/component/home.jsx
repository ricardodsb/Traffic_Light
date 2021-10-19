import React from "react";
import { TrafficLight } from "./lights.jsx";

const Home = () => {
	return (
		<div className="text">
			<h3>My traffic Light with React</h3>
			<TrafficLight />
			<p className="footer">Made by Ricardo Da Silva</p>
		</div>
	);
};

export default Home;
