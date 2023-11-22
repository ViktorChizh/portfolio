import * as React from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../../../components/StyledTitle';
import { Menu } from '../../../components/menu/Menu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import work1 from '../../../assets/Work1.png'
import work2 from '../../../assets/Work2.png'
import { Button } from '../../../components/Button';
import { Theme } from '../../../stylesAndThemes/Theme';

export const Works = () => {
    return (
        <div id='Works'>
            <StyledWorks>
                <StyledTitle>My Works</StyledTitle>
                <Menu items={['All', 'LandingPage', 'React', 'SPA']}  color={`${Theme.colors.textSkill}`} />
                <FlexWrapper direction={'row'}  justify={'space-between'} wrap={'wrap'} gap={'1%'} alighContent={'center'}>
                    <Work>
                        <img src={work1} alt='' />
                        <h2>Social Network</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                        <FlexWrapper width={'30%'} justify={'space-evenly'}>
                            <Button>Demo</Button>
                            <Button>Code</Button>
                        </FlexWrapper>
                    </Work>
                    <Work>
                        <img src={work2} alt='' width={400} height={250} />
                        <h2>Timer</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim
                        </p>
                        <FlexWrapper width={'30%'} justify={'space-evenly'}>
                            <Button>Demo</Button>
                            <Button>Code</Button>
                        </FlexWrapper>
                    </Work>
                </FlexWrapper>
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
    padding: 50px 2% 2% 2%;
    color: ${Theme.colors.iconPrimary};
    p {
    margin: 0px;
    }
    nav {
        width: calc(90% - 75px);
        justify-content: flex-end;
    }
    ul {
        margin: 0;
    }
    min-height: 15vh;
    box-sizing: border-box;
    background-color: ${Theme.colors.bgSecondary};
    @media (width<=675px) {
        nav {
        width: 90%;
        justify-content: flex-end;
    }
    }
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
        align-self: center;
        width: 90%;
        height: 250px;
        object-fit: cover;
    }
    p {
        padding-bottom: 2%;
    }
    @media (width<=675px) {
            max-width: 96%;
            min-width: 340px;
            margin: 0 auto;
            img {
                height: 175px;
            }
            p, h2, img, div {
                width: 100%;
                margin: 0 auto 3%;
            }
        }
`