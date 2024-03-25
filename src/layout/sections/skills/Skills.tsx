import React from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../../../components/StyledTitle';
import { AllSkillsAtIcons } from '../../../components/allSkillsAtIcons/AllSkillsAtIcons';
import { Theme } from '../../../stylesAndThemes/Theme';
import { Container } from '../../../components/Container';

type SkillsType = {
    iconId: string
    progress: number
    title: string
}

const skills: SkillsType[] = [
    {iconId: 'html', progress: 90, title: 'HTML'},
    {iconId: 'css', progress: 90, title: 'CSS'},
    {iconId: 'js', progress: 85, title: 'JavaScript'},
    {iconId: 'ts', progress: 80, title: 'TypeScript'},
    {iconId: 'react', progress: 75, title: 'React'},
    {iconId: 'next', progress: 65, title: 'NextJS'},
    {iconId: 'redux', progress: 75, title: 'Redux-Toolkit Redux'},
    {iconId: 'mobx', progress: 65, title: 'MobX'},
    {iconId: 'sass', progress: 90, title: 'SASS'},
    {iconId: 'StyledComponents', progress: 90, title: 'Styled Com-ponents'},
    {iconId: 'bootstrap', progress: 75, title: 'Bootstrap'},
    {iconId: 'materialUI', progress: 85, title: 'MaterialUI'},
    {iconId: 'jest', progress: 75, title: 'Jest'},   
    {iconId: 'storybook', progress: 75, title: 'Storybook'},
    {iconId: 'postman', progress: 75, title: 'Postman'},
    {iconId: 'git', progress: 85, title: 'GIT'},
    {iconId: 'sql', progress: 50, title: 'SQL'},
    {iconId: 'python', progress: 50, title: 'Python'},
    {iconId: 'django', progress: 50, title: 'Django'},
]

export const Skills = () => {
    return(
        <StyledSkills id={'Skills'}>
            <Container>
                <StyledTitle>My Skills</StyledTitle>
                <AllSkillsAtIcons skills={skills}/>
            </Container>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    background-color: ${Theme.colors.bgSecondary};
`