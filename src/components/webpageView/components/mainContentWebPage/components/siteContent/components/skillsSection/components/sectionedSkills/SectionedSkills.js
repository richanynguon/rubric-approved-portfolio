import React from "react";
import { SkillsSection, SkillList } from "./styles/sectionedSkillsStyles";
import { H3 } from "../../../../styles/siteContentStyles";

import ItemSkill from "./components/itemSkill/ItemSkill";

export default function SectionedSkills(props) {
	const { maximized, title, items } = props;
	return (
		<SkillsSection maximized={maximized}>
			<H3 bold>{title}</H3>
			<SkillList>
				{items.map((item) => (
					<ItemSkill item={item} key={item} />
				))}
			</SkillList>
		</SkillsSection>
	);
}
