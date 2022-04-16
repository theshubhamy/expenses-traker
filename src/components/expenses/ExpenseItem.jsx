import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const expenseItem = (props) => {
  return (
    <>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-description">
          <h2 className="expense-description-title">{props.title}</h2>
          <div className="expense-amount">${props.amount}</div>
        </div>
      </div>
    </>
  );
};

export default expenseItem;
