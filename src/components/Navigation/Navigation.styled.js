import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7));
  padding: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;

  &:after {
    content: '';
    display: block;
    height: 2px;
    width: 0;
    background-color: #fff;
    position: absolute;
    bottom: -5px;
    left: 0;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffcc00;
    &:after {
      width: 100%;
    }
  }
`;
