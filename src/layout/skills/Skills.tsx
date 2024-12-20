import React from "react";
import styled from "styled-components";
import { StyledTitle } from "components/StyledTitle";
import { SkillAndIcon } from "components/SkillAndIcon";
import { Theme } from "stylesAndThemes/Theme";
import { Container } from "components/Container";

type Skill = {
  iconId: string;
  progress: number;
  title: string;
};

const skills: Skill[] = [
  { iconId: "html", progress: 90, title: "HTML" },
  { iconId: "css", progress: 90, title: "C S S, SCSS, SASS " },
  { iconId: "js", progress: 85, title: "JavaScript" },
  { iconId: "ts", progress: 80, title: "TypeScript" },
  { iconId: "react", progress: 75, title: "React" },
  { iconId: "next", progress: 65, title: "NextJS" },
  { iconId: "vue", progress: 55, title: "VueJS" },
  { iconId: "redux", progress: 75, title: "Redux Toolkit, RTK-query, Redux" },
  { iconId: "saga", progress: 70, title: "Redux-Saga" },
  { iconId: "mobx", progress: 65, title: "MobX" },
  { iconId: "zustand", progress: 60, title: "Zustand" },
  { iconId: "tailwind", progress: 65, title: "TailWind" },
  { iconId: "StyledComponents", progress: 90, title: "Styled Com-ponents" },
  { iconId: "bootstrap", progress: 75, title: "Bootstrap" },
  { iconId: "materialUI", progress: 85, title: "MaterialUI" },
  { iconId: "jest", progress: 75, title: "Jest" },
  { iconId: "storybook", progress: 75, title: "Storybook" },
  { iconId: "git", progress: 85, title: "GIT" },
];

export const Skills = () => {
  return (
    <StyledSkills id={"Skills"}>
      <Container>
        <StyledTitle>My Skills</StyledTitle>
        <SkillAndIcon skills={skills} />
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: ${Theme.colors.bgSecondary};
`;
