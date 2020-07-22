import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from './UserInfo';

describe('ShortForm component', () => {
  it('renders UserInfo', () => {
    const wrapper = shallow(<UserInfo userDetails={{
      name: 'Jaime Sanders',
      followers: 5,
      following: 3,
      html_url: 'http://github.com/jaimekinsley'
    }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
