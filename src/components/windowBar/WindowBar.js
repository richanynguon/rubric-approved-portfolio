// Libraries
import React, { useContext} from "react";

// Styles
import {
	Bar,
	Title,
	WindowOptions,
	CircleButtons,
	ButtonText,
	MaxWindow,
	ExitButton,
} from "./styles/windowBarStyle";

// Context
import { WindowsContext } from "../../modules/windowContext";
import MobileControls from "./components/mobileControls/MobileControls";
import ControlModal from "./components/controlModal/ControlModal";

export default function WindowControls(props) {
	const { statefulWindows, setWindowState } = useContext(WindowsContext);
	const { title, type, tabbedTitle } = props;

	return (
		<Bar
			onDoubleClick={(e) => {
				e.stopPropagation();
				const addCounter = statefulWindows.zCounter++;
				setWindowState({
					...statefulWindows,
					zCounter: addCounter,
					[type]: {
						...[type],
						maximized: !statefulWindows[type].maximized,
						minimized: false,
						closed: false,
						z: addCounter,
					},
				});
			}}>
			<Title>{title}</Title>
			<ControlModal
				statefulWindows={statefulWindows}
				setWindowState={setWindowState}
				type={type}
				tabbedTitle={tabbedTitle}
			/>
			<MobileControls state={statefulWindows} setState={setWindowState} />
			<WindowOptions>
				<button
					onClick={(e) => {
						e.stopPropagation();
						setWindowState({
							...statefulWindows,
							tabbedWindows: [
								...statefulWindows.tabbedWindows,
								{ tabbedTitle, type },
							],
							[type]: {
								...[type],
								minimized: true,
								maximized: false,
								closed: false,
							},
						});
					}}>
					<CircleButtons>
						<ButtonText>&#8722;</ButtonText>
					</CircleButtons>
				</button>
				<button
					onClick={(e) => {
						e.stopPropagation();
						const addCounter = statefulWindows.zCounter++;
						setWindowState({
							...statefulWindows,
							zCounter: addCounter,
							[type]: {
								...[type],
								maximized: !statefulWindows[type].maximized,
								minimized: false,
								closed: false,
								z: addCounter,
							},
						});
					}}>
					<CircleButtons>
						<MaxWindow> </MaxWindow>
					</CircleButtons>
				</button>
				<button
					onClick={(e) => {
						e.stopPropagation();
						if (type === "code" || type === "terminal") {
							setWindowState({
								...statefulWindows,
								[type]: {
									...[type],
									maximized: false,
									minimized: false,
									closed: true,
									clear: true,
								},
							});
						} else {
							setWindowState({
								...statefulWindows,
								[type]: {
									...[type],
									maximized: false,
									minimized: false,
									closed: true,
								},
							});
						}
					}}>
					<ExitButton>
						<ButtonText>&#215;</ButtonText>
					</ExitButton>
				</button>
			</WindowOptions>
		</Bar>
	);
}
