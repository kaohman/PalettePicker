import { fetchProject } from '../fetchProject';
import { fetchPalettes } from '../fetchPalettes';
import { setLoading, setError, setProjects, setPalettes } from '../../actions';
import { fetchData } from '../../utils/api';
jest.mock('../../utils/api');
jest.mock('../fetchPalettes');

describe('fetchProject', () => {
  let mockDispatch;
  let mockId;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockId = 1;
  });

  it('should call dispatch with the setLoading action', () => {
    const thunk = fetchProject(mockId);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('should call fetchData with the correct params', async () => {
    const thunk = fetchProject(mockId);
    await thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalledWith(`/api/v1/projects/${mockId}`, 'GET');
  });

  it('should dispatch setError with message if response is not ok', async () => {
    fetchData.mockImplementation(() => {
      throw { message: 'Error fetching data' }
    });
    const thunk = fetchProject(mockId);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Error fetching data'));
  });

  it('should dispatch setProjects if response is ok', async () => {
    const expected = [{ id: 1, name: 'Project 1' }];
    fetchData.mockImplementation(() => expected);
    const thunk = fetchProject(mockId);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setProjects([expected]));
  });

  it('should dispatch fetchPalettes', async () => {
    const expected = [{ id: 1, name: 'Project 1' }];
    fetchData.mockImplementation(() => expected);
    const thunk = fetchProject(mockId);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(fetchPalettes([expected]));
  });

  it.skip('should dispatch setPalettes if response is ok', async () => {
    const expectedProjects = [{ id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' }];
    const expected = [[
      {
        id: 1,
        name: 'Palette 1',
        project_id: 1,
        color1: '#ffffff',
        color2: '#ffffff',
        color3: '#ffffff',
        color4: '#ffffff',
        color5: '#ffffff'
      },
      {
        id: 2,
        name: 'Palette 2',
        project_id: 1,
        color1: '#ffffff',
        color2: '#ffffff',
        color3: '#ffffff',
        color4: '#ffffff',
        color5: '#ffffff'
      }
    ]];
    fetchData.mockImplementation(() => expectedProjects);
    fetchPalettes.mockImplementation(() => expected);
    const thunk = fetchProject(mockId);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setPalettes(expected));
  });

  it('should dispatch setLoading(false)', async () => {
    const expected = [{ id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' }];
    fetchData.mockImplementation(() => expected);
    const thunk = fetchProject(mockId);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(false));
  });
});