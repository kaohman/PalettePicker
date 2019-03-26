import React from 'react';
import { ProjectCardPalette, mapDispatchToProps } from './ProjectCardPalette';
import { shallow } from 'enzyme';
import { deletePalette } from '../../thunks/deletePalette';
jest.mock('../../thunks/deletePalette');

describe('ProjectCardPalette', () => {
  let wrapper;
  let mockDeletePalette;
  let mockPalette;
  let mockEvent;

  beforeEach(() => {
    mockEvent = { target: { id: '1'} };
    mockDeletePalette = jest.fn();
    mockPalette = {
      id: 1,
      name: 'Palette 1',
      color1: '#ffffff',
      color2: '#ffffff',
      color3: '#ffffff',
      color4: '#ffffff',
      color5: '#ffffff'
    };

    wrapper = shallow(
      <ProjectCardPalette
        deletePalette={mockDeletePalette}
        id={mockPalette.id}
        name={mockPalette.name}
        color1={mockPalette.color1}
        color2={mockPalette.color2}
        color3={mockPalette.color3}
        color4={mockPalette.color4}
        color5={mockPalette.color5}
      />
    )
  });

  it('should match the correct snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call deletePalette on click when deleteCardPalette is called', async () => {
    await wrapper.find('button').simulate('click');
    expect(mockDeletePalette).toHaveBeenCalledWith(parseInt(mockEvent.target.id));
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when deletePalette is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = deletePalette();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.deletePalette();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});