import { setError } from '../actions';
import { fetchData } from '../utils/api';

export const fetchPalettes = (allProjects) => {
  return (dispatch) => {
    const promisedPalettes = allProjects.map(async palette => {
      try {
        return await fetchData(`/api/v1/projects/${palette.id}/palettes`, 'GET');
      } catch (error) {
        dispatch(setError(error.message));
      }
    })
    return Promise.all(promisedPalettes);
  }

}