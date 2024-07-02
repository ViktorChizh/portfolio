import  React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from 'components/FlexWrapper'
import bigPhoto from 'assets/Photo.jpg'
import map from 'assets/map-by.png'
import mapBg from 'assets/map-by-bg.png'
import { Theme } from 'stylesAndThemes/Theme'
import { Container } from 'components/Container'
import cv from "assets/CV.pdf"
import resumeEng from "assets/resumeEng.pdf"
import resumeRus from "assets/resumeRus.pdf"
import { Button } from 'components/Button'
import Typewriter from 'typewriter-effect'

export const Home = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const downloadHandler = (failLink: string, failName: string) => {
        if (isMobile) {
            // Открыть файл на мобильных устройствах
            window.location.href = failLink;
        } else {
            // Скачать файл на компьютерах
            const link = document.createElement("a");
            link.href = failLink
            link.setAttribute("download", failName)
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link);
        }
    }

    return (
        <StyledMain id={'Home'}>
            <Container>
                <FlexWrapper direction={'column'} justify={'space-evenly'} align={'flex-start'} gap="10px" width={'max-content'}>
                    <span>Hi there</span>
                    <h2>I am Viktor Chizh</h2>
                    <h1>A Front-end Developer&nbsp;</h1>
                    <FlexWrapper gap='1%'>
                        <Button padding={'3px'} width="49.5%" onClick={() => downloadHandler(resumeRus, 'resumeRus.pdf')}>
                            <b>{isMobile ? 'resume RU' : 'Download resume RU'}</b>
                        </Button>
                        <Button padding={'3px'} width="49.5%" onClick={() => downloadHandler(resumeEng, 'resumeEng.pdf')}>
                            <b>{isMobile ? 'resume En' : 'Download resume En'}</b>
                        </Button>
                    </FlexWrapper>
                    <FlexWrapper align='center' gap="1%">
                        <Button  padding={'3px'} width="49.5%" onClick={() => downloadHandler(cv, 'CV.pdf')}>
                            <b>{isMobile ? 'CV RU' : 'Download CV RU'}</b>
                        </Button>
                        <FlexWrapper width='49.5%' alignContent='center'>
                            <Pointer>&#9754;</Pointer>
                            <Typewriter options={{ strings: ['More about me'], autoStart: true, loop: true, }}/>
                        </FlexWrapper>
                    </FlexWrapper >
                </FlexWrapper>
                <PhotoWrapper>
                    <img className="photo" src={bigPhoto} alt="my-foto" width={255} height={255}/>
                </PhotoWrapper>
                <img className="map" src={map} alt="" width={290} height={255}/>
            </Container>
        </StyledMain >
    )
}
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    @media (width<=992px) {
        margin: 5% 5% 0 15%;
        ::after {
            content: '';
            position: absolute;
            right: -15%;
            bottom: -18%;
            z-index: -1;
            background-image: url(${mapBg});
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            width: 375px;
            height: 350px;
        }
    }
`

const Pointer = styled.p`
    font-size: 1.5em;
    line-height: 16px;
    font-weight: 900;
`

const StyledMain = styled.section`
    background-color: ${Theme.colors.bgPrimary};
    ${Button} {
        font-size: 1em;
        cursor: pointer;
    }
    ${Container} {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        color: ${Theme.colors.textTitle};

        .photo {
            border-radius: 5%;
            filter: grayscale(65%) hue-rotate(200deg) contrast(85%);
        }

        img {
            object-fit: cover;
        }

        span {
            font-size: 1em;
            font-weight: 700;
        }

        .Typewriter {
            font-size: 0.85em;
            font-weight: 900;
        }
    }

    @media (width <= 992px) {
        .map {
            display: none;
        }
        ${Container} {
            span {
                font-size: 1.15em;
            }
        }
        h1, h2, span {
            font-size: 1.5em;
            font-weight: 900;
            letter-spacing: 0.15em;
        }
    }
`