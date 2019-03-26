import React from 'react';
import { Header, mapDispatchToProps } from './Header';
import { shallow } from 'enzyme';
import { fetchProjects } from '../../thunks/fetchProjects';
import { setError, setSearching } from '../../actions';
jest.mock('../../thunks/fetchProjects');

describe('Header', () => {
  let wrapper;
  let fetchProjectsMock;
  let setErrorMock;
  let setSearchingMock;
  let mockEvent;

  beforeEach(() => {
    fetchProjectsMock = jest.fn();
    setErrorMock = jest.fn();
    setSearchingMock = jest.fn();
    mockEvent = { target: { value: 'test'} };

    wrapper = shallow(
      <Header
        setError={setErrorMock}
        fetchProjects={fetchProjectsMock}
        setSearching={setSearchingMock}
      />
    )
  });

  it('should match the correct snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({ search: ''});
  });

  describe('handleChange', () => {
    it('should call setError with the correct params', () => {
      wrapper.instance().handleChange(mockEvent);
      expect(setErrorMock).toHaveBeenCalledWith('');
    });

    it('should update state with the correct value', () => {
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('search')).toEqual('test');
    });

    it('should call handleSearch', () => {
      wrapper.instance().handleSearch = jest.fn();
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.instance().handleSearch).toHaveBeenCalled();
    });
  });

  describe('handleSearch', () => {
    it('should call setSearching with false if no search', () => {
      wrapper.instance().handleSearch(mockEvent);
      expect(setSearchingMock).toHaveBeenCalledWith(false);
    });

    it('should call fetchProjects with no params if no search', () => {
      wrapper.instance().handleSearch(mockEvent);
      expect(fetchProjectsMock).toHaveBeenCalledWith();
    });

    it('should call setSearching with true if search', () => {
      wrapper.setState({ search: 'test'});
      wrapper.instance().handleSearch(mockEvent);
      expect(setSearchingMock).toHaveBeenCalledWith(true);
    });

    it('should call fetchProjects with the correct params if search', () => {
      wrapper.setState({ search: 'test' });
      wrapper.instance().handleSearch(mockEvent);
      expect(fetchProjectsMock).toHaveBeenCalledWith('test');
    });

    it('should setState the correct value', () => {
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('search')).toEqual('test');
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when setError is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setError();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setError();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch when fetchProjects is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = fetchProjects();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchProjects();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch when setSearching is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setSearching();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setSearching();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});