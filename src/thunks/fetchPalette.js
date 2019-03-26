import { setLoading, setError, setPalettes } from '../actions';
import { fetchData } from '../utils/api';

export const fetchPalette = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const palette = await fetchData(`/api/v1/palettes/${id}`, 'GET');
      dispatch(setPalettes([palette]));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
  };
};