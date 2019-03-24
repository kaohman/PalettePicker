import { fetchProjects } from '../fetchProjects';
import { fetchPalettes } from '../fetchPalettes';
import { setLoading, setError, setProjects, setPalettes } from '../../actions';
import { fetchData } from '../../utils/api';
jest.mock('../../utils/api');
jest.mock('../fetchPalettes');

describe('fetchProjects', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  it('should call dispatch with the setLoading action', () => {
    const thunk = fetchProjects();
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('should call fetchData with the correct params', async () => {
    const thunk = fetchProjects();
    await thunk(mockDispatch);
    expect(fetchData).toHaveBeenCalledWith('/api/v1/projects', 'GET');
  });

  it('should dispatch setError with message if response is not ok', async () => {
    fetchData.mockImplementation(() => {
      throw { message: 'Error fetching data' }
    });
    const thunk = fetchProjects();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setError('Error fetching data'));
  });

  it('should dispatch setProjects if response is ok', async () => {
    const expected = [{ id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' }];
    fetchData.mockImplementation(() => expected);
    const thunk = fetchProjects();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setProjects(expected));
  });

  it('should dispatch fetchPalettes', async () => {
    const expected = [{ id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' }];
    fetchData.mockImplementation(() => expected);
    const thunk = fetchProjects();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(fetchPalettes(expected));
  });

  it.skip('should dispatch setPalettes if response is ok', async () => {
    const expectedProjects = [{ id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' }];
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
    ];
    fetchData.mockImplementation(() => expectedProjects);
    fetchPalettes.mockImplementation(() => expected);
    const thunk = fetchProjects();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setPalettes(expected));
  });

  it('should dispatch setLoading(false)', async () => {
    const expected = [{ id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' }];
    fetchData.mockImplementation(() => expected);
    const thunk = fetchProjects();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(false));
  });
});