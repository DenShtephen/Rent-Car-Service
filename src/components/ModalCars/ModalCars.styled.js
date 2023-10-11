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
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 24px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  max-width: 540px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ClosedButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  cursor: pointer;
  background: transparent;
  border: none;
`;

export const CarImage = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;
  border-radius: 12px;

  margin-bottom: 10px;

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
  margin-bottom: 14px;
  span {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 8px;
    display: inline-block;
    text-align: left;

    padding: 0 6px;
    font-size: 12px;
    line-height: 1.2;
    color: var(--secondary-text-color);
  }

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

export const CarDetailsModal = styled.p`
  span {
    color: var(--car-text-color);
  }

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;

export const ModalCarDescr = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  color: var(--main-text-color);

  margin-bottom: 24px;
`;

export const ModalCarAcsess = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  color: var(--main-text-color);

  margin-bottom: 8px;
`;

export const ModalCarDescrAcsess = styled.div`
  margin-bottom: 14px;
  span {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 8px;
    text-align: left;

    padding: 0 6px;
    font-size: 12px;
    line-height: 1.2;
    color: var(--secondary-text-color);
  }

  &:last-child {
    border-right: none;
  }
`;

export const BackgroundWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const BackgroundElem = styled.p`
  border-radius: 35px;
  background: #f9f9f9;
  padding: 7px 14px;
  color: #363535;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;

  span {
    color: var(--main-button-color);
    font-size: 12px;
    margin-left: 5px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.24px;
  }
`;
