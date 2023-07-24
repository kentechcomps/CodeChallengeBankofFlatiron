import React , {useState} from "react";

const TransactionForm = ({ onAddTransaction }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Create a new transaction object
      const newTransaction = {
        description,
        amount: parseFloat(amount),
      };
  
    
      onAddTransaction(newTransaction);
  
      // Clear the form fields
      setDescription('');
      setAmount('');
    };
    return (
        <form onSubmit={handleSubmit}>
          <label>
            Description:
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <label>
            Amount:
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </label>
          <button type="submit">Add Transaction</button>
        </form>
      );
    };
    export default TransactionForm;