export const currentPaletteReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_PALETTE':
      return action.palette
    default:
      return state
  }
}