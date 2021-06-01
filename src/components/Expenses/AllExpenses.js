import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./AllExpenses.css";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";

const AllExpenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onYearChange={yearChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default AllExpenses;
