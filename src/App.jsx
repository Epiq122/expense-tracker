import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Rent',
      amount: 1000.0,
      date: new Date(2022, 5, 14),
    },
    {
      id: 'e2',
      title: 'Car Payment',
      amount: 300.0,
      date: new Date(2022, 8, 5),
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
      date: new Date(2022, 9, 5),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
