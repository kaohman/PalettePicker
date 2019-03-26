import React from 'react';
import { Palette, mapStateToProps, mapDispatchToProps } from './Palette';
import { shallow } from 'enzyme';
import { setCurrentPalette } from '../../actions';

describe('Palette', () => {
  let wrapper;
  let mockCurrentPalette;
  let mockSetCurrentPalette;
  let mockEvent;

  beforeEach(() => {
    mockSetCurrentPalette = jest.fn();
    mockCurrentPalette = ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'];
    mockEvent = { target: { id: '1' } };

    wrapper = shallow(
      <Palette
        currentPalette={mockCurrentPalette}
        setCurrentPalette={mockSetCurrentPalette}
      />
    )
  });

  it('should match the correct snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({ locked: [] });
  });

  describe('componentDidMount', () => {

  });

  describe('setRandomColors', () => {
    
  });

  describe('toggleLock', () => {
    
  });

  describe('mapStateToProps', () => {
    it('should return an object of props', () => {
      const mockState = {
        currentPalette: mockCurrentPalette,
        otherState: false,
      };
      const expected = {
        currentPalette: mockCurrentPalette,
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when setCurrentPalette is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setCurrentPalette();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setCurrentPalette();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});