import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses({ ...props }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  // pass down the expenses array to the ExpenseFilter component( this controls it)
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // filter the expenses array based on the selected year
  // then we switched the mapping around in the Expense Item
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear,
  );

  // moved to ExpensesList.jsx
  // let expensesContent = <p>No expenses found.</p>;
  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }
  return (
    <Card className="expenses">
      <ExpensesFilter
        filteredYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
      {/* checks to if the length of our list in 0 if it is show message if not show our items */}
      {/* {expensesContent} */}

      {/* ---------------------------------------- */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No Expenses found.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}s
          />
        ))
      )} */}
      {/* -------------------- */}
      {/* {filteredExpenses.length === 0 && <p>No Expenses found.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
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
