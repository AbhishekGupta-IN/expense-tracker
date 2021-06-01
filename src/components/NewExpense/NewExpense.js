import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const saveExpenseHandler = (inputExpenseDate) => {
    const expenseData = {
      ...inputExpenseDate,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsSelected(false);
  };

  const showForm = (event) => {
    setIsSelected(true);
  };

  const noForm = (event) => {
    setIsSelected(false);
  };

  return (
    <div className="new-expense">
      {!isSelected && <button onClick={showForm}>Add New Expense</button>}
      {isSelected && (
        <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={noForm} />
      )}
    </div>
  );
};

export default NewExpense;
