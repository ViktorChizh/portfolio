import * as React from 'react';
import { Icon } from '../icon/Icon';
import { SkillCircle } from '../skillCircle/SkillCircle';
import styled from 'styled-components';

type AllSkillsAtIconsPropsType = {
    skills: {
        iconId: string
        progress: number
        title: string
    }[]
}

export const AllSkillsAtIcons = (props: AllSkillsAtIconsPropsType) => {
    return(
        <SkillContainer>
            {props.skills.map((skill, index: number) => {
                return (
                    <li key={index}>
                        <SkillCircle percent={skill.progress}>
                            <InfoContainer>
                                <Icon iconId={skill.iconId} 
                                    width='50'
                                    height='50'
                                    viewport='0 0 112 112' />
                                <p>{skill.title}</p>
                            </InfoContainer>
                        </SkillCircle>
                    </li>
                )
            })}
        </SkillContainer>
    )
}

const SkillContainer = styled.ul`
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        list-style: none;
        padding: 0;
        flex-wrap: wrap;
        align-content: center;
`

const InfoContainer = styled.div`
    width: 110px;
    height: 110px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    svg{
        margin-top: -25px;
    }
    p{
        margin-top: 55px;
        color: #ff5500;
        font-weight: 700;
        font-size: 14px;
        z-index: 5;
    }
    &:last-child{
        font-size: 10px;
    }
`