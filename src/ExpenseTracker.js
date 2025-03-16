import React, { useState } from 'react';
import './ExpenseTracker.css';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (description.trim() === '' || amount === '') return;

    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount)
    };

    setExpenses([...expenses, newExpense]);
    setDescription('');
    setAmount('');
  };

  const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="expense-tracker">
      <h2>Expense Tracker</h2>
      <form onSubmit={handleAddExpense}>
        <div className="form-control">
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount:</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>

      <ul className="expense-list">
        {expenses.map(expense => (
          <li key={expense.id} className="expense-item">
            <span>{expense.description}</span>
            <span>₹{expense.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <h3>Total: ₹{totalExpense.toFixed(2)}</h3>
    </div>
  );
}

export default ExpenseTracker;
