import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExpenseItem from "./expenseitem";
import ExpenseForm from "./expenseform";
import ExpenseList from "./expenselist";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses((prev) => [...prev, newExpense]);
  };

  return (
    <div
      className="App"
      style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}
    >
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList />
    </div>
  );
}

export default App;
