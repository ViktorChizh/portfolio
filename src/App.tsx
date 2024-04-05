import styled, { ThemeProvider } from 'styled-components'
import { Header } from 'layout/header/Header'
import { Home } from 'layout/sections/home/Home'
import { Skills } from 'layout/sections/skills/Skills'
import { Works } from 'layout/sections/works/Works'
import { Contact } from 'layout/sections/contact/Contact'
import { Footer } from 'layout/footer/Footer'
import { Quotes } from 'layout/sections/quotes/Quotes'
import { Theme } from 'stylesAndThemes/Theme'
import { GlobalStyles } from 'stylesAndThemes/Globalstyles'
import { Particle } from 'components/particle/Particle'

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <StyledApp>
                <Particle />
                <Header/>
                <Home/>
                <Skills/>
                <Quotes/>
                <Works/>
                <Contact/>
                <Footer/>
            </StyledApp>
            <GlobalStyles/>
        </ThemeProvider>

    );
}

export default App;

const StyledApp = styled.main`
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
`
