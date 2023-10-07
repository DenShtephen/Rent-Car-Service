import { ButtonStyled } from './Button.styled';

export const Button = ({ type = 'button', text }) => {
  return <ButtonStyled type={type}>{text}</ButtonStyled>;
};
