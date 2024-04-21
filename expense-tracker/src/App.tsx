import "./App.css";
import Button from "./components/Button";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";
import Form from "./components/expense-tracker/components/ExpenseForm";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import { useState } from "react";
import categories from "./components/expense-tracker/categories";



function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Rent", amount: 830, category: "Utilities" },
    { id: 2, description: "Movies", amount: 18, category: "Entertainment" },
    { id: 3, description: "Netflix", amount: 9, category: "Entertainment" },
    { id: 4, description: "Milk", amount: 3, category: "Groceries" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div>
        <h1>Expense Tracker</h1>
        <div className="mb-5">
          <ExpenseForm onSubmit={expense => setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])}></ExpenseForm>
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
