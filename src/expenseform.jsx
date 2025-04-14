// src/expenseform.jsx
import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/expenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newExpense) => {
        onAddExpense(newExpense);
        // Reset the form
        setFormData({
          title: "",
          amount: "",
          date: "",
          category: "",
        });
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
