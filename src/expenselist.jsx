// src/expenselist.jsx
import React, { useEffect, useState } from "react";
import ExpenseItem from "./expenseitem";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Fetch expenses from the backend (json-server)
    fetch("http://localhost:3001/expenses")
      .then((res) => res.json())
      .then((data) => setExpenses(data));
  }, []);

  return (
    <div>
      <h2>All Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))
      )}
    </div>
  );
};

export default ExpenseList;
