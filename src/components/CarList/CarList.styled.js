import styled from 'styled-components';

export const CarsWrapper = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;

export const CarsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px auto;
  gap: 30px;
`;

export const CarsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  background-color: transparent;
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
