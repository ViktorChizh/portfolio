import * as React from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../../../components/StyledTitle';
import { AllSkillsAtIcons } from '../../../components/allSkillsAtIcons/AllSkillsAtIcons';


const skills = [
    {iconId: 'html', progress: 90, title: 'HTML'},
    {iconId: 'css', progress: 90, title: 'CSS'},
    {iconId: 'js1', progress: 90, title: 'JavaScript'},
    {iconId: 'ts1', progress: 85, title: 'TypeScript'},
    {iconId: 'react', progress: 75, title: 'React'},
    {iconId: 'redux', progress: 75, title: 'Redux'},
    {iconId: 'next', progress: 65, title: 'NextJS'},  
    {iconId: 'mobx', progress: 65, title: 'MobX'},   
    {iconId: 'vscode', progress: 95, title: 'VScode'},     
    {iconId: 'sass', progress: 90, title: 'SASS'},
    {iconId: 'StyledComponents', progress: 90, title: 'Styled Components'},
    {iconId: 'bootstrap', progress: 75, title: 'Bootstrap'},
    {iconId: 'git', progress: 85, title: 'GIT'},
    {iconId: 'github', progress: 95, title: 'Github'},
    {iconId: 'sql', progress: 50, title: 'SQL'},
    {iconId: 'python', progress: 50, title: 'Python'},
    {iconId: 'django', progress: 50, title: 'Django'},
]

export const Skills = () => {
    return(
        <div id='Skills'>
            <StyledSkills>
                <StyledTitle>My Skills With Progress</StyledTitle>
                <AllSkillsAtIcons skills={skills}/>
            </StyledSkills>
        </div>
    )
}

const StyledSkills = styled.section`
    width: 80%;
    padding: 35px 2% 0 2%;
    margin: 0px auto;
    min-height: 15vh;
    p {
        margin: 0px;
        }
    ul {
        margin: 0;
        padding-top: 2%;
        li {
            padding-bottom: 2%
        }
    }
    box-sizing: border-box;
    background-color: rgb(156, 197, 240);
    @media (width<=430px) {
    width: 100%;
}
`