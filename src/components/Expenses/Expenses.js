import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, updateYear] = useState("2020");

  const yearToFilterHander = (enteredYear) => {
    updateYear(enteredYear);
    console.log(year);
  };

  const expensesMap = props.expenses.map((expense) => {
    return (
      <ExpenseItem
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      ></ExpenseItem>
    );
  });

  return (
    <div>
      <ExpensesFilter onFilterByYear={yearToFilterHander} selectedYear={year} />
      <Card className="expenses">{expensesMap}</Card>
    </div>
  );
};

export default Expenses;
