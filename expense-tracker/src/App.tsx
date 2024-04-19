import "./App.css";
import Button from "./components/Button";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";
import Form from "./components/expense-tracker/components/ExpenseForm";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import { useState } from "react";

export const categories = ["Groceries", "Utilities", "Entertainment"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div>
        <h1>Expense Tracker</h1>
        <div className="mb-5">
          <ExpenseForm></ExpenseForm>
        </div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          ></ExpenseFilter>
        </div>
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </>
  );
}

export default App;
