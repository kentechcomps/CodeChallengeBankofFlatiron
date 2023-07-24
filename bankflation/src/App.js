import logo from './logo.svg';
import './App.css';
import React ,{useState ,useEffect} from 'react';
import TransactionForm from "./Myform.js"
import Mytable from "./Transactiontable.js"
import Transaction from './Transaction';
import Transactionsdata from "./transactiondata.json"




function App() {

 //state to manage terms
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

 
  console.log(Transactionsdata);
  
  useEffect(()=>{
    setTransactions(Transactionsdata.transactions)
  }, [])

  // Function to add a new transaction to the list
  // const handleAddTransaction = (newTransaction) => {
  //   setTransactions([...Transactionsdata, newTransaction]);
  // };
  
   // Function to handle the search input change
   const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

   // Filter transactions based on the search term
  //  const filteredTransactions = transactions.filter((transaction) =>
  //  transaction.description.toLowerCase().includes(searchTerm.toLowerCase()));

   
    


  return (
    <div className="App">
      <h1>Transaction Tracker</h1>
    
      <Transaction transaction={transactions} />
      <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search by description" />
      {/* <TransactionForm  transactions={filteredTransactions} /> */}
  
    </div>
  );
}

export default App;

// onAddTransaction={handleAddTransaction}