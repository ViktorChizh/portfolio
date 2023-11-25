import * as React from 'react';
import styled from 'styled-components';
import { Button } from '../../../components/Button';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { StyledTitle } from '../../../components/StyledTitle';
import { Theme } from '../../../stylesAndThemes/Theme';


export const Contact = () => {
    return (
        <div id='Contact'>
            <StyledContact>
                <StyledTitle>Contact</StyledTitle>
                <ContactForm>
                    <FlexWrapper direction={'column'}  wrap={'wrap'} align={'center'} gap={'16px'}>
                        <ContactField placeholder='Name'></ContactField>
                        <ContactField placeholder='Email' type='email'></ContactField>
                        <ContactField placeholder='Text message' as={'textarea'}></ContactField>
                        <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecoddary} padding={"5px"} borderRadius={'10px'}>SEND MESSAGE</Button>
                    </FlexWrapper>
                </ContactForm>
            </StyledContact>
        </div>
    )
}

const StyledContact = styled.section`
    width: 100%;
    margin: 0 auto;
    padding: 50px 2% 2% 2%;
    box-sizing: border-box;
    background-color: ${Theme.colors.bgPrimary};
    p {
        margin: 0;
    }
`

const ContactForm = styled.form`
    textarea {
        resize: none;
        height: 155px;
        font-family: -apple-, sans-serif;
    }
`

const ContactField = styled.input`
    width: 50%;
    gap: 16px;
    border: none;
    border-radius: 5px;
    margin-top: 16px;
    padding: 5px;
    font-family: -apple-, sans-serif;
    &:focus-visible {
        outline: 2px solid ${Theme.colors.iconPrimary};
    }
    &::placeholder{
        color: ${Theme.colors.iconPrimary};
    }
`