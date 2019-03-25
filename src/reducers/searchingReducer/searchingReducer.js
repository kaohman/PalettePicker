export const searchingReducer = (state = false, action) => {
  switch (action.type) {
    case 'SEARCHING_PROJECTS':
      return action.bool;
    default:
      return state;
  }
}