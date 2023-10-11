import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  addCarToFavorites,
  removeCarFromFavorites,
} from '../redux/services/Favorite/favorite';
import { ModalCars } from '../ModalCars/ModalCars';
import { selectFavorites } from '../redux/state';
import { Button } from 'components/Button/Button';
import {
  AdditionalInfo,
  CarDetails,
  CarImage,
  CardContainer,
  CardInfoContainer,
  FavoriteButton,
  HeartIcon,
  ImageContainer,
} from './CarCard.styled';

export const CarCard = ({ carInfo }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [modalCar, setModalCar] = useState(null);

  const isInFavorites = id => {
    return favorites.map(el => el.id).includes(id);
  };

  const onLearnMoreClick = car => {
    console.log(123);
    setModalCar(car);
  };

  const onAddClick = car => {
    if (isInFavorites(car.id)) return dispatch(removeCarFromFavorites(car.id));
    else dispatch(addCarToFavorites(car));
  };

  return (
    <>
      {modalCar ? (
        <ModalCars car={modalCar} closeModal={() => setModalCar(null)} />
      ) : null}
      <CardContainer>
        <ImageContainer>
          <CarImage
            src={carInfo.img}
            alt={`${carInfo.make} ${carInfo.model}`}
            loading="lazy"
          />
          <FavoriteButton onClick={() => onAddClick(carInfo)} type="button">
            <HeartIcon
              className={isInFavorites(carInfo.id) ? 'favorite' : 'no-favorite'}
            />
          </FavoriteButton>
        </ImageContainer>
        <CardInfoContainer>
          <CarDetails>
            {carInfo.make}&nbsp;
            <span className="car-text-color">{carInfo.model}</span>,&nbsp;
            {carInfo.year}
          </CarDetails>
          <p>{carInfo.rentalPrice}</p>
        </CardInfoContainer>
        <div className="mt-[8px]">
          <AdditionalInfo>{carInfo.address}</AdditionalInfo>
          <AdditionalInfo>{carInfo.rentalCompany}</AdditionalInfo>
          {carInfo.accessories.map(el => (
            <AdditionalInfo className="last:border-r-0" key={el}>
              {el}
            </AdditionalInfo>
          ))}
        </div>
        <Button
          onClick={() => onLearnMoreClick(carInfo)}
          type="button"
          text={'Learn More'}
        />
      </CardContainer>
    </>
  );
};
