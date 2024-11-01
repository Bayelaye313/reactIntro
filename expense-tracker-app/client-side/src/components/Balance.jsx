import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((t) => t.amount);
  const totalAmounts = amounts
    .reduce((acc, curr) => (acc += curr), 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${totalAmounts}</h1>
    </>
  );
};

export default Balance;
