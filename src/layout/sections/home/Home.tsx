import * as React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import bigFoto from '../../../assets/фотка2.jpg'
import map from '../../../assets/map-by.png'
import { Theme } from '../../../stylesAndThemes/Theme'
import { Container } from '../../../components/Container'

export const Home = () => {
    return(
        <StyledMain id='Home'>
            <Container>
                <FlexWrapper direction={'column'} justify={'space-evenly'} align={'center'}>
                    <span>Hi There</span>
                    <h2>I am Viktor Chizh</h2>
                    <h1>A Front-end Developer</h1>
                </FlexWrapper>
                <img src={bigFoto} alt='' width={275} height={275} className='foto'/>
                <img src={map} alt='' width={315} height={275}/>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    background-color: ${Theme.colors.bgPrimary};
    ${Container} {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items:  space-evenly;
        color: ${Theme.colors.textTitle};

        .foto {
            border-radius: 50%;
            filter: grayscale(65%) hue-rotate(200deg) contrast(85%);
        }
        img {
            object-fit: cover;
            padding: 0.1%;

            }
        span {
            font-size: 1em;
            font-weight:700;
        }
    }
    @media (width<=590px) {
        flex-wrap: wrap-reverse;

        img {
            width: 45vw;
            height: 40vw;
        }
        .foto {
            width: 40vw;
            height: 40vw;
        }
        h1, h2, span {
            font-size: 1.5em;
            font-weight:700;
            letter-spacing: 0.15em;
        }
    }

`