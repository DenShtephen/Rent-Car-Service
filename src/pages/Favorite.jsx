import { CarList } from 'components/CarList/CarList';
import { resetCarsStore } from 'components/redux/services/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Favorite = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCarsStore());
  });

  return (
    <>
      <CarList isFavorite={true} />
    </>
  );
};

export default Favorite;
