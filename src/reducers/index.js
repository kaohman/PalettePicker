import { combineReducers } from 'redux';
import { currentPaletteReducer } from './currentPaletteReducer/currentPaletteReducer';
import { palettesReducer } from './palettesReducer/palettesReducer';
import { projectsReducer } from './projectsReducer/projectsReducer';
import { errorReducer } from './errorReducer/errorReducer';
import { loadingReducer } from './loadingReducer/loadingReducer';
import { searchReducer } from './searchReducer/searchReducer';
import { searchingReducer } from './searchingReducer/searchingReducer';

const rootReducer = combineReducers({
  currentPalette: currentPaletteReducer,
  palettes: palettesReducer,
  projects: projectsReducer,
  search: searchReducer,
  searching: searchingReducer,
  error: errorReducer,
  loading: loadingReducer,
});

export default rootReducer;
