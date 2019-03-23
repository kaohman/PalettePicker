import { setError } from '../actions';
import { fetchData } from '../utils/api';

export const fetchPalettes = (allProjects) => {
  return (dispatch) => {
    const promisedPalettes = allProjects.map(async palette => {
      try {
        const allPalettes = await fetchData(`/api/v1/projects/${palette.id}/palettes`, 'GET');
        return allPalettes.map(palette => {
          const { id, project_id, name, color1, color2, color3, color4, color5 } = palette;
          return { id, project_id, name, color1, color2, color3, color4, color5 };
        })
      } catch (error) {
        dispatch(setError(error.message));
      }
    })
    return Promise.all(promisedPalettes);
  }
}