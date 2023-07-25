import logo from './logo.svg';
import './App.css';
import React ,{useState ,useEffect} from 'react';
import TransactionForm from "./Myform.js"
import Mytable from "./Transactiontable.js"
import Transaction from './Transaction';

function App() {

 //state to manage terms
  const [Transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');



  useEffect(()=>{
   fetch("https://ken-sxhw.onrender.com/transactions")
   .then ((resp) => resp.json())
   .then ((data)=>{
    
    setTransactions(data)
    
  })
   }, [])
  //Function to add a new transaction to the list
  const handleAddTransaction = (newformdate) => {
    setTransactions([...Transactions, newformdate]);
  };
  
   // Function to handle the search input change
   const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  // Filter transactions based on the search term
   const filteredTransactions = Transactions.filter((transaction) =>
   transaction.description.toLowerCase().includes(searchTerm.toLowerCase()));
   useEffect(()=>{
      setTransactions(filteredTransactions)
   }, [Transaction])

  return (
    <div className="App">
      <h1>Transaction Tracker</h1>
         <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search by description" /> 
      <TransactionForm 
      onAddTransaction={handleAddTransaction}
       />
       <Transaction transaction={filteredTransactions} /> 
      {/* transactions={filteredTransactions} */}
      
    </div>
  );
}

export default App;

// onAddTransaction={handleAddTransaction}