import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ExpenseForm.css';

function ExpenseForm({ onSaveExpenseData }) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // hide the form
  const [formOpen, setFormOpen] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const toggleFormHandler = () => {
    setFormOpen((prevState) => !prevState);
  };

  const handleCancel = () => {
    setFormOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // this is coming from the NewExpense component
    // the expenseData is then sent back to the New Expense component so we can use the function
    onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setFormOpen(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // this is coming from the NewExpense component
    // the expenseData is then sent back to the New Expense component so we can use the function
    onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    <div>
      {formOpen ? (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                onChange={titleChangeHandler}
                value={enteredTitle}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                id="amount"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
                value={enteredAmount}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                min="1999-01-01"
                max="2025-12-31"
                onChange={dateChangeHandler}
                className={enteredDate}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" onSubmit={handleSubmit}>
              Add Expense
            </button>
          </div>
        </form>
      ) : (
        <button type="button" onClick={toggleFormHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
}

ExpenseForm.propTypes = {
  onSaveExpenseData: PropTypes.func.isRequired,
};
export default ExpenseForm;
