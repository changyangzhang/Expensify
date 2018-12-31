import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () =>{
    const state = expensesReducer(undefined, {type:'@@INIT'})
    expect(state).toEqual([]);
});

test('should remove expense by id', () =>{
    const state = expensesReducer(expenses, {type:'REMOVE_EXPENSE', id: expenses[1].id})
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id', () =>{
    const state = expensesReducer(expenses, {type:'REMOVE_EXPENSE', id: '456'})
    expect(state).toEqual([expenses[0], expenses[1],expenses[2]]);
});

test('should edit expense', () =>{
    const expense = {
        id: '109',
        description:'Laptop',
        note:'',
        createdAt: 20000,
        amount: 29500
    };
    const state = expensesReducer(expenses, {type:'ADD_EXPENSE', expense});
    expect(state).toEqual([...expenses, expense]);
});

test('should edit expense', () =>{
    const state = expensesReducer(expenses, {type:'EDIT_EXPENSE', id: expenses[1].id, updates:{amount: 122}});
    expect(state[1].amount).toEqual(122);
});

test('should not edit expense', () =>{
    const state = expensesReducer(expenses, {type:'EDIT_EXPENSE', id: '-1' , updates:{amount: 122}});
    expect(state).toEqual(expenses);
});