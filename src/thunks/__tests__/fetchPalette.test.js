import { fetchPalette } from '../fetchPalette';
import { setLoading, setError, setPalettes } from '../../actions';
import { fetchData } from '../../utils/api';
jest.mock('../../utils/api');

describe('fetchPalette', () => {
  let mockDispatch;
  let mockId;

  beforeEach(() => {
    mockId = 1;
    mockDispatch = jest.fn();
  });

  it('should call dispatch with the setLoading action', () => {
    const thunk = fetchPalette(mockId);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('should call fetchData with the correct params', async () => {
    const thunk = fetchPalette(mockId);
    await thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalledWith(`/api/v1/palettes/${mockId}`, 'GET');
  });

  it('should dispatch setError with message if response is not ok', async () => {
    fetchData.mockImplementation(() => {
      throw { message: 'Error fetching data' }
    });
    const thunk = fetchPalette(mockId);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Error fetching data'));
  });

  it('should dispatch setPalettes if response is ok', async () => {
    const expected = [
      {
        id: 1,
        name: 'Palette 1',
        project_id: 1,
        color1: '#ffffff',
        color2: '#ffffff',
        color3: '#ffffff',
        color4: '#ffffff',
        color5: '#ffffff'
      }
    ];
    fetchData.mockImplementation(() => expected);
    const thunk = fetchPalette(mockId);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setPalettes([expected]));
  });

  it('should dispatch setLoading(false)', async () => {
    const expected = [
      {
        id: 1,
        name: 'Palette 1',
        project_id: 1,
        color1: '#ffffff',
        color2: '#ffffff',
        color3: '#ffffff',
        color4: '#ffffff',
        color5: '#ffffff'
      }
    ];
    fetchData.mockImplementation(() => expected);
    const thunk = fetchPalette();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(false));
  });
});