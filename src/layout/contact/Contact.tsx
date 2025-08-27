import { FormEvent } from "react";
import styled from "styled-components";
import { Button } from "components/Button";
import { FlexWrapper } from "components/FlexWrapper";
import { StyledTitle } from "components/StyledTitle";
import { Theme } from "stylesAndThemes/Theme";
import { Container } from "components/Container";
import emailjs from "@emailjs/browser";
import { ElementRef, useRef } from "react";
import imgMail from "assets/Mail.svg";

export const Contact = () => {
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs.sendForm(
      "service_27684p9",
      "template_kqvtytz",
      form.current,
      "eA-6YF_G8xqeGBSE4"
    );
    e.currentTarget.reset();
  };

  return (
    <StyledContact id={"Контакты"}>
      <Container>
        <StyledTitle>Контакты</StyledTitle>
        <FlexWrapper align={"center"} gap={"15px"}>
          <img src={imgMail} alt="" />
          <ContactForm ref={form} onSubmit={sendEmail}>
            <ContactField
              required
              placeholder="Имя"
              name={"user_name"}
            ></ContactField>
            <ContactField
              required
              placeholder="Email"
              type="email"
              name={"subject"}
            ></ContactField>
            <ContactField
              required
              placeholder="Текст сообщения"
              as="textarea"
              name={"message"}
            ></ContactField>
            <Button type="submit" padding={"5px 8px"}>
              Отправить сообщение на мой email: victor.chizh@mail.ru
            </Button>
          </ContactForm>
          <img src={imgMail} alt="" />
        </FlexWrapper>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  background-color: ${Theme.colors.bgPrimary};
  @media screen and (width<=992px) {
    img {
      display: none;
    }
  }
`;
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  width: 100%;
  margin: 0 auto;
  textarea {
    resize: none;
    height: calc(3rem + 10px);
    font-family: -apple-, sans-serif;
  }
`;
const ContactField = styled.input`
  width: 80%;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-family: -apple-, sans-serif;
  &:focus-visible {
    outline: 2px solid ${Theme.colors.iconPrimary};
  }
  &::placeholder {
    color: ${Theme.colors.iconPrimary};
  }
`;
