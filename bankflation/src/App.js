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
   fetch("http://localhost:5001/transactions")
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
  //  const filteredTransactions = transactions.filter((transaction) =>
  //  transaction.description.toLowerCase().includes(searchTerm.toLowerCase()));

   
    


  return (
    <div className="App">
      <h1>Transaction Tracker</h1>
        {/* <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search by description" /> */}
      <TransactionForm 
      onAddTransaction={handleAddTransaction}
       />
      { <Transaction transaction={Transactions} /> }
      {/* transactions={filteredTransactions} */}
      
    </div>
  );
}

export default App;

// onAddTransaction={handleAddTransaction}