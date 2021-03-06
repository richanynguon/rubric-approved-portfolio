// Libraries
import React from "react";

// Styles
import { AboutContainer } from "./styles/aboutStyles";
import { H3 } from "../../styles/siteContentStyles";

// Components
import ContactBlock from "../contactBlock/ContactBlock";

export default function AboutSection(props) {
	return (
		<AboutContainer>
			<ContactBlock state={props.state} fixed={false} />
			<br />
			<H3>
				Following a dream and a mission. Exploring interests in art,
				cognitive science/philosophies, sound energy, social impact, and
				financial tech. Always up to work with software
				dealing with alternative energies and social impact.
			</H3>
			<br />
			<img
				className='codeSnippet'
				src={props.src}
				maximized={props.state.maximized.toString()}
				alt='codesnippet'
			/>
		</AboutContainer>
	);
}
