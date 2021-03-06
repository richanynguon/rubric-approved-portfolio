import React from "react";
import { SearchResultContainer } from "./styles/searchResultStyle";

import jsInactive from "../../../../../../../../../../assets/utilityBar/projects/jsInactive.png";
import {
	FileDiv,
	SelectionIcon,
} from "../../../selection/styles/selectionStyles";

export default function SearchResults({
	results,
	currentProject,
	setCurrentProject,
}) {
	return (
		<SearchResultContainer>
			{results.length > 0
				? results.map((r) => (
						<FileDiv isOpen={"flex"}>
							<button
								className='FileButton'
								onClick={(e) => {
									setCurrentProject({
										...currentProject,
										current: r,
										tab: currentProject.tab.includes(`${r}`)
											? currentProject.tab
											: [...currentProject.tab, r],
									});
								}}>
								<SelectionIcon className='file' inactive={jsInactive} />
								<p>{r}</p>
							</button>
						</FileDiv>
				  ))
				: ""}
		</SearchResultContainer>
	);
}
