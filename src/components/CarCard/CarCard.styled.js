import styled from 'styled-components';

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 270px;
`;

export const ImageContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
`;

export const CarImage = styled.img`
  width: 274px;
  height: 228px;
  object-fit: cover;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  background: transparent;

  .fill-btn-primary path {
    stroke: transparent;
  }
`;

export const CardInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  font-weight: medium;
  font-size: 16px;
  line-height: 24px;
`;

export const CarDetails = styled.p`
  span {
    color: var(--car-text-color);
  }
`;

export const AdditionalInfo = styled.div`
  margin-top: 8px;
  display: inline-block;
  text-decoration: overlay;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 6px;
  font-size: 12px;
  line-height: 18px;
  color: var(--secondary-text-color);

  &:last-child {
    border-right: 0;
  }
`;
