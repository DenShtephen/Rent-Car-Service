import { ButtonStyled } from './Button.styled';

export const Button = ({ type = 'button', text, onClick }) => {
  return (
    <ButtonStyled onClick={onClick} type={type}>
      {text}
    </ButtonStyled>
  );
};
