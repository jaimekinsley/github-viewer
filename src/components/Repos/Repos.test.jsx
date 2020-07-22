import React from 'react';
import { shallow } from 'enzyme';
import Repos from './Repos';

describe('Repos component', () => {
  it('renders Repos', () => {
    const wrapper = shallow(<Repos repos={[
      { name:'about-me' },
      { name:'bus-mall' }
    ]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
