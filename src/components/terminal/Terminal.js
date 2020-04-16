import React from "react";
import styled from "styled-components";
import WindowControls from "./terminalWindow/components/windowControls/WindowControls";
import TerminalInput from "./terminalWindow/components/terminalInput/TerminalInput";
import TerminalWindow from "./terminalWindow/TerminalWindow";

const Window = styled.div`
	position: absolute;
	z-index: 2;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	margin-top: 6em;
	width: 50vw;
	height: 50vh;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);

`;

export default function Terminal() {
	return (
		<Window>
			<TerminalWindow />
      <TerminalInput/>
		</Window>
	);
}
