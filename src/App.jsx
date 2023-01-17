import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Rent',
    amount: 1000.0,
    date: new Date(2021, 5, 14),
  },
  {
    id: 'e2',
    title: 'Car Payment',
    amount: 300.0,
    date: new Date(2021, 8, 5),
  },
  {
    id: 'e3',
    title: 'Insurance',
    amount: 200.0,
    date: new Date(2022, 9, 5),
  },
  {
    id: 'e4',
    title: 'Groceries',
    amount: 200.0,
    date: new Date(2019, 9, 5),
  },
];

function App() {
  // new expense data is passed up to the App component
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
