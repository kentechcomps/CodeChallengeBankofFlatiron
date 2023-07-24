import Mytable from "./Transactiontable"

export default function Transaction({transaction}){
    
    return(
        <div>
        
        <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        
          {transaction.map((item) => (
            <Mytable key={item.id}
                        
            date ={item.date}
            category ={item.category}
            description= {item.description}
            amount = {item.amount}
            
            />
            
          ))}
        </tbody>
      </table>
  


        </div>
       
    )
}