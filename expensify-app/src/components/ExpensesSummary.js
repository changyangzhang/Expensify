import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total'
import {Link} from "react-router-dom";

export const ExpensesSummary = ({expenseCount, expensesTotal,uid}) =>{
    const expenseWord = expenseCount === 1 ? 'expense': 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('0,0.00') + ' kr';
    return (
        <div className="page-header">
            <div className="content-container">
                {uid === '6LjG2B7bdPazarNgZs5zan08XZg1' && <h1 className="page-header__title"> Welcome Sweet Boy! </h1>}
                <h1 className="page-header__title"> Viewing <span>{expenseCount}</span> {expenseWord} totalling <span> {formattedExpensesTotal} </span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
       </div>
    );
};

const mapStateToProps = (state) =>{
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const uid = state.auth.uid;

    return{
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        uid : uid
    }
};

export default connect(mapStateToProps)(ExpensesSummary);