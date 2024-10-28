import React from "react";

const Transaction = ({ transaction, removeTransact }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      {transaction.text}{" "}
      <span>
        {" "}
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => removeTransact(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
