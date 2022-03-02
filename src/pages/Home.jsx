import React from "react";
import Gallery from "../components/Gallery";
import Team from "../components/Team";
import Welcome from "../components/Welcome";

const Home = () => {
	return (
		<div>
			<Welcome />
			<div className="breaker"></div>
			<Gallery />
			<div className="breaker"></div>
			<Team />
		</div>
	);
};

export default Home;
