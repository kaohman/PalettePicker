import { setLoading, setError, setProjects, setPalettes } from '../actions';
import { fetchData } from '../utils/api';
import { fetchPalettes } from './fetchPalettes';

export const fetchProjects = (name = null) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const path = name ? `?name=${name}` : '';
      const allProjects = await fetchData('/api/v1/projects' + path, 'GET');
      dispatch(setProjects(allProjects));
      const allPalettes = await dispatch(fetchPalettes(allProjects));
      dispatch(setPalettes(allPalettes));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  }
}