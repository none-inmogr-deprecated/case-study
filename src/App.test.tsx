import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

describe('<App/>', () => {
  let store, wrapper: any
  const mockStore = configureStore()

  beforeEach(() => {
    store = mockStore({})
    wrapper = shallow(<Provider store={store}>
      <App />
    </Provider>);
  })

  it('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});