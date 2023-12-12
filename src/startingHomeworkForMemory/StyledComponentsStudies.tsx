import React from "react"
import styled, { ThemeProvider, keyframes, createGlobalStyle, css } from "styled-components"


export const Domashka = () => {
    return (
        <ThemeProvider theme={myTheme}>
            <Box>
                <FifstStyled fontSize={'200px'} active btnType={"primary"}>HELLO!</FifstStyled>
            </Box>
            {/* вот так задаются глобольные стили. применять лучше у самой верхней компоненты. сюда поместил,как и остальные комоненты, для удобства удаления этой работы из проеткта */}
            <GlobalStyles />
        </ThemeProvider>
    )
}

const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`

type FifstStyledPropsType = {
    fontSize?: string
    active?: boolean
    btnType?: 'primary' | 'secondary'
}

const FifstStyled = styled.p<FifstStyledPropsType>`
    color: white;
    font-size: ${props => props.fontSize || "50px"};
    font-weight: 700;

    ${props => props.active && css<FifstStyledPropsType>`
        box-shadow: 5px 5px 5px 5px #3ebeca;
    `}

    ${props => props.btnType === "primary" && css<FifstStyledPropsType>`
        color: #108d33;
        background-color: #e08d8d;
        border-radius: 10px;
        &:hover {
        animation: ${SpinStyled} 2s linear infinite;
        }
    `}
`
const SpinStyled = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg)
    }
`
// объявляются в отдельном файле, затем оборачивают проект через ThemeProvider
// после этого, изменив переменную в одном месте - меняем ее значение во всем проекте

const myTheme = {
    colors: {
        primary: "#108d33",
        secondary: "#e08d8d",
        gray: {
            dark: "#252525",
            light: "lightgray"
        }
    },
    media: {
        tablet: "screen and (max-width: 768px)",
        mobile: "screen and (max-width: 567px)"
    }
}

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${myTheme.colors.gray.dark};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`

