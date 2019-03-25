import { setLoading, setError, addProject } from '../actions';
import { fetchData } from '../utils/api';

export const postProject = (name) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const newProject = await fetchData('/api/v1/projects', 'POST', { name });
      dispatch(addProject(newProject[0]));
      dispatch(setLoading(false));
      return newProject[0].id
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false))
    }
  }
}