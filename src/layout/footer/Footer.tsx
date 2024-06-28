import React from 'react';
import styled from 'styled-components';
import { StyledTitle } from 'components/StyledTitle';
import { FlexWrapper } from 'components/FlexWrapper';
import { Icon } from 'components/Icon';
import { Theme } from 'stylesAndThemes/Theme';
import { Container } from 'components/Container';

type FooterBaseType = {
    link: string
    iconId: string
    width?: string
    height?: string
    viewport?: string
}

const footerBase: Array<FooterBaseType> = [
    {link: 'https://github.com/ViktorChizh', iconId: 'githubSocial'},
    {link: 'https://t.me/ViktorChizh', iconId: 'telegram'},
    {link: 'https://www.linkedin.com/in/ViktorChizh/', iconId: 'linkedIn'}
]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <StyledTitle>Viktor Chizh</StyledTitle>
                <FlexWrapper as='ul' justify='space-around' align='center' width='90%'>
                    {footerBase.map((icon: FooterBaseType) => {
                        return (
                            <li key={`${icon.iconId}${icon.link}`}>
                                <a href={icon.link} target='_blanck' rel="noreferrer">
                                    <Icon iconId={icon.iconId} width={icon.width || '336'} height={icon.height || '336'} viewport={icon.viewport || '0 0 40 40'} />
                                </a>
                            </li>
                        )                
                    })}
                </FlexWrapper>
                <small>© 2023 Viktor Chizh, All Rights Reserved.</small>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
color: ${Theme.colors.textPrimary};
background-color: ${Theme.colors.bgDark};
    ${Container} {
        padding: 15px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        svg {
            width: 50px;
            height: 50px;
        }
        ${StyledTitle} {
            color: ${Theme.colors.textPrimary};
        }
    }
    ul li {
        list-style: none;
        margin-bottom: 15px;
    }
`