import { setLoading, setError, setProjects } from '../actions';
import { fetchData } from '../utils/api';

export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const result = await fetchData('/api/v1/projects', 'GET');
      dispatch(setProjects(result));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
}