import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text">
			<h1>My traffic Light with React</h1>
			<div className="stick"></div>
			<div className="traffic-light">
				<div className="light red"></div>
				<div className="light yellow"></div>
				<div className="light green"></div>
			</div>
		</div>
	);
};

export default Home;
