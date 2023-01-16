import { React, useState } from 'react';
import PropTypes from 'prop-types';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem({ title, amount, date }) {
  const [expenseTitle, setExpenseTitle] = useState(title);

  const clickHandler = () => {
    setExpenseTitle('Updated!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button type="button" onClick={clickHandler}>
        Change Title
      </button>
    </Card>
  );
}

ExpenseItem.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default ExpenseItem;
