/**
 * @format
 */

import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import App from '../src/App';

it('renders correctly', () => {
    const snap = shallow(<App />);
    expect(snap).toMatchSnapshot();
});
