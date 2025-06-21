import { Link } from "react-scroll";
import styled from "styled-components";

type MenuProps = {
  items: string[];
  color?: string;
  changeFilterValue?: (value: string) => void;
  selectedItem?: string;
};

export const Menu = ({
  items,
  color,
  changeFilterValue,
  selectedItem,
}: MenuProps) => {
  return (
    <StyledMenu>
      {items.map((item: string) => (
        <NavLink
          key={item}
          to={item}
          smooth={true}
          spy={true}
          color={color}
          delay={0.5}
          onClick={() =>
            changeFilterValue ? changeFilterValue(item) : () => {}
          }
          className={selectedItem === item ? "active" : ""}
        >
          {item}
        </NavLink>
      ))}
    </StyledMenu>
  );
};

type StyledMenuProps = {
  color?: string;
};

const StyledMenu = styled.nav`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 2%;
  padding: 0 5px;
`;
const NavLink = styled(Link)<StyledMenuProps>`
  color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
  }
  &.active {
    border-bottom: 3px solid;
  }
`;
