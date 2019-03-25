import { fetchPalettes } from '../fetchPalettes';
import { setError } from '../../actions';
import { fetchData } from '../../utils/api';
jest.mock('../../utils/api');

describe('fetchPalettes', () => {
  let mockDispatch;
  let mockProjects;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockProjects = [{ id: 1, name: 'Project 1' }, { id: 1, name: 'Project 2' }];
  });

  it('should call fetchData with the correct params', async () => {
    const thunk = fetchPalettes(mockProjects);
    await thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalledWith('/api/v1/projects/1/palettes', 'GET');
  });

  it('should dispatch setError with message if response is not ok', async () => {
    fetchData.mockImplementation(() => {
      throw { message: 'Error fetching data' }
    });
    const thunk = fetchPalettes(mockProjects);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Error fetching data'));
  });
});