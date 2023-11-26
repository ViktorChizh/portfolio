import * as React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

type BurgerMenuPropsType = {
    title?: string
}

export const BurgerMenu = (props:BurgerMenuPropsType) => {
    return (
        <StyledBurgerMenu>
            <Icon iconId='code' width='50' height='50' viewport='0 0 50 50' title={props.title}/>
        </StyledBurgerMenu>
    )
}

const StyledBurgerMenu = styled.div`
    display: flex;
    margin: 0;
    justify-content: center;
    align-items: center;
    :hover {
            cursor: pointer;
        }
`