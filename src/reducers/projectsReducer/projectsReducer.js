export const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROJECTS':
      return action.projects
    case 'ADD_PROJECT':
      let currentProjects = state.slice()
      currentProjects.unshift(action.project)
      return currentProjects
    case 'REMOVE_PROJECT':
      const newProjects = state.projects.filter(project => project.id === action.projectId);
      return newProjects
    default:
      return state
  }
}