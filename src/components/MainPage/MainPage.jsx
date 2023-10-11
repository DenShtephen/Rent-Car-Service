import { NavLink } from 'react-router-dom';
import { MainSection, MainText } from './MainPage.styled';

export const MainPage = () => {
  return (
    <MainSection>
      <MainText>Car rental service</MainText>
      <NavLink className="link-main-page" to="/catalog">
        Go to catalog
      </NavLink>
    </MainSection>
  );
};
