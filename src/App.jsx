import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mint from "./Mint";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/mint" element={<Mint />} />
				<Route path="/*" element={<Error />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
