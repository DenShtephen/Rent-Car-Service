import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 24px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  max-width: 540px;
  padding: 20px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const ClosedButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  cursor: pointer;
`;

export const CarImage = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;
  border-radius: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  img:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const CarDetails = styled.div`
  margin-top: 8px;
  display: inline-block;
  text-align: left;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding: 6px;
  font-size: 12px;
  line-height: 18px;

  &:last-child {
    border-right: none;
  }
`;

export const RentalConditionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 35px;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
`;

export const RentalConditionsItem = styled.p`
  margin: 0;
`;

export const RentalButton = styled.a`
  text-decoration: none;
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;
