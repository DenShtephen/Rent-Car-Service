import { NavWrapper, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavWrapper>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/catalog">Catalog</StyledNavLink>
      <StyledNavLink to="/favorites">Favorites</StyledNavLink>
    </NavWrapper>
  );
};
