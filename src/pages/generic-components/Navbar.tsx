import React, { useEffect, useRef } from "react";
import "../generic-components/css/Navbar.css";
import logo from "../../assets/svg/logo.svg";
import HoverText from "./HoverText";
import animationData from "../../assets/lotties/navbar-pen.json";
import Lottie from "lottie-web";

const Navbar = (): JSX.Element => {
	// const links = [{ label: "Services", url: "" }];

	const navbarPencil = useRef<HTMLDivElement>(null);

	const links = ["Services", "Projects", "Open Source", "Our blog"];

	// const [animationData, setAnimationData] = React.useState(animationDataWhite);

	const [hovering, setHovering] = React.useState(false);

	useEffect(() => {
		Lottie.destroy();
		Lottie.loadAnimation({
			animationData,
			container:
				navbarPencil.current ??
				document.getElementById("navbar-pencil") ??
				new Element(),
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: "xMidYMid slice",
			},
		});
	}, []);

	return (
		<nav className="navbar">
			<div className="navbar-container within-edges margin-center flex-sb">
				<div className="logo">
					<img src={logo} alt="" />
				</div>
				<div className="primary container">
					{links.map((link, index) => {
						return (
							<a key={index} href="#">
								<HoverText text={link} activeTextColor="#FDC448" />
							</a>
						);
					})}
				</div>
				<div
					className="secondary container"
					onMouseEnter={() => setHovering(true)}
					onMouseLeave={() => setHovering(false)}
				>
					<HoverText
						hovering={hovering}
						id="navbar-contact"
						text="Contact us"
						textColor="#000"
						_textStyle={{ fontWeight: "500" }}
					/>
					<div className="outer">
						<div ref={navbarPencil} id="navbar-pencil"></div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
