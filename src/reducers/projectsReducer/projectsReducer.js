export const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROJECTS':
      return action.projects
    case 'ADD_PROJECT':
      return [action.project, ...state.projects];
    case 'REMOVE_PROJECT':
      const newProjects = state.projects.filter(project => project.id === action.projectId);
      return newProjects
    default:
      return state
  }
}