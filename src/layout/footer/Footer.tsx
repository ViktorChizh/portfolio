import * as React from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../../components/StyledTitle';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Icon } from '../../components/icon/Icon';


export const Footer = () => {
    return (
        <StyledFooter>
            <StyledTitle>Viktor Chizh</StyledTitle>
            <FlexWrapper justify={'center'} align={'center'}>
                <Icon iconId={'githubSocial'} />
                <Icon iconId={'telegram'} />
                <Icon iconId={'linkedIn'} />
                <Icon iconId={'gMail'} />
                <Icon iconId={'mail'} />
            </FlexWrapper>
            <small>© 2023 Viktor Chizh, All Rights Reserved.</small>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding: 2%;
    box-sizing: border-box;
    background-color: rgba(0,0,0,0.85);
    color: aliceblue;
    div {
        margin-left: 30px;
    }
    svg {

        width: 50px;
        height: 50px;
    }
    p {
        color: aliceblue;
        margin: 0 0 2% 0;
    }
    small {
        margin-top: -20px;
    }
    @media (width<=430px) {
    width: 100%;
`