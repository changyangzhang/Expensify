import {addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('Should setup remove expense action', () =>{
   const action = removeExpense({ id: '123'});
   expect(action).toEqual({
       type: 'REMOVE_EXPENSE',
       id: '123'
   });
});

test('Should setup edit expense action', () =>{
    const action = editExpense('123', {note:'new'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates:{
            note: 'new'
        }
    });
});

test('Should setup add expense action with provided', () =>{
    const expenseData = {
        description: 'rent',
        amount: 109500,
        createdAt: 1000,
        note:'testing'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup add expense action with default', () =>{
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        },
    });
});