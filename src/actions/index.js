export const setCurrentPalette = (palette) => ({
  type: 'SET_CURRENT_PALETTE',
  palette
});

export const setProjects = (projects) => ({
  type: 'SET_PROJECTS',
  projects
});

export const addProject = (project) => ({
  type: 'ADD_PROJECT',
  project
});

export const removeProject = (projectId) => ({
  type: 'REMOVE_PROJECT',
  projectId
});

export const setPalettes = (palettes) => ({
  type: 'SET_PALETTES',
  palettes
});

export const addPalette = (palette) => ({
  type: 'ADD_PALETTE',
  palette
});

export const removePalette = (paletteId) => ({
  type: 'REMOVE_PALETTE',
  paletteId
});

export const setSearchProjects = (search) => ({
  type: 'SEARCH_PROJECTS',
  search
});

export const setSearching = (bool) => ({
  type: 'SEARCHING_PROJECTS',
  bool
});

export const setLoading = (loading) => ({
  type: 'SET_LOADING',
  loading
});

export const setError = (error) => ({
  type: 'SET_ERROR',
  error
});