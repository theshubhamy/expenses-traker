import React, { useState } from "react";
import NewExpenses from "../components/newExpenses/NewExpenses";
import ExpenseFilter from "../components/expenses/ExpenseFilter";
import "./Expenses.css";
import ExpenseList from "../components/expenses/ExpenseList";
import ExpenseChart from "../components/expenses/ExpenseChart";
const Expenses = () => {
  //const currentYear = new Date().getFullYear();
  const [filteredYear, setFilteredYear] = useState("2022");
  const initialExpense = [
    {
      id: "id-1",
      title: "Toilet Paper",
      amount: 98.12,
      date: new Date(2023, 2, 24),
    },
    {
      id: "id-2",
      title: "News Paper",
      amount: 98.12,
      date: new Date(2022, 1, 20),
    },
    {
      id: "id-3",
      title: "car Insurance",
      amount: 980.12,
      date: new Date(2021, 1, 18),
    },
    {
      id: "id-4",
      title: "New Laptop",
      amount: 988.12,
      date: new Date(2020, 1, 16),
    },
    {
      id: "id-5",
      title: "New IPhone",
      amount: 798.12,
      date: new Date(2020, 1, 14),
    },
  ];
  const [expenses, setExpenses] = useState(initialExpense);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <NewExpenses onAddExpense={addExpenseHandler} />

      <div className="expense">
        <ExpenseFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filterExpenses} />

        <ExpenseList item={filterExpenses} />
      </div>
    </>
  );
};

export default Expenses;
