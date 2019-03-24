import { currentPaletteReducer } from './currentPaletteReducer';
import * as actions from '../../actions';

describe('currentPaletteReducer', () => {
  it('should return the default state', () => {
    const result = currentPaletteReducer(undefined, {});
    expect(result).toEqual([]);
  });

  it('should return an array of colors in the current palette', () => {
    const expected = ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'];
    const result = currentPaletteReducer(undefined, actions.setCurrentPalette(expected));
    expect(result).toEqual(expected);
  })
});