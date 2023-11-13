import * as React from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../../../components/StyledTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';

export const Quotes = () => {
    return (
        <div id='Quotes'>
            <StyledQuotes>
                <FlexWrapper direction={'column'} align={'center'}>
                    <StyledTitle>My Life Principles In Quotes</StyledTitle>
                    <Icon iconId='quotes' />
                    <Slider>
                        <cite>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </cite>
                        <strong>@ivan ivanow</strong>
                    </Slider>
                    <Paginator>
                        {"сюды PAGINATOR туды"}
                    </Paginator>
                </FlexWrapper>
            </StyledQuotes>
        </div>
    )
}

const StyledQuotes = styled.section`
    width: 100%;
    margin: 0 auto;
    padding: 2%;
    min-height: 15vh;
    box-sizing: border-box;
    background-color: rgb(200, 225, 250);
    svg {
        margin-left: 50px;
        margin-bottom: -70px;
    }
    /* @media (width<=430px) {
    width: 100%;
        p{
            z-index: 10;
        }
    }     */
`

const Slider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cite {
        text-align: center;
    }
    strong {
        margin: 10px 0;
    }
`

const Paginator = styled.div`
    
`