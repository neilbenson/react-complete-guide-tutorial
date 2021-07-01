import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // props.title only set on first evaluation, then tracked by React

  // title is props.title, call setTitle to update the title

  // useState is a React hook, important to include in this function.
  // Shouldn't be called in nested functions
  // useState returns an array with two elements always:
  // - current state value
  // - function for updating value

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">£{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
