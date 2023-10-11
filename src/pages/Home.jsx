import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetCarsStore } from 'components/redux/services/operations';
import { MainPage } from '../components/MainPage/MainPage';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCarsStore());
  }, [dispatch]);

  return (
    <>
      <MainPage />
    </>
  );
};

export default Home;
