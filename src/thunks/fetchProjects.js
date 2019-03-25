import { setLoading, setError, setProjects, setPalettes } from '../actions';
import { fetchData } from '../utils/api';
import { fetchPalettes } from './fetchPalettes';

export const fetchProjects = (name = null) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const path = name ? `?name=${name}` : '';
      let allProjects = await fetchData('/api/v1/projects' + path, 'GET');
      allProjects.sort((a, b) => {
        if (a.updated_at > b.updated_at) return -1;
        if (b.updated_at < a.updated_at) return 1;
        return 0;
      });
      dispatch(setProjects(allProjects));
      const allPalettes = await dispatch(fetchPalettes(allProjects));
      dispatch(setPalettes(allPalettes));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  }
}