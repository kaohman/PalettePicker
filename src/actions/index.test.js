import * as actions from './index';

describe('actions', () => {
  it('should return a type of SET_CURRENT_PALETTE, with an array of colors', () => {
    const palette = ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'];
    const expected = {
      type: 'SET_CURRENT_PALETTE',
      palette
    };
    const result = actions.setCurrentPalette(palette);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_PROJECTS, with an array of projects', () => {
    const projects = [{ id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' }, { id: 3, name: 'Project 3' }];
    const expected = {
      type: 'SET_PROJECTS',
      projects
    };
    const result = actions.setProjects(projects);
    expect(result).toEqual(expected);
  });

  it('should return a type of ADD_PROJECT, with a project', () => {
    const project = {id: 4, name: 'Project 4'};
    const expected = {
      type: 'ADD_PROJECT',
      project
    };
    const result = actions.addProject(project);
    expect(result).toEqual(expected);
  });

  it('should return a type of REMOVE_PROJECT, with a projectId', () => {
    const projectId = 4;
    const expected = {
      type: 'REMOVE_PROJECT',
      projectId
    };
    const result = actions.removeProject(projectId);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_PALETTES, with an array of palettes', () => {
    const palettes = [
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
    const expected = {
      type: 'SET_PALETTES',
      palettes
    };
    const result = actions.setPalettes(palettes);
    expect(result).toEqual(expected);
  });

  it('should return a type of ADD_PALETTE, with a palette', () => {
    const palette = {
      id: 3,
      name: 'Palette 3',
      project_id: 1,
      color1: '#ffffff',
      color2: '#ffffff',
      color3: '#ffffff',
      color4: '#ffffff',
      color5: '#ffffff'
    };
    const expected = {
      type: 'ADD_PALETTE',
      palette
    };
    const result = actions.addPalette(palette);
    expect(result).toEqual(expected);
  });

  it('should return a type of REMOVE_PALETTE, with a paletteId', () => {
    const paletteId = 1;
    const expected = {
      type: 'REMOVE_PALETTE',
      paletteId
    };
    const result = actions.removePalette(paletteId);
    expect(result).toEqual(expected);
  });


  it('should return a type of SET_LOADING, with a loading status', () => {
    const loading = false;
    const expected = {
      type: 'SET_LOADING',
      loading
    };
    const result = actions.setLoading(loading);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_ERROR, with an error message', () => {
    const error = 'Error message';
    const expected = {
      type: 'SET_ERROR',
      error
    };
    const result = actions.setError(error);
    expect(result).toEqual(expected);
  });
});