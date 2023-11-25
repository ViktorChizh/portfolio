import * as React from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../../../components/StyledTitle';
import { Menu } from '../../../components/menu/Menu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import work1 from '../../../assets/Work1.svg'
import work2 from '../../../assets/Work2.svg'
import { Button } from '../../../components/Button';
import { Theme } from '../../../stylesAndThemes/Theme';
import { Container } from '../../../components/Container';

export const Works = () => {
    return (
        <div id='Works'>
            <StyledWorks>
                <Container>
                    <StyledTitle>My Works</StyledTitle>
                    {/* <Menu items={['All', 'LandingPage', 'React', 'SPA']}  color={`${Theme.colors.textSecondary}`} /> */}
                    <FlexWrapper direction={'row'}  justify={'space-between'} wrap={'wrap'} gap={'1%'} alighContent={'center'}>
                        <Work>
                            <ImgWrapper info={'In developing'}>
                                <img src={work1} alt=''/>
                            </ImgWrapper>
                            <h2>Social Network</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                            <FlexWrapper width={'30%'} justify={'space-evenly'}>
                                <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecoddary} padding={"5px"} borderRadius={'10px'}>Demo</Button>
                                <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecoddary} padding={"5px"} borderRadius={'10px'}>Code</Button>
                            </FlexWrapper>
                        </Work>
                        <Work>
                            <ImgWrapper info={"I`m thinking about that"}>
                                <img src={work2} alt=''/>
                            </ImgWrapper>
                            <h2>ToDoList</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim
                            </p>
                            <FlexWrapper width={'30%'} justify={'space-evenly'}>
                                <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecoddary} padding={"5px"} borderRadius={'10px'}>Demo</Button>
                                <Button bgColor={Theme.colors.iconPrimary} color={Theme.colors.iconSecoddary} padding={"5px"} borderRadius={'10px'}>Code</Button>
                            </FlexWrapper>
                        </Work>
                    </FlexWrapper>
                </Container>
            </StyledWorks>
        </div>
    )
}

const StyledWorks = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1%;
    width: 100%;
    margin: 0 auto;
    padding: 50px 0 1%;
    color: ${Theme.colors.iconPrimary};
    p {
    margin: 0px;
    }
    nav {
        width: calc(100% - 75px);
        justify-content: flex-end;
        font-weight: 600;
    }
    ul {
        margin: 0;
    }
    min-height: 15vh;
    box-sizing: border-box;
    background-color: ${Theme.colors.bgSecondary};
`

const Work = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 2%;
    max-width: 45%;
    min-width: 320px;
    img{
        width: 100%;
    }
    p {
        padding-bottom: 2%;
    }
    button{
        margin-left: 25%;
    }
    @media (width<=675px) {
            max-width: 96%;
            min-width: 340px;
            margin: 0 auto;

            p, h2, img, div {
                width: 100%;
                margin: 0 auto 3%;
            }
        }
`

type ImgWrapperProps = {
    info?: string
}

const ImgWrapper = styled.div<ImgWrapperProps>`
    position: relative;
    z-index: 0;

    &::before {
        content: '${props => props.info}';
        position: absolute;

        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        color: ${Theme.colors.textTitle};
        font-family: 'Permanent Marker', cursive;
        font-size: calc((100vw-430px)/(1200-430)*(16-10)+10px);
        line-height: 1;
        letter-spacing: 0.1em;
        font-weight: 600;
        text-align: center
    }
`