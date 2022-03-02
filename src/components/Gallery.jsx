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
					More than 800,000 civilians have fled Ukraine due to the war, according to the UN. The number of people
					fleeing the country is expected to reach 4,000,000 civilians. <br />
					<br />
					Families are being broken apart because the fighting-age men must stay to fight for Ukraine. Women and
					children are the most vulnerable in a family and are forced to flee with little to no resources. <br />
					<br />
					Would you like to help? 100% of the funds raised are sent to official wallets of the Ukrainian government and
					relevant organizations which may be verified on the Ethereum blockchain.
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
