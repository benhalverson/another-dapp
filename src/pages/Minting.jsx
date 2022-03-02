import React from "react";
import store from "../redux/store";
import { Provider } from "react-redux";
import Mint from "../Mint";

const Minting = () => {
	return (
		<Provider store={store}>
			<Mint />
		</Provider>
	);
};

export default Minting;
