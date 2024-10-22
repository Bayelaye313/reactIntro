import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Transaction from "./Transaction";

const TransactionsList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transact) => (
          <Transaction transaction={transact} />
        ))}
      </ul>
    </>
  );
};

export default TransactionsList;
