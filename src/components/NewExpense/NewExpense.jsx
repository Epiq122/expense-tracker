import React from 'react';
import PropTypes from 'prop-types';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

function NewExpense({ onAddExpense }) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {/* Sends the data Down to the Expense form */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

NewExpense.propTypes = {
  onAddExpense: PropTypes.func.isRequired,
};

export default NewExpense;
