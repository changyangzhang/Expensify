import {Header} from '../../components/Header'
import React from 'react';
import {shallow} from 'enzyme';

test ("Should render Header", () =>{
   const wrapper = shallow(<Header startLogout={()=>{}}/>);
   expect(wrapper).toMatchSnapshot();
});

test('should call startLogout',()=>{
   const startLogout = jest.fn();
   const wrapper = shallow(<Header startLogout={startLogout}/>);
   wrapper.find('button').simulate('click');
   expect(startLogout).toHaveBeenCalled();
});