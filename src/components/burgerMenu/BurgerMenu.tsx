import * as React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

type BurgerMenuPropsType = {
    title?: string
}

export const BurgerMenu = (props:BurgerMenuPropsType) => {
    return (
        <StyledBurgerMenu>
            <Icon iconId='code' width='50' height='50' viewport='0 0 50 50' fill='white' title={props.title}/>
        </StyledBurgerMenu>
    )
}

const StyledBurgerMenu = styled.div`
    width: 10%;
    max-height: 42px;
    display: flex;
    margin: 0;
    justify-content: flex-end;
    align-items: center;
    padding-right: 2%;
`