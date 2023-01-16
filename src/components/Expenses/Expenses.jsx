import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  // pass down the expenses array to the ExpenseFilter component( this controls it)
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
export default Expenses;
Expenses.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    }),
  ).isRequired,
};
