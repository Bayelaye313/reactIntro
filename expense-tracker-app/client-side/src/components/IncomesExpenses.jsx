import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const IncomesExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((tr) => tr.amount);
  const incomes = amounts.filter((t) => t > 0);
  const totalIncomes = incomes
    .reduce((acc, curr) => (acc += curr), 0)
    .toFixed(2);

  const expenses = amounts.filter((t) => t < 0);
  const totalExpenses =
    expenses.reduce((acc, curr) => (acc += curr), 0) * -(1).toFixed(2);

  console.log("AMOUNTS", amounts);

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${totalIncomes}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${totalExpenses}</p>
        </div>
      </div>
    </>
  );
};

export default IncomesExpenses;
