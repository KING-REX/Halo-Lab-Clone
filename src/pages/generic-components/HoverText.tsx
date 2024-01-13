import React, { useEffect, useRef } from "react";
import "../generic-components/css/HoverText.css";

type HoverTextProps = {
	id?: string;
	_height?: number;
	text: string;
	textColor?: string;
	_textStyle?: React.CSSProperties;
	activeTextColor?: string;
	enableHover?: boolean;
	hovering?: boolean;
	onMouseEnter?: () => void;
	containerStyle?: React.CSSProperties;
};

const HoverText = ({
	id,
	_height,
	text,
	textColor,
	_textStyle,
	activeTextColor,
	enableHover,
	hovering,
	onMouseEnter,
	containerStyle,
}: HoverTextProps) => {
	const container = useRef<HTMLDivElement>(null);
	const [height, setHeight] = React.useState(_height ?? 1.1);

	useEffect(() => {
		setHeight(_height ?? 1.1);
	}, [_height]);

	useEffect(() => {
		if (hovering) {
			if (container.current) {
				container.current.style.transform = "translateY(-50%)";
				container.current.style.transition = "all .3s";
			}
		} else {
			if (container.current) {
				container.current.style.transform = "translateY(0%)";
			}
		}
	}, [hovering]);

	const textStyle = {
		fontSize: height + "rem",
		letterSpacing: ".05rem",
		color: textColor ?? "#FFF",
		paddingBottom: ".5rem",
		..._textStyle,
	};

	useEffect(() => {}, []);

	return (
		<div
			id={id}
			className="container o-hidden"
			style={{
				// border: "1px solid white",
				height: height + "rem",
				padding: "0 .5rem",
				...containerStyle,
			}}
			onMouseEnter={() => {}}
		>
			<div
				className="flex-v"
				ref={container}
				// style={{ border: "1px solid red" }}
				onMouseEnter={() => {
					if (container.current) {
						container.current.style.transform = "translateY(-50%)";
						container.current.style.transition = "all .3s";
					}
				}}
				onMouseLeave={() => {
					if (container.current && !hovering) {
						container.current.style.transform = "translateY(0%)";
					}
				}}
			>
				<span style={textStyle}>{text.toUpperCase()}</span>
				<span
					style={{
						...textStyle,
						color: activeTextColor ?? textColor ?? "#FFF",
					}}
				>
					{text.toUpperCase()}
				</span>
			</div>
		</div>
	);
};

export default HoverText;
