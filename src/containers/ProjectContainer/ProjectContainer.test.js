import React from 'react';
import { ProjectContainer, mapStateToProps } from './ProjectContainer';
import { shallow } from 'enzyme';

describe('ProjectContainer', () => {
  let wrapper;
  let mockProjects;
  let mockPalettes;
  let mockSearching;
  let mockError;

  beforeEach(() => {
    mockError = '';
    mockProjects = [{ id: 1, name: 'Project 1' }, { id: 2, name: 'Project 2' }];
    mockPalettes = [
      {
        id: 1,
        project_id: 1,
        name: 'Palette 1',
        color1: '#ffffff',
        color2: '#ffffff',
        color3: '#ffffff',
        color4: '#ffffff',
        color5: '#ffffff'
      },
      {
        id: 2,
        project_id: 2,
        name: 'Palette 1',
        color1: '#ffffff',
        color2: '#ffffff',
        color3: '#ffffff',
        color4: '#ffffff',
        color5: '#ffffff'
      }
    ];
    mockSearching = false;
    wrapper = shallow(
      <ProjectContainer
        projects={mockProjects}
        palettes={mockPalettes}
        searching={mockSearching}
        error={mockError}
      />
    );
  });

  it('should match the correct snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the correct snapshot when searching is true', () => {
    mockSearching = true;
    wrapper = shallow(
      <ProjectContainer
        projects={mockProjects}
        palettes={mockPalettes}
        searching={mockSearching}
        error={mockError}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object of props', () => {
      const mockState = {
        projects: mockProjects,
        palettes: mockPalettes,
        searching: mockSearching,
        error: mockError,
        otherState: false,
      };
      const expected = {
        projects: mockProjects,
        palettes: mockPalettes,
        searching: mockSearching, 
        error: mockError,
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

});