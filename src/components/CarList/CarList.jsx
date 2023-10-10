import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CarCard } from '../CarCard/CarCard';
import { getCars } from '../redux/services/operations';
import { selectCars, selectFavorites } from '../redux/state';
import {
  CarListContainer,
  LoadMoreButton,
  WrapperCarInfo,
} from './CarList.styled';

export const CarList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isFavoritePage = location.pathname.includes('favorite');
  const [currentPage, setCurrentPage] = useState(1);
  const cars = useSelector(isFavoritePage ? selectFavorites : selectCars);

  useEffect(() => {
    if (!isFavoritePage) {
      dispatch(getCars(currentPage));
    }
  }, [dispatch, currentPage, isFavoritePage]);

  const onClickLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };
  return (
    <>
      {(!cars || cars.length === 0) && (
        <WrapperCarInfo>
          {isFavoritePage
            ? "You haven't any car in your favorite list yet."
            : 'Sorry, we did not find anything with these parameters.'}
        </WrapperCarInfo>
      )}
      <CarListContainer>
        {cars?.map(car => (
          <CarCard key={car.id} carInfo={car} />
        ))}
      </CarListContainer>
      {!isFavoritePage && cars && cars.length % 8 === 0 && (
        <LoadMoreButton onClick={onClickLoadMore} type="button">
          Load More
        </LoadMoreButton>
      )}
    </>
  );
};
