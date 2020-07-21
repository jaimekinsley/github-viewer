import React from 'react';
import { shallow } from 'enzyme';
import Repos from './Repos';

describe('Repos component', () => {
  it('renders Repos', () => {
    const wrapper = shallow(<Repos repos={[
      { name:'about-me', url:'http://github.com/about-me' },
      { name:'bus-mall', url:'http://github.com/bus-mall' }
    ]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
