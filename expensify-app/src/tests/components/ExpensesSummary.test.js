import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from "../../components/ExpensesSummary";

test('should render ExpensesSummary with 1 expnse', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multi expnses', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={15641656516}/>);
    expect(wrapper).toMatchSnapshot();
});