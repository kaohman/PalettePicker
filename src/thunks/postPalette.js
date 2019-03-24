import { setLoading, setError, addPalette } from '../actions';
import { fetchData } from '../utils/api';

export const postPalette = (palette) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const newPaletteId = await fetchData('/api/v1/palettes', 'POST', palette);
      dispatch(addPalette({ ...palette, id: newPaletteId[0] }));
    } catch (error) {
      dispatch(setError(error.message));
    }
    dispatch(setLoading(false))
  }
}