import * as React from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../../components/StyledTitle';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Icon } from '../../components/icon/Icon';


export const Footer = () => {
    return (
        <StyledFooter>
            <StyledTitle>Viktor Chizh</StyledTitle>
            <FlexWrapper justify='center' align='center'>
                <Icon iconId='githubSocial' width='224' height='224' viewport='0 0 66 66' />
                <Icon iconId='telegram' width='224' height='224' viewport='0 0 66 66' />
                <Icon iconId='linkedIn' width='224' height='224' viewport='0 0 66 66' />
                <Icon iconId='gMail' width='224' height='224' viewport='0 0 66 66' />
                <Icon iconId='mail' width='224' height='224' viewport='0 0 66 66' />
            </FlexWrapper>
            <small>© 2023 Viktor Chizh, All Rights Reserved.</small>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 2%;
    box-sizing: border-box;
    background-color: rgba(0,0,0,0.85);
    color: rgb(200, 225, 250);
    div {
        margin-left: 30px;
    }
    svg {
        width: 50px;
        height: 50px;
    }
    p {
        color: rgb(200, 225, 250);
        margin: -0.5% 0 1.5% 0;
    }
    small {
        margin: -0.5% 0 0.5% 1%;
    }
`