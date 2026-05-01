import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";
import { useState, useEffect } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div>
      <h1>Finance Tracker 💰</h1>
      <IncomeForm onAddIncome={addTransaction} />

      <IncomeList transactions={transactions} />
    </div>
  );
}

export default App;
