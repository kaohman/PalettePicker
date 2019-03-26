export const palettesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PALETTES':
      return action.palettes.flat();
    case 'ADD_PALETTE':
      return [action.palette, ...state];
    case 'REMOVE_PALETTE':
      const newPalettes = state.filter(palette => palette.id !== action.paletteId);
      return newPalettes
    default:
      return state
  }
}