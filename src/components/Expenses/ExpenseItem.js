import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);  // Use array destructuring
  // props.title only set on first evaluation, then tracked by React
  console.log('ExpenseItem evaluted by React');
  // title is props.title, call setTitle to update the title

  // useState is a React hook, important to include in this function.
  // Shouldn't be called in nested functions
  // useState returns an array with two elements always:
  // - current state value
  // - function for updating value

  const clickHandler = (props) => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
