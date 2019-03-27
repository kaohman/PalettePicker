import React from 'react';
import { ControlForm, mapStateToProps, mapDispatchToProps } from './ControlForm';
import { shallow } from 'enzyme';
import { postProject } from '../../thunks/postProject';
import { setError } from '../../actions';
import { postPalette } from '../../thunks/postPalette';
jest.mock('../../thunks/postProject');
jest.mock('../../actions');
jest.mock('../../thunks/postPalette');

describe('ControlForm', () => {
  let wrapper;
  let mockProjects;
  let mockCurrentPalette;
  let mockError;
  let mockPostProject = jest.fn();
  let mockPostPalette = jest.fn();
  let mockSetError = jest.fn();

  beforeEach(() => {
    mockError = '';
    mockProjects = [{ id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' }];
    mockCurrentPalette = ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'];

    wrapper = shallow(
      <ControlForm
        projects={mockProjects}
        currentPalette={mockCurrentPalette}
        error={mockError}
        postProject={mockPostProject}
        postPalette={mockPostPalette}
        setError={mockSetError}
      />
    );
  });

  it('should match the correct snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


  describe('saveProject', () => {

    it('should call setError with correct params', () => {
      wrapper.instance().saveProject();
      expect(mockSetError).toHaveBeenCalledWith('')
    });

    it('should call postProject with correct params', () => {
      const expectedProjectState = 'New Project';
      wrapper.setState({project: expectedProjectState});
      wrapper.instance().saveProject();
      expect(mockPostProject).toHaveBeenCalledWith(expectedProjectState);
    });

    it.skip('should call clearInput with correct params', () => {
      wrapper.instance().clearInput = jest.fn();
      wrapper.instance().saveProject();
      expect(wrapper.instance().clearInput).toHaveBeenCalledWith('project');
    });

  });

  describe('savePalette', () => {

    it('should call setError with correct params', () => {
      wrapper.instance().savePalette();
      expect(mockSetError).toHaveBeenCalledWith('');
    });

    it.skip('should call clearInput with correct params', () => {
      wrapper.instance().clearInput = jest.fn();
      wrapper.instance().saveProject();
      expect(wrapper.instance().clearInput).toHaveBeenCalledWith('palette')
    });

  });

  describe('clearInput', () => {

    it('should change state to current project', () => {
      const initialProjectState = 'Project 1';
      const expectedState = '';
      wrapper.setState({project: initialProjectState})
      expect(wrapper.state('project')).toEqual(initialProjectState);
      wrapper.instance().clearInput('project');
      expect(wrapper.state('project')).toEqual(expectedState);
    });

  });

  describe('handleChange', () => {

    it('should change state to current project', () => {
      const initialProjectState = '';
      const mockEvent = {
        target: {
          value: 'New Project',
          id: 'project'
        }
      };
      expect(wrapper.state('project')).toEqual(initialProjectState);
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('project')).toEqual(mockEvent.target.value);
    });

  });

  describe('changeSelectedProject', () => {

    it('should change state to current project', () => {
      const initialSelectedProjectState = '';
      const mockEvent = {
        target: {
          value: 'New Project'
        }
      };
      expect(wrapper.state('selectedProject')).toEqual(initialSelectedProjectState);
      wrapper.instance().changeSelectedProject(mockEvent);
      expect(wrapper.state('selectedProject')).toEqual(mockEvent.target.value);
    });

  });

  describe('mapStateToProps', () => {

    it('should return an object of props', () => {
      const mockState = {
        projects: mockProjects,
        currentPalette: mockCurrentPalette,
        error: mockError,
        otherState: false,
      };
      const expected = {
        projects: mockProjects,
        currentPalette: mockCurrentPalette,
        error: mockError,
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });

  });

  describe('mapDispatchToProps', () => {

    it('should call dispatch when postProject is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = postProject();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.postProject();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch when setError is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setError();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setError();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch when postPalette is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = postPalette();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.postPalette();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

  });

});