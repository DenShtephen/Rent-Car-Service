import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 274px;
  padding: 12px 99px;
  align-items: center;
  border-radius: 12px;

  background-color: var(--main-button-color);
  border: none;

  &:hover {
    background-color: var(--hover-button-color);
  }

  &:focus {
    background-color: var(--hover-button-color);
  }

  color: var(--button-text-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;

  margin-top: 28px;
`;
