import { useEffect, useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  // GET transactions
  useEffect(() => {
    fetch("https://finance-tracker-week-12.onrender.com/api/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(err => console.log(err));
  }, []);

  // ADD transaction
  const addTransaction = () => {
    fetch("https://finance-tracker-week-12.onrender.com/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        amount: Number(amount)
      })
    })
      .then(res => res.json())
      .then(newItem => {
        setTransactions([...transactions, newItem]);
        setTitle("");
        setAmount("");
      });
  };

  // ✅ DELETE transaction
  const deleteTransaction = (id) => {
    fetch(`https://finance-tracker-week-12.onrender.com/api/transactions/${id}`, {
      method: "DELETE"
    }).then(() => {
      setTransactions(transactions.filter((t) => t.id !== id));
    });
  };

  // ✅ BALANCE calculation
  const balance = transactions.reduce((total, t) => total + t.amount, 0);

  return (
    <div>
      <h1>Finance Tracker 💰</h1>

      {/* INPUT FORM */}
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addTransaction}>
        Add Transaction
      </button>

      {/* ✅ BALANCE DISPLAY */}
      <h2>Balance: {balance}</h2>

      {/* DISPLAY */}
      <h2>Transactions</h2>

      {transactions.length === 0 ? (
        <p>No transactions yet</p>
      ) : (
        <ul>
          {transactions.map((t) => (
            <li key={t.id}>
              {t.title} - {t.amount}

              {/* ✅ DELETE BUTTON */}
              <button onClick={() => deleteTransaction(t.id)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;