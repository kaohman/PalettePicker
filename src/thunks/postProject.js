import { setLoading, setError, addProject } from '../actions';
import { fetchData } from '../utils/api';

export const postProject = (name) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const newProjectId = await fetchData('/api/v1/projects', 'POST', { name });
      dispatch(addProject({id:newProjectId, name}));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false))
  }
}