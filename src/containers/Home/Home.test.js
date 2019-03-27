import React from 'react';
import { Home, mapStateToProps, mapDispatchToProps } from './Home';
import { shallow } from 'enzyme';
import { fetchProjects } from '../../thunks/fetchProjects';
jest.mock('../../thunks/fetchProjects');

describe('Home', () => {
  let wrapper;
  let mockFetchProjects;
  let mockProjects;
  let mockSearching;

  beforeEach(() => {
    mockFetchProjects = jest.fn();
    mockProjects = [{ id: 1, name: 'Project 1'}, { id: 2, name: 'Project 2'}];
    mockSearching = true;

    wrapper = shallow(
      <Home 
        fetchProjects={mockFetchProjects}
        projects={mockProjects}
        searching={mockSearching}
      />
    )
  });

  it('should match the correct snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the correct snapshot', () => {
    mockSearching = false;
    wrapper = shallow(
      <Home
        fetchProjects={mockFetchProjects}
        projects={mockProjects}
        searching={mockSearching}
      />
    )
    expect(wrapper).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    it('should call fetchProjects', () => {
      wrapper.instance().componentDidMount();
      expect(mockFetchProjects).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object of props', () => {
      const mockState = {
        projects: mockProjects,
        searching: mockSearching,
        otherState: false,
      };
      const expected = {
        projects: mockProjects,
        searching: mockSearching,
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when fetchProjects is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchProjects();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchProjects();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});