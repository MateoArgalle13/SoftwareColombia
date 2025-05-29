import axiosInstance from '../../../lib/axios'; 

//Función para obtener la lista de superhéroes.
export const fetchHeroes = async (page = 0, size = 9) => {
  const apiPage = page + 1;
  const response = await axiosInstance.get('/heroes', {
    params: {
      size: size,
      page: apiPage, 
    },
  });
  return response.data;
};

//Función para obtener los detalles de un superhéroe por ID
export const fetchHeroById = async (id) => {
  const response = await axiosInstance.get(`/hero?id=${id}`);
  return response.data;
};