import React from "react";
import ukraineStatue from "../images/andrii-leonov-unsplash.jpg";
import ukraineBuilding from "../images/valeriy-borzov-unsplash.jpg";
import tweet from "../images/tweet.png";
import combat from "../images/zelenskiy.png";

const Gallery = () => {
	return (
		<div className="cells">
			<span>
				<img src={ukraineStatue} alt="Statue" />
			</span>
			<span id="about">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem veritatis amet nam nulla porro maiores
					itaque inventore optio provident, saepe repellendus quasi autem a nemo velit similique minus sit magni?
				</p>
			</span>
			<span className="doubleCell">
				<div>
					<img src={tweet} alt="tweet" />
				</div>
				<div>
					<img src={combat} alt="Building" />
				</div>
			</span>
			<span>
				<img src={ukraineBuilding} alt="Building" />
			</span>
		</div>
	);
};

export default Gallery;
