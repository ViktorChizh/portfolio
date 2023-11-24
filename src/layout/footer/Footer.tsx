import * as React from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../../components/StyledTitle';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Icon } from '../../components/icon/Icon';
import { Theme } from '../../stylesAndThemes/Theme';


export const Footer = () => {
    return (
        <StyledFooter>
            <StyledTitle>Viktor Chizh</StyledTitle>
            <FlexWrapper justify='center' align='center'>
                <a href='https://github.com/ViktorChizh'>
                    <Icon iconId='githubSocial' width='336' height='336' viewport='0 0 40 40' />
                </a>
                <a href='https://t.me/ViktorChizh'>
                    <Icon iconId='telegram' width='336' height='336' viewport='0 0 40 40' />
                </a>
                <a href='https://www.linkedin.com/in/%D0%B2%D0%B8%D0%BA%D1%82%D0%BE%D1%80-%D1%87%D0%B8%D0%B6-9873a625a/'>
                    <Icon iconId='linkedIn' width='336' height='336' viewport='0 0 40 40' />
                </a>
                <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKhpnfkgXpqwjSjsLwlwVGvCJPFcjhTmbGMqtxmQKKrdbkZfBxHRVkGvqfxxKcqRZCCvZTh'>
                    <Icon iconId='gMail' width='336' height='336' viewport='0 0 40 40' />
                </a>
                <a href="mailto:victor.chizh@mail.ru?&subject=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9">						
                    <Icon iconId='mail' width='336' height='336' viewport='0 0 45 45' />
                </a>
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
    background-color: ${Theme.colors.bgDarck};
    div {
        width: 80%;
        justify-content: space-around;
    }
    svg {
        width: 50px;
        height: 50px;
    }
    p {
        color: ${Theme.colors.textPrimary};
        margin: 1.5% 0;
    }
    small {
        margin: 0 0 1%;
        color: ${Theme.colors.textPrimary};
    }
`