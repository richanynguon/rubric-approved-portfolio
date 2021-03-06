// Libraries
import styled from "styled-components";

export const PageContainer = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	width: ${(props) => (props.maximized ? "100%" : "80vw")};
	height: ${(props) => (props.maximized ? "100%" : "80vh")};
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
	visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
	overflow: hidden;
`;
