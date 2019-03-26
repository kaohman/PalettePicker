import { setLoading, setError, setProjects, setPalettes } from '../actions';
import { fetchData } from '../utils/api';
import { fetchPalettes } from './fetchPalettes';

export const fetchProject = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const project = await fetchData(`/api/v1/projects/${id}`, 'GET');
      dispatch(setProjects([project]));
      const projectPalettes = await dispatch(fetchPalettes([project]));
      dispatch(setPalettes(projectPalettes));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};