import * as React from 'react';
import styled from 'styled-components';
import { Button } from 'components/Button';
import { FlexWrapper } from 'components/FlexWrapper';
import { StyledTitle } from 'components/StyledTitle';
import { Theme } from 'stylesAndThemes/Theme';
import { Container } from 'components/Container';
import emailjs from '@emailjs/browser';
import { ElementRef, useRef } from 'react';
import imgMail from 'assets/Mail.svg'


export const Contact = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs.sendForm('service_27684p9', 'template_kqvtytz', form.current, 'eA-6YF_G8xqeGBSE4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };
    return (
        <StyledContact id={'Contact'}>
            <Container>
                <StyledTitle>Contact</StyledTitle>
                <FlexWrapper direction={'row'} align={'center'} gap={'16px'}>
                    <img src={imgMail} alt='' />
                    <ContactForm ref={form} onSubmit={sendEmail}>
                        <FlexWrapper direction={'column'} wrap={'wrap'} align={'center'} gap={'16px'}>
                            <ContactField required placeholder='Name' name={'user_name'}></ContactField>
                            <ContactField required placeholder='Email' type='email' name={'subject'}></ContactField>
                            <ContactField required placeholder='Text message' as='textarea' name={'message'}></ContactField>
                            <Button type='submit' bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecondary} padding={"5px 8px"} borderRadius={'10px'} border={`5px double ${Theme.colors.bgSecondary}`} >SEND MESSAGE to my email: victor.chizh@mail.ru</Button>
                        </FlexWrapper>
                    </ContactForm>
                    <img src={imgMail} alt='' />
                </FlexWrapper>
            </Container>
        </StyledContact>
    )
}

const StyledContact = styled.section`
    background-color: ${Theme.colors.bgPrimary};
    ${FlexWrapper} {
        width: 100%;
        padding: 0 5%;
        & img {
            width: 30%;
            max-width: 380px;
        }
        @media screen and (width<=992px) {
            padding: 0;
            img {
                display: none;
            }
        }
    }
`

const ContactForm = styled.form`
    width: 65%;
    textarea {
        resize: none;
        height: 155px;
        font-family: -apple-, sans-serif;
    }
    ${FlexWrapper} {
        width: 100%;
        margin: 0 auto;
    }
    @media screen and (width<=992px) {
        width: 100%;
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