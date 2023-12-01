import * as React from 'react';
import styled from 'styled-components';
import { Button } from '../../../components/Button';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { StyledTitle } from '../../../components/StyledTitle';
import { Theme } from '../../../stylesAndThemes/Theme';
import { Container } from '../../../components/Container';
import emailjs from '@emailjs/browser';
import { ElementRef, useRef } from 'react';


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
                <ContactForm ref={form} onSubmit={sendEmail}>
                    <FlexWrapper direction={'column'}  wrap={'wrap'} align={'center'} gap={'16px'}>
                        <ContactField required placeholder='Name' name={'user_name'}></ContactField>
                        <ContactField required placeholder='Email' type='email' name={'subject'}></ContactField>
                        <ContactField required placeholder='Text message' as={'textarea'} name={'message'}></ContactField>
                        <Button type='submit' bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecoddary} padding={"5px"} borderRadius={'10px'}>SEND MESSAGE to my email: victor.chizh@mail.ru</Button>
                    </FlexWrapper>
                </ContactForm>
            </Container>
        </StyledContact>
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