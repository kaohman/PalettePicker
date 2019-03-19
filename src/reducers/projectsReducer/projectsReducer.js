export const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROJECTS':
      return action.projects
    case 'ADD_PROJECT':
      return [...state.projects, action.project];
    case 'REMOVE_PROJECT':
      const newProjects = state.projects.filter(project => project.id === action.projectId);
      return newProjects
    default:
      return state
  }
}