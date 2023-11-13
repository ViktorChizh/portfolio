import * as React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import bigFoto from '../../../assets/bigFoto.png'
import map from '../../../assets/map-by.png'

export const Main = () => {
    return(
        <div id='Home'>
            <StyledMain>
                    <FlexWrapper direction={'column'} justify={'center'} align={'center'}>
                    <span>Hi There</span>
                    <h2>I am Viktor Chizh</h2>
                    <h1>A Front-end Developer</h1>
                </FlexWrapper>
                <img src={bigFoto} alt='' width={250} height={250}/>
                <img src={map} alt='' width={300} height={250}/>
            </StyledMain>
        </div>
    )
}

const StyledMain = styled.section`
    box-sizing: border-box;
    width: 80%;
    margin: 0px auto;
    padding: 43px 10px 10px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: rgb(150, 200, 250);
    @media (width<=430px) {
    width: 100%;
    img {
        width: 45%;
        height: 35%;
    }
    }
`