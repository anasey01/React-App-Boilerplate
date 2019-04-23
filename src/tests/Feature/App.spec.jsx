/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../components/Home/Home';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<HomePage />);
  });
});
