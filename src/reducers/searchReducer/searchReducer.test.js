import { searchReducer } from './searchReducer';
import * as actions from '../../actions';

describe('searchReducer', () => {
  it('should return the default state', () => {
    const result = searchReducer(undefined, {});
    expect(result).toEqual([]);
  });

  it('should return an array of projects', () => {
    const expected = [{ id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' }, { id: 3, name: 'Project 3' }];
    const result = searchReducer(undefined, actions.setSearchProjects(expected));
    expect(result).toEqual(expected);
  });

  it('should remove current search projects and replace them with updated projects from new search results', () => {
    const mockSearchProjects = [{ id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' }];
    const expected = [{ id: 1, name: 'Project 1' }];
    const result = searchReducer(mockSearchProjects, actions.setSearchProjects(expected));
    expect(result).toEqual(expected);
  });
});