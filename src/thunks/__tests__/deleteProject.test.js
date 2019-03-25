import { deleteProject } from '../deleteProject';
import { setLoading, setError, removeProject } from '../../actions';
import { fetchData } from '../../utils/api';
jest.mock('../../utils/api');

describe('deleteProject', () => {
  let mockDispatch;
  let mockId;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockId = 1;
  });

  it('should call dispatch with the setLoading action', () => {
    const thunk = deleteProject(mockId);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('should call fetchData with the correct params', async () => {
    const thunk = deleteProject(mockId);
    await thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalledWith(`/api/v1/projects/${mockId}`, 'DELETE');
  });

  it('should dispatch setError with message if response is not ok', async () => {
    fetchData.mockImplementation(() => {
      throw { message: 'Error fetching data' }
    });
    const thunk = deleteProject();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Error fetching data'));
  });

  it('should dispatch removeProject if response is ok', async () => {
    fetchData.mockImplementation(() => Promise.resolve({
      ok: true
    }));
    const thunk = deleteProject(mockId);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(removeProject(mockId));
  });

  it('should dispatch setLoading(false)', async () => {
    fetchData.mockImplementation(() => Promise.resolve({
      ok: true
    }));
    const thunk = deleteProject();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(false));
  });
});