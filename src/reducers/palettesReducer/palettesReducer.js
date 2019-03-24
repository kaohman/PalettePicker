export const palettesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PALETTES':
      let fetchedPalettes = [];
      action.palettes.forEach(project => {
        project.forEach(palette => fetchedPalettes.push(palette))
      });
      return fetchedPalettes
    case 'ADD_PALETTE':
      return [...state, action.palette];
    case 'REMOVE_PALETTE':
      const newPalettes = state.filter(palette => palette.id === action.paletteId);
      return newPalettes
    default:
      return state
  }
}