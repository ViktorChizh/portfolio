import React from "react"
import styled, { ThemeProvider, createGlobalStyle, css } from "styled-components"
import '@fontsource/inter'
import sand from './images/Sand.png'

export const Card = () => {
    return (
        <ThemeProvider theme={myTheme}>
            <div style={{ fontFamily: 'Inter, sans-serif' }}>
                <Container>
                    <div>
                        <CardName>Card</CardName>
                        <Box>
                            <Sand src={sand} />
                            <Title>Headline</Title>
                            <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                            <ButtonContainer>
                                <Button btnType={"primary"}>See more</Button>
                                <Button btnType={"secondary"}>Save</Button>
                            </ButtonContainer>
                        </Box>
                    </div>
                </Container>
            </div>
            <GlobalStyles />
        </ThemeProvider>
    )
}
const myTheme = {
    button: {
        backgroundColor: "#4E71FE",
        border: "0.125rem solid #4E71FE",
        borderRadius: "0.3125rem",
        text: {
            color: {
                primary: "#FFFFFF",
                secondary: "#4E71FE"
            },
            font: {
                fontFamily: "Inter",
                fontSize: "0.625rem",
                weight: 700,
                lineHeight: "1.25rem"
            }
        }
    },
    title: {
        color: "#000000",
        fontFamily: "Inter",
        fontSize: "1rem",
        weight: 700,
        lineHeight: "1.2rem",
    },
    text: {
        color: "#ABB3BA",
        fontFamily: "Inter",
        fontSize: "0.75rem",
        weight: 500,
        lineHeight: "1.25rem"
    }
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;

`
const CardName = styled.div`
    ${myTheme.text};
`
const Box = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
width: 18.75rem;
height: 21.875rem;
background-color: #fff;
border-radius:0.9375rem;
`
const Sand = styled.img`
    width: 17.5rem;
    height: 10.625rem;
    margin: 0.625rem;
`
const Title = styled.h1`
    ${myTheme.title}
    margin: 0.625rem 1.25rem;
`
const Text = styled.p`
        ${myTheme.text};
        margin: 0.625rem 1.25rem 0;
`
const ButtonContainer = styled.div`
    flex-direction: row;
    justify-content: flex-start;
    margin: 1.15rem 0.5rem ;
`
type ButtonPropsType = {
    btnType: 'primary' | 'secondary'
}
const Button = styled.button<ButtonPropsType>`
    margin: 0 0 0 0.75rem;
    width: 5.375rem;
    height: 1.875rem;
    font-family: ${myTheme.button.text.font};
    ${props => props.btnType === "primary" && css<ButtonPropsType>`
        border: none;
        border-radius: ${myTheme.button.borderRadius};
        color: ${myTheme.button.text.color.primary};
        background-color: ${myTheme.button.backgroundColor};
    `}
    ${props => props.btnType === "secondary" && css<ButtonPropsType>`
        border: ${myTheme.button.border};
        border-radius: ${myTheme.button.borderRadius};
        color: ${myTheme.button.text.color.secondary};
        background-color: transparent;
    `}
    &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }
`
const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #e5e5e5;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`