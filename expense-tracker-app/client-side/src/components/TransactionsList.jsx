import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Transaction from "./Transaction";

const TransactionsList = () => {
  const { transactions, deleteTransact } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transact) => (
          <Transaction
            key={transact.id}
            removeTransact={deleteTransact}
            transaction={transact}
          />
        ))}
      </ul>
    </>
  );
};

export default TransactionsList;
