import React, { useState, useRef } from "react";
import { UtilityIconContainer } from "./styles/utilityIconStyles";
import CodeToolTip from "../../../codeToolTip/CodeToolTip";
import { FunctionContainer } from "../../../codeToolTip/styles/toolTipStyles";

export default function UtilityIcon(props) {
	const { message, src, alt, title } = props;

	const [mousePos, setMousePos] = useState({ x: null, y: null });
	const [visible, setVisible] = useState(false);

	const currRef = useRef(null);
	const tipRef = useRef(null);

	const { x, y } = mousePos;

	const onHover = (e) => {
		const { offsetLeft, offsetTop, offsetParent } = currRef.current;
		const tipWidth = tipRef.current.lastChild.offsetWidth;
		const { offsetHeight, offsetWidth } = offsetParent;
		const icon = e.target.getBoundingClientRect();
		const x =
			offsetLeft + e.pageX - icon.left < offsetWidth - tipWidth
				? offsetLeft + e.pageX - icon.left
				: offsetWidth - tipWidth;
		const y =
			offsetTop + e.pageY - icon.top - 15 < offsetHeight - 50
				? offsetTop + e.pageY - icon.top - 15
				: offsetHeight - 50;
		setMousePos({ x, y });
	};

	return (
		<FunctionContainer ref={tipRef}>
			<UtilityIconContainer
				ref={currRef}
				onMouseOver={(e) => {
					e.stopPropagation();
					onHover(e);
					setVisible(true);
				}}
				onMouseLeave={(e) => {
					e.stopPropagation();
					setVisible(false);
				}}>
				{src ? <img src={src} alt={alt} /> : ""}
				{title ? title : ""}
			</UtilityIconContainer>
			<CodeToolTip message={message} x={x} y={y} visible={visible} />
		</FunctionContainer>
	);
}