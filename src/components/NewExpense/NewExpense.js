import React, { useState } from "react"; // Optional, not required in latest React
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showNewExpense, setShowNewExpense] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    switchNewExpenseHandler();
  };

  const switchNewExpenseHandler = () => {
    setShowNewExpense(!showNewExpense);
  };

  if (showNewExpense) {
    return (
      <div className="new-expense">
        <div className="new-expense__actions centred">
          <button type="button" onClick={switchNewExpenseHandler}>
            Add New Expense
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onCancelNewExpense={switchNewExpenseHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
