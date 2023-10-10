import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CarCard } from '../CarCard/CarCard';
import { getCars } from '../redux/services/operations';
import { selectCars, selectFavorites } from '../redux/state';

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
      {cars.length === 0 && (
        <p className="mt-[20px] text-center text-[18px]">
          {isFavoritePage
            ? "You haven't any cars in your favorites list yet."
            : 'Sorry, we did not find anything with these parameters.'}
        </p>
      )}
      <ul className="flex justify-center flex-row flex-wrap gap-y-[20px] gap-x-[29px]">
        {cars?.map(car => (
          <CarCard key={car.id} carInfo={car} />
        ))}
      </ul>
      {!isFavoritePage && cars.length % 8 === 0 && (
        <button
          onClick={onClickLoadMore}
          className="mt-[40px] mb-[10px] mx-auto block text-btn-primary hover:text-btn-hover focus:text-btn-hover font-medium text-[16px] leading-[24px] underline decoration-solid"
          type="button"
        >
          Load More
        </button>
      )}
    </>
  );
};
