import styled from 'styled-components';

export const CarImage = styled.img`
  display: grid;
  width: 274px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
`;

// export const CarNameWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// export const CarName = styled.h3`
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 1.5;
//   color: var(--main-text-color);
// `;

// export const CarPrice = styled.p`
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 24px;
//   color: var(--main-text-color);
// `;

export const CarCardWrapper = styled.img`
  position: relative;
  margin-bottom: 14px;
  border-radius: 14px;
  text-align: center;
  overflow: hidden;

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
