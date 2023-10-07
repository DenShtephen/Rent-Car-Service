import axios from 'axios';

const LIMIT_CAR_ON_PAGE = 8;

const instance = axios.create({
  baseURL: 'https://651fc8bf906e276284c37f8d.mockapi.io/api/v1/adverts',
});

export const fetchCars = async (page = 1) => {
  instance.defaults.params = {
    page,
    limit: LIMIT_CAR_ON_PAGE,
  };

  const { data } = await instance.get();
  instance.defaults.params = {};
  return data;
};

export const getCarById = async id => {
  const { data } = await instance.get(`/${id}`);
  return data;
};

export default instance;
