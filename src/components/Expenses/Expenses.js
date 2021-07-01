import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, updateYear] = useState("2020");

  const yearToFilterHander = (enteredYear) => {
    updateYear(enteredYear);
  };

  // const expensesMap = props.items.map((expense) => {
  //   return (
  //     <ExpenseItem
  //       key={expense.id}
  //       date={expense.date}
  //       title={expense.title}
  //       amount={expense.amount}
  //     ></ExpenseItem>
  //   );
  // });

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterByYear={yearToFilterHander}
          selectedYear={year}
        />
        {/* {expensesMap} */}
        {/* Line below can also pass index to array.map, but not recommended */}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
