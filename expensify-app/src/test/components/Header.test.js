import Header from '../../components/Header'
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';

test ("Should render Header", () =>{
   const renderer = new ReactShallowRenderer();
   renderer.render(<Header/>);
   expect(renderer.getRenderOutput()).toMatchSnapshot();
});