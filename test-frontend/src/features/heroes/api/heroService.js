import api from '../../../lib/axios';
import { API_BASE_URL } from '../../../lib/constants';

/**
 * @typedef {object} HeroItem
 * @property {number} id
 * @property {string} name
 * @property {string} slug
 * @property {object} powerstats
 * @property {object} appearance
 * @property {object} images
 * // ... y cualquier otra propiedad relevante
 */

/**
 * @typedef {object} HeroDetail
 * @property {number} id
 * @property {string} name
 * @property {string} slug
 * @property {object} powerstats
 * @property {object} appearance
 * @property {object} biography
 * @property {object} work
 * @property {object} connections
 * @property {object} images
 * // ... y cualquier otra propiedad relevante
 */

/**
 * @typedef {object} PaginationResponse
 * @property {number} length
 * @property {number} size
 * @property {number} page
 * @property {number} firstPage
 * @property {number} lastPage
 * @property {number} startIndex
 * @property {number} endIndex
 * @property {HeroItem[]} items
 */

/**
 * Obtiene una lista paginada de superhéroes.
 * @param {number} [page=1] - El número de página a recuperar.
 * @param {number} [size=10] - El número de ítems por página.
 * @returns {Promise<PaginationResponse>}
 */
export const fetchHeroes = async (page = 1, size = 10) => {
  const response = await api.get(`${API_BASE_URL}/heroes`, {
    params: { page, size },
  });
  return response.data;
};

/**
 * Obtiene los detalles de un superhéroe por su ID.
 * @param {string|number} id - El ID del superhéroe.
 * @returns {Promise<HeroDetail>}
 */
export const fetchHeroById = async (id) => {
  const response = await api.get(`${API_BASE_URL}/hero`, {
    params: { id },
  });
  return response.data;
};