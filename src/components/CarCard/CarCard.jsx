import { Button } from 'components/Button/Button';
import { CarCardWrapper } from './CarCard.styled';
// import {
//   CarCardWrapper,
//   CarImage,
//   CarName,
//   CarNameWrapper,
//   CarPrice,
// } from './CarCard.styled';

export const CarCard = ({ carData }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = carData;

  return (
    <div>
      <CarCardWrapper src={img} alt={`${make} ${model}`} />
      <div>
        <p>{`${year} ${make} ${model}`}</p>
        <p>{rentalPrice}</p>
      </div>
      <p>{description}</p>
      <p>Type: {type}</p>
      <p>Fuel Consumption: {fuelConsumption} L/100km</p>
      <p>Engine Size: {engineSize}</p>
      <p>Accessories: {accessories}</p>
      <p>Functionalities: {functionalities}</p>
      <p>Rental Company: {rentalCompany}</p>
      <p>Address: {address}</p>
      <p>Mileage: {mileage} km</p>
      <Button type="submit" text="Learn more" />
    </div>
  );
};
