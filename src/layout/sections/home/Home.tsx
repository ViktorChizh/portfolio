import * as React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import bigFoto from '../../../assets/bigFoto.png'
import map from '../../../assets/map-by.png'

export const Home = () => {
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
    width: 100%;
    margin: 0px auto;
    padding: 55px 10px 10px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: rgb(150, 200, 250);
    span {
        font-size: 1em;
        font-weight:700;
    }
    @media (width<=430px) {
        img {
            width: 45%;
            height: 35%;
        }
        h1, h2, span {
            font-size: 1.25em;
            font-weight:700;
        }
    }
`