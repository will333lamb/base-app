import React, {useState} from "react";

import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div> // Here, the first line checks if isEditing is false then display the button and if it is true then display the content.
    ); // I need the onCancel to point at the stopEditingHandler function that exists inside of the NewExpense component to work.
       // I then need to put the onClick to point at props.onCancel in the button in the ExpenseForm component.
};

export default NewExpense;