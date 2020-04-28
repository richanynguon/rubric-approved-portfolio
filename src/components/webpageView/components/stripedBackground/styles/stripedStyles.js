import styled from "styled-components";

export const StripedContainer = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	overflow: hidden;
`;
export const WhiteBackground = styled.div`
	height: 100vh;
	width: 100%;
	position: absolute;
	background-color: #fff;
`;

export const RevealAnimation = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	background-color: #fff;
	z-index: 1;
	@keyframes reveal {
		from {
			top: 0;
		}
		to {
			top: 100%;
		}
	}
	animation-name: reveal;
	animation-duration: 5s;
	animation-fill-mode: forwards;
`;

export const UpperContainer = styled.div`
	width: 100%;
	height: 930px;
	position: absolute;
	top: -464px;
	background-color: #fff;
	left: -296px;
	max-width: 594px;
	overflow: hidden;
	@media (max-width: 580px) {
		left: -15px;
	}
`;
export const LowerContainer = styled.div`
	height: 100%;
	position: absolute;
	top: 365px;
	width: 594px;
	background-color: #fff;
`;

export const DarkBlueTop = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #003f5a;
	border-radius: 10%;
`;
export const WhiteTop = styled.div`
	height: 98%;
	width: 95%;
	border-style: solid;
	background-color: #fff;

	border-radius: 10%;
`;
export const TealTop = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #007a7a;

	border-radius: 10%;
`;
export const CreamTop = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #ebd9c8;

	border-radius: 10%;
`;
export const LightOrangeTop = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #fea02f;

	border-radius: 10%;
`;
export const OrangeTop = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #de6600;
	border-radius: 10%;
`;
export const DarkBlueBottom = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #003f5a;
	border-radius: 10%;
`;
export const WhiteBottom = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #fff;
	margin: 0em 0em 0em 3em;
	border-radius: 10%;
`;
export const TealBottom = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #007a7a;
	border-radius: 10%;
`;
export const CreamBottom = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #ebd9c8;

	border-radius: 10%;
`;
export const LightOrangeBottom = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #fea02f;

	border-radius: 10%;
`;
export const OrangeBottom = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #de6600;

	border-radius: 10%;
`;
