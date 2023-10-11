import { useEffect } from 'react';

import {
  Overlay,
  ModalContent,
  ClosedButton,
  CarImage,
  CarDetails,
  RentalButton,
  CarDetailsModal,
  ModalCarDescr,
  ModalCarAcsess,
  ModalCarDescrAcsess,
  BackgroundWrapper,
  BackgroundElem,
} from './ModalCars.styled';
import { ReactComponent as CloseButton } from '../../imgs/svgs/x.svg';
import { createPortal } from 'react-dom';

const modal = document.querySelector('#modal');

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

  return createPortal(
    <Overlay onClick={onBackdropClick}>
      <ModalContent>
        <ClosedButton onClick={() => closeModal(null)} type="button">
          <CloseButton fill="#111" width={24} height={24} />
        </ClosedButton>
        <CarImage>
          <img src={car.img} alt={`${car.make} ${car.model}`} />
        </CarImage>
        <CarDetailsModal>
          {car.make}
          <span className="text-btn-primary">&nbsp;{car.model}&nbsp;</span>
          {car.year}
        </CarDetailsModal>
        <CarDetails>
          <span>{car.address}</span>
          <span>Id: {car.id}</span>
          <span>Year: {car.year}</span>
          <span>Type: {car.type}</span>
          <span>Fuel Consumption: {car.fuelConsumption}</span>
          <span>Engine Size: {car.engineSize}</span>
        </CarDetails>
        <ModalCarDescr>{car.description}</ModalCarDescr>
        <ModalCarAcsess>Accessories and functionalities:</ModalCarAcsess>
        <ModalCarDescrAcsess>
          {car.accessories
            .slice(1, 3)
            .concat(car.functionalities.slice(1, 3))
            .map(el => (
              <span key={el}>{el}</span>
            ))}
        </ModalCarDescrAcsess>
        <ModalCarAcsess>Rental Conditions:</ModalCarAcsess>
        <BackgroundWrapper>
          {car.rentalConditions.split('\n').map((element, index) => {
            const matches = element.match(/(\d+)/);

            const modifiedElement = matches
              ? element.replace(
                  matches[0],
                  `<span style="color: #3470ff">${matches[0]}</span>`
                )
              : element;

            return (
              <BackgroundElem
                key={index}
                dangerouslySetInnerHTML={{ __html: modifiedElement }}
              />
            );
          })}
          <BackgroundElem>
            Mileage:
            <span>{car.mileage}</span>
          </BackgroundElem>
          <BackgroundElem>
            Price:
            <span>{car.rentalPrice}</span>
          </BackgroundElem>
        </BackgroundWrapper>
        <RentalButton href="tel:+380730000000">Rental Car</RentalButton>
      </ModalContent>
    </Overlay>,
    modal
  );
};
