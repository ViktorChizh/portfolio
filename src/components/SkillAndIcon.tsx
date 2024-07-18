import {FlexWrapper} from 'components/FlexWrapper';
import React from 'react';
import { Icon } from 'components/Icon';
import { SkillProgress } from 'components/SkillProgress';
import styled from 'styled-components';
import { Theme } from 'stylesAndThemes/Theme';
import { Roll } from "react-awesome-reveal";

type SkillAndIconProps = {
    skills: {
        iconId: string
        progress: number
        title: string
    }[]
}

export const SkillAndIcon = (props: SkillAndIconProps) => {
    return(
        <SkillAndIconContainer>
            {props.skills.map((skill) => {
                return (
                    <Roll key={skill.iconId} cascade={true} delay={250} duration={2000}>
                        <SkillProgress percent={skill.progress}>
                            <FlexWrapper justify='center' align='center' height='110px'>
                                <Icon iconId={skill.iconId}/>
                                <p>{skill.title}</p>
                            </FlexWrapper>
                        </SkillProgress>
                    </Roll>
                )
            })}
        </SkillAndIconContainer>
    )
}

const SkillAndIconContainer = styled.div`
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
                margin-top: 42px;
                text-align: center;
                color: ${Theme.colors.textTitle};
                font-weight: 700;
                font-size: 14px;
                z-index: 5;
            }
        }
`