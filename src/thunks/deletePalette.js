import { setLoading, setError, removePalette } from '../actions';
import { fetchData } from '../utils/api';

export const deletePalette = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await fetchData(`/api/v1/palettes/${id}`, 'DELETE');
      dispatch(removePalette(id));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  }
}