import { setLoading, setError, setSearchProjects } from '../actions';
import { fetchData } from '../utils/api';

export const searchProjects = (search) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const allProjects = await fetchData(`/api/v1/projects?name=${search}`, 'GET');
      const cleanedProjects = allProjects.map(project => {
        const { id, name } = project;
        return { id, name };
      });
      dispatch(setSearchProjects(cleanedProjects));
    } catch (error) {
      dispatch(setSearchProjects([]));
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};