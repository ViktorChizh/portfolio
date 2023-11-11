import * as React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import bigFoto from '../../../assets/bigFoto.png'
import map from '../../../assets/Screenshot_1.png'

export const Main = () => {
    return(
        <StyledMain>
            <FlexWrapper direction={'column'} justify={'center'}>
                <span>Hi There</span>
                <h2>I am Viktor Chizh</h2>
                <h1>A Front-end Developer</h1>
            </FlexWrapper>
            <img src={bigFoto} alt='' width={250} height={250}/>
            <img src={map} alt='' width={300} height={250}/>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    box-sizing: border-box;
    width: 80%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: rgba(159, 205, 245, 0.522);
`