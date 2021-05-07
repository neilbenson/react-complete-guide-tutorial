import ExpenseItem from "./ExpenseItem";
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

  return <div className="expenses">{expensesMap}</div>;
};

export default Expenses;
