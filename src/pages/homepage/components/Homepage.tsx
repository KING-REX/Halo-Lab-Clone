import React from "react";
import "../css/Homepage.css";
import Navbar from "../../generic-components/Navbar";
import CookiePrompt, { CookieAcceptanceState } from "./CookiePrompt";

const Homepage = () => {
	const [allowCookies, setAllowCookies] =
		React.useState<CookieAcceptanceState>("not-chosen");

	return (
		<div className="App">
			<Navbar />
			<CookiePrompt handleSelect onSelect={(value) => setAllowCookies(value)} />
		</div>
	);
};

export default Homepage;
