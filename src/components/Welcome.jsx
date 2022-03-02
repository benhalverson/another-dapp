import { Link } from "react-router-dom";
const Welcome = () => {
	return (
		<div className="welcome">
			<div>
				<span>Support</span> <span>Ukraine</span>
			</div>
			<p>
				Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat
				veniam occaecat fugiat aliqua.
			</p>
			<div>
				<Link to="/mint">Donate</Link>
			</div>
		</div>
	);
};

export default Welcome;
