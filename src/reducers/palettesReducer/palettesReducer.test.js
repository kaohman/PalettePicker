import { palettesReducer } from './palettesReducer';
import * as actions from '../../actions';

describe('palettesReducer', () => {
  it('should return the default state', () => {
    const result = palettesReducer(undefined, {});
    expect(result).toEqual([]);
  });

  it('should return an array of palettes', () => {
    const expected = [
      [{
        id: 1,
        name: 'Palette 1',
        project_id: 1,
        color1: '#ffffff', 
        color2: '#ffffff', 
        color3: '#ffffff', 
        color4: '#ffffff', 
        color5: '#ffffff'
      },
      {
        id: 2,
        name: 'Palette 2',
        project_id: 1,
        color1: '#ffffff',
        color2: '#ffffff',
        color3: '#ffffff',
        color4: '#ffffff',
        color5: '#ffffff'
      }]
    ];
    const result = palettesReducer(undefined, actions.setPalettes(expected));
    expect(result).toEqual(expected[0]);
  });

  it('should be able to add a palette', () => {
    const expected = [
      {
        id: 1,
        name: 'Palette 1',
        project_id: 1,
        color1: '#ffffff',
        color2: '#ffffff',
        color3: '#ffffff',
        color4: '#ffffff',
        color5: '#ffffff'
      },
      {
        id: 2,
        name: 'Palette 2',
        project_id: 1,
        color1: '#ffffff',
        color2: '#ffffff',
        color3: '#ffffff',
        color4: '#ffffff',
        color5: '#ffffff'
      }
    ];
    const result = palettesReducer([expected[0]], actions.addPalette(expected[1]));
    expect(result).toEqual(expected);
  });

  it('should be able to remove a palette', () => {
    const originalPalettes = [
      {
        id: 1,
        name: 'Palette 1',
        project_id: 1,
        color1: '#ffffff',
        color2: '#ffffff',
        color3: '#ffffff',
        color4: '#ffffff',
        color5: '#ffffff'
      },
      {
        id: 2,
        name: 'Palette 2',
        project_id: 1,
        color1: '#ffffff',
        color2: '#ffffff',
        color3: '#ffffff',
        color4: '#ffffff',
        color5: '#ffffff'
      }
    ];
    const result = palettesReducer(originalPalettes, actions.removePalette(2));
    expect(result).toEqual([originalPalettes[0]]);
  });
});