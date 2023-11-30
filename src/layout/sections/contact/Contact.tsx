import * as React from 'react';
import styled from 'styled-components';
import { Button } from '../../../components/Button';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { StyledTitle } from '../../../components/StyledTitle';
import { Theme } from '../../../stylesAndThemes/Theme';
import { Container } from '../../../components/Container';


export const Contact = () => {
    return (
        <div id='Contact'>
            <StyledContact>
                <Container>
                    <StyledTitle>Contact</StyledTitle>
                    <ContactForm>
                        <FlexWrapper direction={'column'}  wrap={'wrap'} align={'center'} gap={'16px'}>
                            <ContactField placeholder='Name'></ContactField>
                            <ContactField placeholder='Email' type='email'></ContactField>
                            <ContactField placeholder='Text message' as={'textarea'}></ContactField>
                            <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecoddary} padding={"5px"} borderRadius={'10px'}>SEND MESSAGE</Button>
                        </FlexWrapper>
                    </ContactForm>
                </Container>
            </StyledContact>
        </div>
    )
}

const StyledContact = styled.section`
    background-color: ${Theme.colors.bgPrimary};
`

const ContactForm = styled.form`
    textarea {
        resize: none;
        height: 155px;
        font-family: -apple-, sans-serif;
    }
`

const ContactField = styled.input`
    width: 80%;
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