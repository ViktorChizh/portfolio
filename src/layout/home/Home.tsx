import  React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from 'components/FlexWrapper'
import bigPhoto from 'assets/фотка2.jpg'
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
    const downloadHandler = (failLink: string, failName: string) => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
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
                <FlexWrapper direction={'column'} justify={'space-evenly'} align={'flex-start'} gap="10px">
                    <span>Hi there</span>
                    <h2>I am Viktor Chizh</h2>
                    <h1>A Front-end Developer&nbsp;</h1>
                    <FlexWrapper width='100%' gap='1%'>
                        <Button bgColor={Theme.colors.iconPrimary}
                                color={Theme.colors.iconSecondary}
                                padding={'3px'}
                                borderRadius={'7px'}
                                border={`3px double ${Theme.colors.bgSecondary}`}
                                width="49.5%"
                                onClick={() => downloadHandler(resumeRus, 'resumeRus.pdf')}>Download resume RU</Button>
                        <Button bgColor={Theme.colors.iconPrimary}
                                color={Theme.colors.iconSecondary}
                                padding={'3px'}
                                borderRadius={'7px'}
                                border={`3px double ${Theme.colors.bgSecondary}`}
                                width="49.5%"
                                onClick={() => downloadHandler(resumeEng, 'resumeEng.pdf')}>Download resume EN</Button>
                    </FlexWrapper>
                    <FlexWrapper width='100%' align='center' gap="1%">
                        <Button bgColor={Theme.colors.iconPrimary}
                                color={Theme.colors.iconSecondary}
                                padding={'3px'}
                                borderRadius={'7px'}
                                border={`3px double ${Theme.colors.bgSecondary}`}
                                width="49.5%"
                                onClick={() => downloadHandler(cv, 'CV.pdf')}>Download CV RU</Button>
                        <FlexWrapper width='49.5%' alignContent='center'>
                            <Pointer>&#9754;</Pointer>
                            <Typewriter options={{
                                strings: ['More about me'],
                                autoStart: true,
                                loop: true,
                            }}
                            />
                        </FlexWrapper>
                    </FlexWrapper >
                </FlexWrapper>
                <Wrapper>
                    <img className="photo" src={bigPhoto} alt="my-foto" width={255} height={255}/>
                </Wrapper>
                <img className="map" src={map} alt="" width={290} height={255}/>
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
    font-size: 25px;
    line-height: 16px;
    font-weight: 900;
`

const StyledMain = styled.section`
    background-color: ${Theme.colors.bgPrimary};
    ${Button} {
        font-size: 12px;
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
            font-size: 14px;
            font-weight: 900;
        }
    }

    @media (width <= 992px) {
        .map {
            display: none;
        }

        h1, h2, span {
            font-size: 1.5em;
            font-weight: 900;
            letter-spacing: 0.15em;
        }
    }
`