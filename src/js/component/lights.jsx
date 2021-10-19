import React, { useState } from "react";
export const TrafficLight = () => {
	const [color, setColor] = useState("");
	return (
		<div className="container">
			<div className="stick"></div>
			<div className="traffic-light">
				<div
					className={
						"light red" + (color === "red" ? " glow red" : "")
					}
					onClick={() => setColor("red")}></div>
				<div
					className={
						"light yellow" + (color === "yellow" ? " glow" : "")
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						"light green" + (color === "green" ? " glow" : "")
					}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
};
