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
                    <StyledTitle>Life Principles In Quotes</StyledTitle>
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
    width: 80%;
    margin: 0 auto;
    padding: 10px 2% 2% 2%;
    min-height: 15vh;
    box-sizing: border-box;
    background-color: rgb(156, 197, 240);
    p {
        margin: 0 0 10px 0;
    }
    svg {
        margin-left: 50px;
        margin-bottom: -70px;
    }
    @media (width<=430px) {
    width: 100%;
    }    
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