import { setLoading, setError, setProjects, setPalettes } from '../actions';
import { fetchData } from '../utils/api';
import { fetchPalettes } from './fetchPalettes';

export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const allProjects = await fetchData('/api/v1/projects', 'GET');
      const cleanedProjects = allProjects.map(project => {
        const { id, name } = project;
        return { id, name };
      })
      dispatch(setProjects(cleanedProjects));
      const allPalettes = await dispatch(fetchPalettes(allProjects));
      dispatch(setPalettes(allPalettes));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  }
}