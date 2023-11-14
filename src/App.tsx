import styled from 'styled-components';
import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';
import { Contact } from './layout/sections/contact/Contact';
import { Footer } from './layout/footer/Footer';
import { Quotes } from './layout/sections/quotes/Quotes';
import { Logo } from './components/logo/Logo';

function App() {
    return (
        <StyledApp>
            <Logo/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Quotes/>
            <Contact/>
            <Footer/>
        </StyledApp>
    );
}

export default App;

const StyledApp = styled.main`
    box-sizing: border-box;
    @media (width<=430px) {
    
    }
`
