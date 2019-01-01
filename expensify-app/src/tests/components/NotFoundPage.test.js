import NotFound from '../../components/NotFoundPage'
import React from 'react';
import {shallow} from 'enzyme';

test ("Should render NotFound", () =>{
    const wrapper = shallow(<NotFound/>);
    expect(wrapper).toMatchSnapshot();
});