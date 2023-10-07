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
