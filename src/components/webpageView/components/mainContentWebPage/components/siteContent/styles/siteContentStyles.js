// Libraries
import styled from "styled-components";

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	z-index: 1;
	position: relative;
	margin: 0 auto;
	font-family: "Montserrat", sans-serif;
	header {
		margin-top: 1em;
		display: flex;
		align-items: center;
		height: 40em;
		justify-content: center;
		margin-bottom: 1em;
		@media (max-width: 725px) {
			text-align: center;
			h3 {
				margin: 0px 5px 0px 5px;
			}
		}
	}
	section {
		padding: 5px;
		margin-bottom: 1em;
		@media (max-width: 725px) {
			background-color: rgba(255, 255, 255, 0.78);
		}
	}

	footer {
		background-color: rgba(255, 255, 255, 0.78);
	}
	@media (max-width: 1130px) {
		margin-right: 0;
	}
	@media (max-width: 725px) {
		width: 80%;
		margin: 0 auto;
	}
`;

export const HeaderContainer = styled.div`
	position: relative;
	display: flex;
	height: 80vh;
	align-items: center;
`;

export const AboutContent = styled.div`
	display: flex;
	flex-direction: column;
`;

export const MainContent = styled.div`
	margin: 0 auto;
	width: 75%;
	background-color: rgba(255, 255, 255, 0.79);
	padding: 10px;
	box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.02);
	@media (max-width: 725px) {
		width: 100%;
		border-radius: 10px;
	}
`;

export const NameTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	justify-content: center;
	@media (max-width: 1130px) {
		margin: 0 auto;
		background-color: rgba(255, 255, 255, 0.79);
		border-radius: 0% 20% 0% 20%;
		height: 90%;
		width: 80%;
	}
	@media (max-width: 725px) {
		width: 100%;
	}
`;

export const H1 = styled.h1`
	font-size: 4em;
	font-weight: 700;
	line-height: 1.5em;
	@media (max-width: 1130px) {
		font-size: 3em;
		line-height: 1.25em;
	}
`;

export const H2 = styled.h2`
	font-size: 2.5em;
	font-weight: 700;
	line-height: 1.5em;
	@media (max-width: 725px) {
		font-size: 2.5em;
		line-height: 1.25em;
	}
`;

export const H3 = styled.h3`
	line-height: 1.25em;
	font-size: 1em;
	font-weight: ${(props) => (props.bold ? 700 : 400)};
	@media (max-width: 725px) {
		font-size: 0.9em;
		line-height: 1.25em;
	}
`;

export const H4 = styled.h4`
	line-height: 2em;
	font-size: 0.8em;
	font-weight: ${(props) => (props.bold ? 700 : 400)};
`;

export const H6 = styled.h6`
	line-height: 1.25em;
	font-size: 0.7em;
`;

export const P = styled.p``;

export const GradientSplitter = styled.div`
	margin-bottom: 1em;
	width: 100%;
	height: 1px;
	background: rgb(222, 102, 0);
	background: linear-gradient(
		90deg,
		rgba(222, 102, 0, 1) 0%,
		rgba(254, 160, 47, 1) 15%,
		rgba(235, 217, 200, 1) 50%,
		rgba(0, 122, 122, 1) 85%,
		rgba(0, 63, 90, 1) 100%
	);
`;
