import { setLoading, setError, removeProject } from '../actions';
import { fetchData } from '../utils/api';

export const deleteProject = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await fetchData(`/api/v1/projects/${id}`, 'DELETE');
      dispatch(removeProject(id));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  }
}