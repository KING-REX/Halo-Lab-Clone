import React from "react";
import "../css/CookiePrompt.css";
import HoverText from "../../generic-components/HoverText";

export type CookieAcceptanceState = "not-chosen" | "accepted" | "denied";

type CookiePromptProps = {
	isActive?: boolean;
	onSelect?: (value: CookieAcceptanceState) => void;
};

const CookieFooter = ({ isActive, onSelect }: CookiePromptProps) => {
	const [denyHovering, setDenyHovering] = React.useState(false);
	const [acceptHovering, setAcceptHovering] = React.useState(false);
	return (
		<div
			className={`cookie-prompt${
				isActive === true || isActive === undefined ? " active" : ""
			}
			`}
		>
			<div className="primary">
				This website uses cookies to support performance and website features.
				Read <a href="#">Privacy Policy</a>.
			</div>
			<div className="secondary">
				<a
					href="#"
					className="deny"
					onClick={(event: React.MouseEvent) => {
						event.preventDefault();
						onSelect && onSelect("denied");
					}}
					onMouseEnter={() => setDenyHovering(true)}
					onMouseLeave={() => setDenyHovering(false)}
				>
					<HoverText
						hovering={denyHovering}
						text="Deny"
						_textStyle={{ fontWeight: "500" }}
					/>
				</a>
				<a
					href="#"
					className="accept"
					onClick={(event: React.MouseEvent) => {
						event.preventDefault();
						onSelect && onSelect("accepted");
					}}
					onMouseEnter={() => setAcceptHovering(true)}
					onMouseLeave={() => setAcceptHovering(false)}
				>
					<HoverText
						hovering={acceptHovering}
						text="Accept"
						_textStyle={{ fontWeight: "500" }}
					/>
				</a>
			</div>
		</div>
	);
};

const CookiePrompt = ({
	handleSelect,
	onSelect,
}: {
	handleSelect?: boolean;
} & CookiePromptProps) => {
	const [cookieStillExists, setCookieStillExists] = React.useState(true);
	const [isVisible, setIsVisible] = React.useState(true);
	return handleSelect ? (
		cookieStillExists ? (
			<CookieFooter
				onSelect={(value) => {
					onSelect && onSelect(value);
					setIsVisible(false);
					setTimeout(() => setCookieStillExists(false), 500);
				}}
				isActive={isVisible}
			/>
		) : (
			<div></div>
		)
	) : (
		<CookieFooter onSelect={onSelect} />
	);
};
export default CookiePrompt;
