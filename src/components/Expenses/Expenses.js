import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const expensesMap = props.expenses.map((expense) => {
    return (
      <ExpenseItem
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      ></ExpenseItem>
    );
  });

  return <Card className="expenses">{expensesMap}</Card>;
};

export default Expenses;
