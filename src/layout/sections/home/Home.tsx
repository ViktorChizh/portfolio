import * as React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import bigFoto from '../../../assets/фотка2.jpg'
import map from '../../../assets/map-by.png'
import { Theme } from '../../../stylesAndThemes/Theme'
import { Container } from '../../../components/Container'

export const Home = () => {
    return(
        <StyledMain id={'Home'}>
            <Container>
                <FlexWrapper direction={'column'} justify={'space-evenly'} align={'flex-start'}>
                    <span>Hi There</span>
                    <h2>I am Viktor Chizh</h2>
                    <h1>A Front-end Developer</h1>
                </FlexWrapper>
                <Wrapper>
                    <img  className='foto' src={bigFoto} alt='my-foto' width={255} height={255}/>
                </Wrapper>
                <img  className='map' src={map} alt='' width={290} height={255}/>
            </Container>
        </StyledMain>
    )
}
const Wrapper = styled.div`
    position: relative;
    z-index: 0;
    @media (width<=992px) {
        margin: 5% 5% 0 15%;
        ::after {
            content: '';
            position: absolute;
            right: -15%;
            bottom: -20%;
            z-index: -1;
            background-image: url(${map});
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            width: 375px;
            height: 350px;
        }
    }
`

const StyledMain = styled.section`
    background-color: ${Theme.colors.bgPrimary};
    ${Container} {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items:  space-evenly;
        color: ${Theme.colors.textTitle};
        .foto {
            border-radius:5%;
            filter: grayscale(65%) hue-rotate(200deg) contrast(85%);
        }
        img {
            object-fit: cover;
            }
        span {
            font-size: 1em;
            font-weight:700;
        }
    }
    @media (width<=992px) {
        .map{
            display: none;
        }
        h1, h2, span {
        font-size: 1.5em;
        font-weight:700;
        letter-spacing: 0.15em;
    }
    }
` 


