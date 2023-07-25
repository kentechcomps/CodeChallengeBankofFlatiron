import React from 'react';

const Mytable = ({date, description, amount, category})=>{
  console.log(date)
   return(
   
        <tr>
          <td>{date}</td>
          <td>{description}</td>
          <td>{amount}</td>
          <td>{category}</td>
        </tr>

   ) 
}
export default Mytable;