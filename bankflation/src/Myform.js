import React , {useState} from "react";

const TransactionForm = ({ onAddTransaction }) => {
    const [Addform, setAddform] = useState({
       date : "",
       description : "", 
       amount : ""
    })

    const handlechange = (event)=>{
      const{name, value} = event.target
      setAddform({
        ...Addform,
        [name]: value
      })
    }
    
    const handleSubmit = (event)=>{
        event.preventDefault();
       const newformdate = {
        ...Addform,
        amount : parseFloat(Addform.amount)
       }
      
       onAddTransaction(newformdate);
       setAddform({
          date : '' ,
          description : '' ,
          amount : ''
       })


    }
   
    
    return (
        <form onSubmit={handleSubmit}>

          <label>
            Date:
            <input type="date" name="date" value={Addform.date} onChange= {handlechange}/>
          </label>
            
          <label>
            Description:
            <input type="text" name="description" value={Addform.description} onChange={handlechange} />
          </label>
          <label>
            Amount:
            <input type="number" name="amount" value={Addform.amount} onChange={handlechange} />
          </label>
          <button type="submit">Add Transaction</button>
        </form>
      );
    };
    export default TransactionForm;