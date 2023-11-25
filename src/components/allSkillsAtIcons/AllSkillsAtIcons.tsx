import * as React from 'react';
import { Icon } from '../icon/Icon';
import { SkillCircle } from '../skillCircle/SkillCircle';
import styled from 'styled-components';
import { Theme } from '../../stylesAndThemes/Theme';

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
                                    width='30'
                                    height='30'
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
        gap: 4%;
        list-style: none;
        padding: 0;
        flex-wrap: wrap;
        align-content: space-between;
`

const InfoContainer = styled.div`
    width: 66px;
    height: 66px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    svg{
        margin-top: -15px;
    }
    p{
        margin-top: 30px !important;
        text-align: center;
        color: ${Theme.colors.textTitle};
        font-weight: 700;
        font-size: 10px;
        z-index: 5;
    }
`