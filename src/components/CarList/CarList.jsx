import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from 'components/redux/services/operations';
import { CarCard } from 'components/CarCard/CarCard';
import { CarsItem, CarsList, CarsWrapper } from './CarList.styled';
import { useLocation } from 'react-router-dom';
import { selectCars } from 'components/redux/state';

export const CarList = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const onClickLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <CarsWrapper>
      {cars.status === 'loading' && <p>Loading...</p>}
      {cars.status === 'failed' && <p>Error: {cars.error}</p>}
      {cars.status === 'succeeded' && (
        <CarsList>
          {cars.data.map(car => (
            <CarsItem key={car.id}>
              <CarCard carData={car} />
            </CarsItem>
          ))}
        </CarsList>
      )}
      {location.pathname.includes('favorite') || currentPage > 3 ? null : (
        <button
          onClick={onClickLoadMore}
          className="mt-[40px] mb-[10px] mx-auto block text-btn-primary hover:text-btn-hover focus:text-btn-hover font-medium text-[16px] leading-[24px] underline decoration-solid"
          type="button"
        >
          Load More
        </button>
      )}
    </CarsWrapper>
  );
};
