import { searchingReducer } from './searchingReducer';
import * as actions from '../../actions';

describe('searchingReducer', () => {
  it('should return the default state', () => {
    const result = searchingReducer(undefined, {});
    expect(result).toEqual(false);
  });

  it('should set loading to false', () => {
    const expected = true;
    const result = searchingReducer(undefined, actions.setSearching(expected));
    expect(result).toEqual(expected);
  })
});