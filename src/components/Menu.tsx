import * as React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components'

type MenuPropsType = {
    items: string[]
    color?: string
    changeFilterValue?: (value: string) => void
    selectedItem?:string
}

export const Menu: React.FC<MenuPropsType> = ({items, color, changeFilterValue, selectedItem}) => {
    return (
        <StyledMenu>
                {items.map((item: string) =>
                  <NavLink key={item}  to={item}  smooth={true} spy={true}  color={color}  delay={0.5}
                           onClick={() => changeFilterValue ? changeFilterValue(item) : ()=>{}}
                           className={ selectedItem===item ? 'active' : '' }>
                    {item}
                  </NavLink>
                )}
        </StyledMenu>
    )
}

type StyledMenuPropsType = {
    color?: string
}

const StyledMenu = styled.nav`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 2%;
    padding: 0 5px;
`
const NavLink = styled(Link)<StyledMenuPropsType>`
    color: ${props => props.color};
    &:hover {
        cursor: pointer;
    } 
    &.active {
        border-bottom: 3px solid;
    }
`