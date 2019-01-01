import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 ', ()=>{
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should return add ', ()=>{
    const res = selectExpensesTotal([expenses[0],expenses[1]]);
    expect(res).toBe(expenses[0].amount + expenses[1].amount);
});

test('should return add ', ()=>{
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(expenses[0].amount);
});