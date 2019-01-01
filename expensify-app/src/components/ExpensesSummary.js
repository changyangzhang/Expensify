import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import slectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({expenseCount, expensesTotal}) =>{
    const expenseWord = expenseCount === 1 ? 'expense': 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('0,0.00') + ' kr';
    return (
        <div>
            <h1> Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    );
};

const mapStateToProps = (state) =>{
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return{
        expenseCount: visibleExpenses.length,
        expensesTotal: slectExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);