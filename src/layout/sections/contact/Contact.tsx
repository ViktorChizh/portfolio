import * as React from 'react';
import styled from 'styled-components';
import { Button } from '../../../components/Button';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { StyledTitle } from '../../../components/StyledTitle';


export const Contact = () => {
    return (
        <StyledContact>
            <StyledTitle>Contact</StyledTitle>
            <ContactForm>
                <FlexWrapper direction={'column'}  wrap={'wrap'} align={'center'}>
                    <ContactField placeholder='Name'></ContactField>
                    <ContactField placeholder='Email' type='email'></ContactField>
                    <ContactField as={'textarea'} placeholder='Text message'> </ContactField>
                    <Button>SEND MESSAGE</Button>
                </FlexWrapper>
            </ContactForm>
        </StyledContact>
    )
}

const StyledContact = styled.section`
    width: 80%;
    margin: 0 auto;
    padding: 2%;
    min-height: 15vh;
    box-sizing: border-box;
    background-color: rgba(159, 205, 245, 0.522);
    p {
        margin: 0;
    }
    @media (width<=430px) {
    width: 100%;
    }
`

const ContactForm = styled.form`
    
`

const ContactField = styled.input`
    width: 50%;
    margin: 1%;
    
`