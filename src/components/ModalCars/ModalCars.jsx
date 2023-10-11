import React, { useEffect } from 'react';
import { ReactComponent as CloseButton } from '../../imgs/svgs/Close.svg';
import {
  Overlay,
  ModalContent,
  ClosedButton,
  CarImage,
  CarDetails,
  RentalConditionsWrapper,
  RentalConditionsItem,
  RentalButton,
} from './ModalCars.styled';
import { addressFormat } from '../../helpers/address';

export const ModalCars = ({ car, closeModal }) => {
  useEffect(() => {
    const handleKeyEsc = event => {
      if (event.key === 'Escape' || event.target === event.currentTarget) {
        closeModal(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyEsc);

    return () => {
      window.removeEventListener('keydown', handleKeyEsc);
      document.body.style.overflow = 'visible';
    };
  }, [closeModal]);

  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal(null);
    }
  };

  return (
    <Overlay onClick={onBackdropClick}>
      <ModalContent>
        <ClosedButton onClick={() => closeModal(null)} type="button">
          <CloseButton fill="#111" width={24} height={24} />
        </ClosedButton>
        <CarImage>
          <img src={car.img} alt={`${car.make} ${car.model}`} />
        </CarImage>
        <p className="mt-[12px] mb-[8px] text-[18px] leading-[24px] font-medium">
          {car.make}
          <span className="text-btn-primary">&nbsp;{car.model}&nbsp;</span>
          {car.year}
        </p>
        <CarDetails>
          <div>
            <span>{addressFormat(car.address).join('')}</span>
            <span>Id: {car.id}</span>
            <span>Year: {car.year}</span>
            <span>Type: {car.type}</span>
            <span>Fuel Consumption: {car.fuelConsumption}</span>
            <span className="last:border-r-0">
              Engine Size: {car.engineSize}
            </span>
          </div>
        </CarDetails>
        <p className="text-[14px] mt-[14px] leading-[20px]">
          {car.description}
        </p>
        <p className="mt-[18px] text-[14px] font-medium leading-[20px]">
          Accessories and functionalities:
        </p>
        <CarDetails>
          {car.accessories
            .slice(1, 3)
            .concat(car.functionalities.slice(1, 3))
            .map(el => (
              <span className="last:border-r-0" key={el}>
                {el}
              </span>
            ))}
        </CarDetails>
        <p className="mt-[18px] text-[14px] font-medium leading-[20px]">
          Rental Conditions:
        </p>
        <RentalConditionsWrapper>
          {car.rentalConditions.split('\n').map((el, index) => (
            <RentalConditionsItem key={index}>{el}</RentalConditionsItem>
          ))}
          <RentalConditionsItem>
            Mileage: <span>{car.mileage}</span>
          </RentalConditionsItem>
          <RentalConditionsItem>
            Price: <span>{car.rentalPrice}</span>
          </RentalConditionsItem>
        </RentalConditionsWrapper>
        <RentalButton href="tel:+380730000000">Rental Car</RentalButton>
      </ModalContent>
    </Overlay>
  );
};
