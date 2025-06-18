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
  { iconId: "js", progress: 80, title: "JavaScript" },
  { iconId: "ts", progress: 80, title: "TypeScript" },
  { iconId: "react", progress: 80, title: "React" },
  { iconId: "next", progress: 75, title: "NextJS" },
  { iconId: "vue", progress: 80, title: "VueJS" },
  { iconId: "redux", progress: 70, title: "Redux Toolkit, RTK-query, Redux" },
  { iconId: "saga", progress: 60, title: "Redux-Saga" },
  { iconId: "zustand", progress: 70, title: "Zustand" },
  { iconId: "mobx", progress: 60, title: "MobX" },
  { iconId: "tailwind", progress: 80, title: "TailWind" },
  { iconId: "StyledComponents", progress: 90, title: "Styled Com-ponents" },
  { iconId: "bootstrap", progress: 70, title: "Bootstrap" },
  { iconId: "materialUI", progress: 80, title: "MaterialUI" },
  { iconId: "jest", progress: 70, title: "Jest" },
  { iconId: "storybook", progress: 70, title: "Storybook" },
  { iconId: "git", progress: 80, title: "GIT" },
  { iconId: "go", progress: 70, title: "Go" },
  { iconId: "sql", progress: 60, title: "SQL" },
  { iconId: "PostgreSQL", progress: 70, title: "PostgreSQL" },
  { iconId: "mongo", progress: 50, title: "MongoDB" },
  { iconId: "docker", progress: 50, title: "Docker" },
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
