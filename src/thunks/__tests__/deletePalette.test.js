import { deletePalette } from '../deletePalette';
import { setLoading, setError, removePalette } from '../../actions';
import { fetchData } from '../../utils/api';
jest.mock('../../utils/api');

describe('deletePalette', () => {
  let mockDispatch;
  let mockId;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockId = 1;
  });

  it('should call dispatch with the setLoading action', () => {
    const thunk = deletePalette(mockId);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('should call fetchData with the correct params', async () => {
    const thunk = deletePalette(mockId);
    await thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalledWith(`/api/v1/palettes/${mockId}`, 'DELETE');
  });

  it('should dispatch setError with message if response is not ok', async () => {
    fetchData.mockImplementation(() => {
      throw { message: 'Error fetching data' }
    });
    const thunk = deletePalette();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Error fetching data'));
  });

  it('should dispatch removePalette if response is ok', async () => {
    fetchData.mockImplementation(() => Promise.resolve({
      ok: true
    }));
    const thunk = deletePalette(mockId);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(removePalette(mockId));
  });

  it('should dispatch setLoading(false)', async () => {
    fetchData.mockImplementation(() => Promise.resolve({
      ok: true
    }));
    const thunk = deletePalette();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(false));
  });
});