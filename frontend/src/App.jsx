import { useEffect, useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const API_URL = "https://finance-tracker-week-12.onrender.com/api/transactions";

  // GET transactions
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(err => console.log(err));
  }, []);

  // ADD transaction
  const addTransaction = () => {
    if (!title || !amount) return;

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
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

  // DELETE transaction
  const deleteTransaction = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    }).then(() => {
      setTransactions(transactions.filter((t) => t.id !== id));
    });
  };

  // BALANCE
  const balance = transactions.reduce((total, t) => total + t.amount, 0);

  return (
    <div style={{ padding: "20px" }}>
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

      {/* BALANCE */}
      <h2>Balance: {balance}</h2>

      {/* TRANSACTIONS */}
      <h2>Transactions</h2>

      {transactions.length === 0 ? (
        <p>No transactions yet</p>
      ) : (
        <ul>
          {transactions.map((t) => (
            <li key={t.id}>
              {t.title} - {t.amount}
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