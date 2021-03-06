import React from "react";
import { ItemContainer } from "./styles/listItemStyles";

export default function ListItem(props) {
	const { state, setState, cb, active, actionTitle, shortCut } = props;
	return (
		<ItemContainer
			active={active}
			onClick={(e) => {
				e.stopPropagation()
				cb ? cb(state, setState) : console.log(cb);
			}}>
			<div>{actionTitle}</div>
			<div>{shortCut}</div>
		</ItemContainer>
	);
}
