import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from './UserInfo';

describe('ShortForm component', () => {
  it('renders UserInfo', () => {
    const wrapper = shallow(<UserInfo username="jaimekinsley" followers={3} following={2} link="http://github.com/jaimekinsley" />);
    expect(wrapper).toMatchSnapshot();
  });
});
