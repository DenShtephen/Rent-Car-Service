import styled from 'styled-components';

export const CarsWrapper = styled.div`
  margin-top: 50px;
`;

export const WrapperCarInfo = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
`;

export const CarListContainer = styled.ul`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 29px;

  margin-bottom: 20px;
`;

export const LoadMoreButton = styled.button`
  margin-top: 40px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  color: var(--main-button-color);
  font-weight: medium;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  background-color: transparent;
  border: transparent;
  cursor: pointer;

  &:hover {
    color: var(--hover-button-color);
  }

  &:focus {
    color: var(--hover-button-color);
  }
`;
