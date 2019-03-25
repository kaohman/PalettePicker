import { setError } from '../actions';
import { fetchData } from '../utils/api';

export const fetchPalettes = (allProjects) => {
  return (dispatch) => {
    const promisedPalettes = allProjects.map(async palette => {
      try {
        let allPalettes = await fetchData(`/api/v1/projects/${palette.id}/palettes`, 'GET');
        allPalettes.sort((a, b) => {
          if (a.updated_at > b.updated_at) return -1;
          if (b.updated_at < a.updated_at) return 1;
          return 0;
        });
        return allPalettes
      } catch (error) {
        dispatch(setError(error.message));
      }
    })
    return Promise.all(promisedPalettes);
  }
}