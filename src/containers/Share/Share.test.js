import React from 'react';
import { Share, mapStateToProps, mapDispatchToProps } from './Share';
import { shallow } from 'enzyme';
import { fetchProject } from '../../thunks/fetchProject';
import { fetchPalette } from '../../thunks/fetchPalette';
jest.mock('../../thunks/fetchProject');
jest.mock('../../thunks/fetchPalette');

describe('Share', () => {
  let wrapper;
  let mockFetchProject;
  let mockFetchPalette;
  let mockProjects;
  let mockPalettes;
  let isProjectMock;

  beforeEach(() => {
    isProjectMock = true;
    mockFetchPalette = jest.fn();
    mockFetchProject = jest.fn();
    mockProjects = [{ id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' }];
    mockPalettes = [
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

    wrapper = shallow(
      <Share
        fetchProject={mockFetchProject}
        fetchPalette={mockFetchPalette}
        projects={mockProjects}
        palettes={mockPalettes}
        isProject={isProjectMock}
      />
    )
  });

  it('should match the correct snapshot for projects', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the correct snapshot for palettes', () => {
    isProjectMock = false;
    wrapper = shallow(
      <Share
        fetchProject={mockFetchProject}
        fetchPalette={mockFetchPalette}
        projects={mockProjects}
        palettes={mockPalettes}
        isProject={isProjectMock}
      />
    )
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the correct snapshot for not found', () => {
    isProjectMock = false;
    mockPalettes = [];
    wrapper = shallow(
      <Share
        fetchProject={mockFetchProject}
        fetchPalette={mockFetchPalette}
        projects={mockProjects}
        palettes={mockPalettes}
        isProject={isProjectMock}
      />
    )
    expect(wrapper).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    it('should call fetchProject', () => {
      wrapper.instance().componentDidMount();
      expect(mockFetchProject).toHaveBeenCalled();
    });

    it('should call fetchPalette', () => {
      isProjectMock = false;
      wrapper = shallow(
        <Share
          fetchProject={mockFetchProject}
          fetchPalette={mockFetchPalette}
          projects={mockProjects}
          palettes={mockPalettes}
          isProject={isProjectMock}
        />
      )
      wrapper.instance().componentDidMount();
      expect(mockFetchPalette).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object of props', () => {
      const mockState = {
        projects: mockProjects,
        palettes: mockPalettes,
        otherState: false,
      };
      const expected = {
        projects: mockProjects,
        palettes: mockPalettes,
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when fetchProject is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchProject();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchProject();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch when fetchPalette is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchPalette();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchPalette();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});