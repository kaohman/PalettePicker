export const palettesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PALETTES':
      return action.palettes
    case 'ADD_PALETTE':
      return [...state.palettes, action.palette];
    case 'REMOVE_PALETTE':
      const newPalettes = state.palettes.filter(palette => palette.id === action.paletteId);
      return newPalettes
    default:
      return state
  }
}