import { postPalette } from '../postPalette';
import { setLoading, setError, addPalette } from '../../actions';
import { fetchData } from '../../utils/api';
jest.mock('../../utils/api');

describe('postPalette', () => {
  let mockDispatch;
  let mockPalette;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockPalette = {
      name: 'New Palette',
      project_id: 1,
      color1: '#000000',
      color2: '#000000',
      color3: '#000000',
      color4: '#000000',
      color5: '#000000',
    }
  });

  it('should call dispatch with the setLoading action', () => {
    const thunk = postPalette(mockPalette);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('should call fetchData with the correct params', async () => {
    const thunk = postPalette(mockPalette);
    await thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalledWith('/api/v1/palettes', 'POST', mockPalette);
  });

  it('should dispatch setError with message if response is not ok', async () => {
    fetchData.mockImplementation(() => {
      throw { message: 'Error fetching data' }
    });
    const thunk = postPalette(mockPalette);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Error fetching data'));
  });

  it('should dispatch addPalette if response is ok', async () => {
    const mockId = 1;
    fetchData.mockImplementation(() => Promise.resolve([
      mockId
    ]));
    const thunk = postPalette(mockPalette);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(addPalette({ ...mockPalette, id: mockId }));
  });

  it('should dispatch setLoading(false)', async () => {
    const mockId = 1;
    fetchData.mockImplementation(() => Promise.resolve([
      mockId
    ]));
    const thunk = postPalette(mockPalette);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(false));
  });
});