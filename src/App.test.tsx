
import * as React from 'react';
import { mount } from 'enzyme';
import * as ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays a title', () => {
     const wrapper = mount(<App />);
    expect(wrapper.find('.App-title').text()).toEqual('Welcome to React Typescript Cypress Boilerplate');
});