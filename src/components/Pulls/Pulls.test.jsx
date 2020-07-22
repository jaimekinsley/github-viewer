import React from 'react';
import { shallow } from 'enzyme';
import Pulls from './Pulls';

describe('Pulls component', () => {
  it('renders Pulls', () => {
    const wrapper = shallow(<Pulls pulls={[
      { number: 1 },
      { number: 2 }
    ]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
