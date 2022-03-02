import { Link } from "react-router-dom";
const Welcome = () => {
	return (
		<div className="welcome">
			<div>
				<span>Support</span> <span>Ukraine</span>
			</div>
			<p>
				This is your chance to make up for all of the failed NFT projects you’ve spent money on by investing in helping
				others in need. When you donate to the Stay Strong Ukraine NFT, you help Ukrainians survive another day during
				these difficult times. In return, you will get a unique NFT to certify your support, but more importantly, you
				will help protect families across the country!
			</p>
			<div>
				<Link to="/mint">Donate</Link>
			</div>
		</div>
	);
};

export default Welcome;
