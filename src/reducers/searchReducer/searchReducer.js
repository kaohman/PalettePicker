export const searchReducer = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_PROJECTS':
      return action.search;
    default:
      return state;
  }
}