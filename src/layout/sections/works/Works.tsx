import * as React from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../../../components/StyledTitle';
import { Menu } from '../../../components/menu/Menu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import work1 from '../../../assets/Work1.png'
import work2 from '../../../assets/Work2.png'
import { Button } from '../../../components/Button';

export const Works = () => {
    return (
        <div id='Works'>
            <StyledWorks>
                <StyledTitle>My Works</StyledTitle>
                <Menu items={['All', 'landing page', 'React', 'spa']} />
                <FlexWrapper direction={'row'}  justify={'space-between'} wrap={'wrap'} gap={'1%'} alighContent={'center'}>
                    <Work>
                        <img src={work1} alt='' width={400} height={250} />
                        <h3>Social Network</h3>
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
                        <h3>Timer</h3>
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
    width: 80%;
    margin: 0 auto;
    padding: 35px 2% 2% 2%;
    p {
    margin: 0px;
    }
    ul {
        margin: 0;
    }
    min-height: 15vh;
    box-sizing: border-box;
    background-color: rgb(150, 200, 250);
    @media (width<=430px) {
    width: 100%;
    padding: 35px 1% 2% 1%;
    nav{
        display: flex;
        ul {
            width: 100%;
            gap: 5%;
            justify-content: flex-end;
            margin-right: 15%;
        }
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
    min-width: 400px;
    img{
        align-self: center;
    }
    p {
        padding-bottom: 2%;
    }
    @media (width<=540px) {
        img, p, h3{
            width: 80%;
            align-self: flex-start;           
        }
    }
    @media (width<=430px) {
        img, p, h3{
            width: 90%;
            margin-left:1%;
        }
    }
`
