import { projectsReducer } from './projectsReducer';
import * as actions from '../../actions';

describe('projectsReducer', () => {
  it('should return the default state', () => {
    const result = projectsReducer(undefined, {});
    expect(result).toEqual([]);
  });

  it('should return an array of projects', () => {
    const expected = [{ id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' }, { id: 3, name: 'Project 3' }];
    const result = projectsReducer(undefined, actions.setProjects(expected));
    expect(result).toEqual(expected);
  });

  it('should be able to add a project', () => {
    const expected = [{ id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' }];
    const result = projectsReducer([expected[1]], actions.addProject(expected[0]));
    expect(result).toEqual(expected);
  });

  it('should be able to remove a project', () => {
    const originalProjects = [{ id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' }];
    const result = projectsReducer(originalProjects, actions.removeProject(2));
    expect(result).toEqual([originalProjects[0]]);
  });
});