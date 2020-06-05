// Libraries
import React, { useContext, useState } from "react";

// Context
import { WindowsContext } from "../../../../../../../../../../modules/windowContext";

// Components
import Selection from "../../../selection/Selection";

// Assets
import folderClosedActive from "../../../../../../../../../../assets/utilityBar/projects/folderClosedActive.png";
import folderClosedInactive from "../../../../../../../../../../assets/utilityBar/projects/folderClosedInactive.png";
import folderClosedHover from "../../../../../../../../../../assets/utilityBar/projects/folderClosedHover.png";

import folderOpenInactive from "../../../../../../../../../../assets/utilityBar/projects/folderOpenInactive.png";
import folderOpenHover from "../../../../../../../../../../assets/utilityBar/projects/folderOpenHover.png";
import folderOpenActive from "../../../../../../../../../../assets/utilityBar/projects/folderOpenActive.png";

import downActive from "../../../../../../../../../../assets/utilityBar/projects/downActive.png";
import downInactive from "../../../../../../../../../../assets/utilityBar/projects/downInactive.png";
import downHover from "../../../../../../../../../../assets/utilityBar/projects/downHover.png";

import sideActive from "../../../../../../../../../../assets/utilityBar/projects/sideActive.png";
import sideInactive from "../../../../../../../../../../assets/utilityBar/projects/sideInactive.png";
import sideHover from "../../../../../../../../../../assets/utilityBar/projects/sideHover.png";

import jsActive from "../../../../../../../../../../assets/utilityBar/projects/jsActive.png";
import jsInactive from "../../../../../../../../../../assets/utilityBar/projects/jsInactive.png";
import jsHover from "../../../../../../../../../../assets/utilityBar/projects/jsHover.png";

export default function Portfolio() {
	const [isOpen, setIsOpen] = useState(false);
	const { statefulWindows } = useContext(WindowsContext);
	return (
		<div>
			<Selection
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				actionInactive={sideInactive}
				actionHover={sideHover}
				actionActive={sideActive}
				actionDownInactive={downInactive}
				actionDownHover={downHover}
				actionDownActive={downActive}
				iconInactive={folderClosedInactive}
				iconHover={folderClosedHover}
				iconActive={folderClosedActive}
				openIconInactive={folderOpenInactive}
				openIconActive={folderOpenActive}
				openIconHover={folderOpenHover}
				title={"src"}
			/>
			<div isOpen={isOpen}>
				{statefulWindows.projects.map((project) => (
					<Selection
						actionInactive={sideInactive}
						actionHover={sideHover}
						actionActive={sideActive}
						actionDownInactive={downInactive}
						actionDownHover={downHover}
						actionDownActive={downActive}
						iconInactive={folderClosedInactive}
						iconHover={folderClosedHover}
						iconActive={folderClosedActive}
						openIconInactive={folderOpenInactive}
						openIconActive={folderOpenActive}
						openIconHover={folderOpenHover}
						onClickFunc={console.log("bish")}
						title={project.name}
						innerTitle={`${project.name.split(" ").join("")}.js`}
						innerIconInactive={jsInactive}
						innerIconActive={jsActive}
						innerIconHover={jsHover}
					/>
				))}
			</div>
		</div>
	);
}