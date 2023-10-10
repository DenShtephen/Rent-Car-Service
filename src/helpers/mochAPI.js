import axios from 'axios';

const LIMIT_CAR_ON_PAGE = 8;

const instance = axios.create({
  baseURL: 'https://651fc8bf906e276284c37f8d.mockapi.io',
});

export const fetchCars = async (page = 1) => {
  instance.defaults.params = {
    page,
    limit: LIMIT_CAR_ON_PAGE,
  };

  try {
    const { data } = await instance.get('/adverts');
    instance.defaults.params = {};
    return data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

export const getCarById = async id => {
  const { data } = await instance.get(`/adverts/${id}`);
  return data;
};

export default instance;
