import  React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from 'components/FlexWrapper'
import bigPhoto from 'assets/фотка2.jpg'
import map from 'assets/map-by.png'
import mapBg from 'assets/map-by-bg.png'
import { Theme } from 'stylesAndThemes/Theme'
import { Container } from 'components/Container'
import cv from "assets/CV.png"
import resume from "assets/Resume.pdf"
import { Button } from 'components/Button'
import Typewriter from 'typewriter-effect'

export const Home = () => {
    const downloadResume = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // Открыть файл на мобильных устройствах
            window.location.href = resume;
        } else {
            // Скачать файл на компьютерах
            const link = document.createElement("a");
            link.href = resume
            link.setAttribute("download", "Resume.pdf")
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link);
        }
    }

    const downloadCV = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // Открыть файл на мобильных устройствах
            window.location.href = cv;
        } else {
            // Скачать файл на компьютерах
            const link = document.createElement("a");
            link.href = cv
            link.setAttribute("download", "CV.jpg")
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link);
        }
    }
    return (
        <StyledMain id={'Home'}>
            <Container>
                <FlexWrapper direction={'column'} justify={'space-evenly'} align={'flex-start'} gap='10px'>
                    <span>Hi There</span>
                    <h2>I am Viktor Chizh</h2>
                    <h1>A Front-end Developer</h1>
                    <Button bgColor={Theme.colors.iconPrimary}
                            color={Theme.colors.iconSecondary}
                            padding={"10px"}
                            borderRadius={'10px'}
                            border={`5px double ${Theme.colors.bgSecondary}`}
                            width='100%'
                            onClick={downloadResume}>Download resume</Button>
                    <FlexWrapper align={'center'}>
                        <Button bgColor={Theme.colors.iconPrimary}
                                color={Theme.colors.iconSecondary}
                                padding={"10px"}
                                style={{marginRight:'10px'}}
                                borderRadius={'10px'}
                                border={`5px double ${Theme.colors.bgSecondary}`}
                                onClick={downloadCV}>Download CV</Button>
                        {/*<p className='pointer'>&nbsp;&#9754;</p>*/}
                        <Typewriter options={{
                            strings: [' More about me'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </FlexWrapper>
                </FlexWrapper>
                <Wrapper>
                    <img className='photo' src={bigPhoto} alt='my-foto' width={255} height={255} />
                </Wrapper>
                <img className='map' src={map} alt='' width={290} height={255} />
            </Container>
        </StyledMain >
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
            background-image: url(${mapBg});
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

        .pointer {
            font-size: 40px;
            font-weight: bolder;
        }

        .Typewriter {
            font-size: 16px;
            font-weight: 900;
        }

        @media (width <= 992px) {
            .Typewriter {
                font-size: 16px;
            }
        }
    }

    @media (width <= 992px) {
        ${Button} {
            position: relative;
            z-index: 2;
            margin: 2% 0 -3%;
        }

        .map {
            display: none;
        }

        h1, h2, span {
            font-size: 1.5em;
            font-weight: 700;
            letter-spacing: 0.15em;
        }
    }
`