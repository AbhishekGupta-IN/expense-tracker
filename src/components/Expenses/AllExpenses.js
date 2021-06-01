import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./AllExpenses.css";
import { useState } from "react";

const AllExpenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onYearChange={yearChangeHandler}
      />

      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default AllExpenses;
