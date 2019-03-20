import { combineReducers } from 'redux';
import { currentPaletteReducer } from './currentPaletteReducer/currentPaletteReducer';
import { palettesReducer } from './palettesReducer/palettesReducer';
import { projectsReducer } from './projectsReducer/projectsReducer';
import { errorReducer } from './errorReducer/errorReducer';
import { loadingReducer } from './loadingReducer/loadingReducer';

const rootReducer = combineReducers({
  currentPalette: currentPaletteReducer,
  palettes: palettesReducer,
  projects: projectsReducer,
  error: errorReducer,
  loading: loadingReducer,
});

export default rootReducer;
