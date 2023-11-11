import styled from 'styled-components';
import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';

function App() {
    return (
        <StyledApp>
            <Header/>
            <Main/>
            <Skills/>
        </StyledApp>
    );
}

export default App;

const StyledApp = styled.main`
    box-sizing: border-box;
`
