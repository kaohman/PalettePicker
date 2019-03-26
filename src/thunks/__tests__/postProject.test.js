import { postProject } from '../postProject';
import { setLoading, setError, addProject } from '../../actions';
import { fetchData } from '../../utils/api';
jest.mock('../../utils/api');

describe('postProject', () => {
  let mockDispatch;
  let mockName;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockName = 'New Project';
  });

  it('should call dispatch with the setLoading action', () => {
    const thunk = postProject(mockName);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('should call fetchData with the correct params', async () => {
    const thunk = postProject(mockName);
    await thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalledWith('/api/v1/projects', 'POST', { name: mockName });
  });

  it('should dispatch setError with message if response is not ok', async () => {
    fetchData.mockImplementation(() => {
      throw { message: 'Error fetching data' }
    });
    const thunk = postProject(mockName);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Error fetching data'));
  });

  it('should dispatch addProject if response is ok', async () => {
    const mockResponse = { id: 1, name: 'New Project' };
    fetchData.mockImplementation(() => Promise.resolve([
      mockResponse
    ]));
    const thunk = postProject(mockName);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(addProject(mockResponse));
  });

  it('should dispatch setLoading(false)', async () => {
    const mockId = 1;
    fetchData.mockImplementation(() => Promise.resolve([
      mockId
    ]));
    const thunk = postProject(mockName);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(false));
  });
});