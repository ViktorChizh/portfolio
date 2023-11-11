import * as React from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../../../components/StyledTitle';
import { AllSkillsAtIcons } from '../../../components/allSkillsAtIcons/AllSkillsAtIcons';


const skills = [
    {iconId: 'html', progress: 90, title: 'HTML'},
    {iconId: 'css', progress: 85, title: 'CSS'},
    {iconId: 'js1', progress: 75,title: 'JavaScript'},
    {iconId: 'ts1', progress: 75,title: 'TypeScript'},
    {iconId: 'react', progress: 70,title: 'React'},
    {iconId: 'redux', progress: 65,title: 'Redux'},
    {iconId: 'sass', progress: 85,title: 'SASS'},
    {iconId: 'StyledComponents', progress: 85, title: 'StyledComponents'},
    {iconId: 'bootstrap', progress: 55,title: 'Bootstrap'},
    {iconId: 'git', progress: 75,title: 'GIT'},
    {iconId: 'github', progress: 75,title: 'Github'},
    {iconId: 'vscode', progress: 95,title: 'VScode'},
    
]

export const Skills = () => {
    return(
        <StyledSkills>
            <StyledTitle>My Skills With Progress</StyledTitle>
            <AllSkillsAtIcons skills={skills}/>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
width: 80%;
margin: 0 auto;
min-height: 15vh;
padding: 10px;
box-sizing: border-box;
background-color: rgba(135, 186, 240, 0.729);
@media (width<=360px) {
width: 100%;
}
`