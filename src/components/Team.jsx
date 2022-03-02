import React from "react";
import teamData from "../teamData";
import { Link } from "react-router-dom";
import "../styles/Team.scss";
const Team = () => {
	return (
		<div className="teamContainer" id="team">
			{teamData.map((person, index) => (
				<Link to={`/${index}`} className="card" key={index}>
					<div className="img" style={{ backgroundImage: `url(${person.image})` }}></div>
					<div className="teammateDetails">
						<div>{person.name}</div>
						<div>{person.about}</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Team;
