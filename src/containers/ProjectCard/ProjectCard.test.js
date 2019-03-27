import React from 'react';
import { ProjectCard, mapDispatchToProps } from './ProjectCard';
import { shallow } from 'enzyme';
import { deleteProject } from '../../thunks/deleteProject';
jest.mock('../../thunks/deleteProject');

describe('ProjectCard', () => {
  let wrapper;
  let mockDeleteProject;
  let mockPalettes;
  let mockProjectTitle;
  let mockId;
  let mockEvent;

  beforeEach(() => {
    mockEvent = { target: { id: '1' } };
    mockDeleteProject = jest.fn();
    mockPalettes = [{
      id: 1,
      name: 'Palette 1',
      color1: '#ffffff',
      color2: '#ffffff',
      color3: '#ffffff',
      color4: '#ffffff',
      color5: '#ffffff'
    }];

    wrapper = shallow(
      <ProjectCard
        deleteProject={mockDeleteProject}
        id={mockId}
        projectTitle={mockProjectTitle}
        palettes={mockPalettes}
      />
    )
  });

  it('should match the correct snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call deleteProject on click when deleteCard is called', async () => {
    await wrapper.find('button').simulate('click');
    expect(mockDeleteProject).toHaveBeenCalledWith(parseInt(mockEvent.target.id));
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when deleteProject is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = deleteProject();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.deleteProject();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});