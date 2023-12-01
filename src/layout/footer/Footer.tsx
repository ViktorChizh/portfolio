import * as React from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../../components/StyledTitle';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Icon } from '../../components/icon/Icon';
import { Theme } from '../../stylesAndThemes/Theme';
import { Container } from '../../components/Container';


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <StyledTitle>Viktor Chizh</StyledTitle>
                <FlexWrapper justify='space-around' align='center' width='90%'>
                    <a href='https://github.com/ViktorChizh'>
                        <Icon iconId='githubSocial' width='336' height='336' viewport='0 0 40 40' />
                    </a>
                    <a href='https://t.me/ViktorChizh'>
                        <Icon iconId='telegram' width='336' height='336' viewport='0 0 40 40' />
                    </a>
                    <a href='https://www.linkedin.com/in/ViktorChizh/'>
                        <Icon iconId='linkedIn' width='336' height='336' viewport='0 0 40 40' />
                    </a>
                    {/* <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKhpnfkgXpqwjSjsLwlwVGvCJPFcjhTmbGMqtxmQKKrdbkZfBxHRVkGvqfxxKcqRZCCvZTh'>
                        <Icon iconId='gMail' width='336' height='336' viewport='0 0 40 40' />
                    </a>
                    <a href="mailto:victor.chizh@mail.ru?&subject=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9">						
                        <Icon iconId='mail' width='336' height='336' viewport='0 0 45 45' />
                    </a> */}
                </FlexWrapper>
                <small>© 2023 Viktor Chizh, All Rights Reserved.</small>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
position: relative;
z-index: 1;
color: ${Theme.colors.textPrimary};
background-color: ${Theme.colors.bgDarck};
    ${Container} {
        padding: 15px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        ${FlexWrapper} {
            padding-bottom: 15px;
        }
        svg {
            width: 50px;
            height: 50px;
        }
        ${StyledTitle} {
            color: ${Theme.colors.textPrimary};
        }
    }
`