import { setLoading, setError, setProjects, setPalettes } from '../actions';
import { fetchData } from '../utils/api';
import { fetchPalettes } from './fetchPalettes';

export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const allProjects = await fetchData('/api/v1/projects', 'GET');
      dispatch(setProjects(allProjects));
      const allPalettes = await dispatch(fetchPalettes(allProjects));
      dispatch(setPalettes(allPalettes));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
}