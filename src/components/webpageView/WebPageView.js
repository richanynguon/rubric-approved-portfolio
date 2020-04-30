// Libraries
import React, { useContext } from "react";

// Components
import WindowBar from "../windowBar/WindowBar";
import AddressBar from "./components/addressBar/AddressBar";

// Styles
import MainContentWebPage from "./components/mainContentWebPage/MainContentWebPage";
import { PageContainer} from "./styles/webPageStyle";

// Context
import WindowsContext from "../../modules/windowContext";

export default function WebPageView(props) {
	const { statefulWindows, setWindowState } = useContext(WindowsContext);
	return (
		<PageContainer
			hidden={
				statefulWindows.homepage.minimized || statefulWindows.homepage.closed
			}
			maximized={statefulWindows.homepage.maximized}
			active={statefulWindows.homepage.active}
			onClick={() => {
				setWindowState({
					...statefulWindows,
					homepage: {
						...statefulWindows.homepage,
						active: true,
					},
					terminal: { ...statefulWindows.terminal, active: false },
					code: { ...statefulWindows.code, active: false },
				});
			}}>
			<WindowBar
				title={"Richany Nguon - Firefox Developer Edition"}
				type={"homepage"}
				tabbedTitle={"Firefox"}
			/>
			<AddressBar />
			<MainContentWebPage />
		</PageContainer>
	);
}