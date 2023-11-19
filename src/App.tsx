import styled from 'styled-components';
import './App.css';
import { Header } from './layout/header/Header';
import { Home } from './layout/sections/home/Home';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';
import { Contact } from './layout/sections/contact/Contact';
import { Footer } from './layout/footer/Footer';
import { Quotes } from './layout/sections/quotes/Quotes';

function App() {
    return (
        <StyledApp>
            <Header/>
            <Home/>
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
    max-width: 1200px;
    margin: 0 auto;
`
