import {FlexWrapper} from 'components/FlexWrapper';
import * as React from 'react';
import { Icon } from '../icon/Icon';
import { SkillCircle } from '../skillCircle/SkillCircle';
import styled from 'styled-components';
import { Theme } from 'stylesAndThemes/Theme';
import { Roll } from "react-awesome-reveal";

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
            {props.skills.map((skill) => {
                return (
                    <Roll key={skill.iconId} cascade={true} delay={250} duration={2000}>
                        <SkillCircle percent={skill.progress}>
                            <FlexWrapper justify='center' align='center' width='100%' height='110px'>
                                <Icon iconId={skill.iconId}/>
                                <p>{skill.title}</p>
                            </FlexWrapper>
                        </SkillCircle>
                    </Roll>
                )
            })}
        </SkillContainer>
    )
}

const SkillContainer = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        gap: 4%;
        ${FlexWrapper} {
            svg {
                margin-top: -36px;
            }
            p {
                margin-top: 36px;
                text-align: center;
                color: ${Theme.colors.textTitle};
                font-weight: 700;
                font-size: 14px;
                z-index: 5;
            }
        }
`