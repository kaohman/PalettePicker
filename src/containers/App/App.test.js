import React from 'react';
import { App } from './App';
import { Home } from '../Home/Home';
import { Share } from '../Share/Share';
import { NotFound } from '../../components/NotFound/NotFound';
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../../reducers/index';
import thunk from 'redux-thunk';

describe('App', () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  let wrapper;

  it('should match the correct snapshot', () => {
    wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Routes', () => {

    it('should render the Home container when at the root route', () => {
      wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/']}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Home)).toHaveLength(1);
    });

    it('should render the Share container when at route /project/:id', () => {
      wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/project/1']}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Share)).toHaveLength(1);
    });

    it('should render the Share container when at route /project/:id', () => {
      wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/palette/1']}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Share)).toHaveLength(1);
    });

    it('should render the NotFound container when at a route that is not recognized', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/banana']}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(NotFound)).toHaveLength(1);
    });

  });

});