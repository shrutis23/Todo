import { useState } from "react";
import React from "react";
import './style1.css';
let j;
function Input(){
    const [value1,setValue2]=useState();
    const [value2,setValue1]=useState(false);
    const [value3,setvalue3]=useState([]);
    const handleinputchange=(e)=>{
        setValue2(e.target.value);
        setValue1(false);
    }
    const handleonclick=()=>{
        setValue1(true);
        table();
    }
    const table=()=>{
        let arr=[];
        let i;
        for(i=1;i<=10;i++)
            {
                arr[i]=`${i}*${value1}=${value1} `;
            }
        setvalue3(arr);
        
    }
    return(
        <div>
            
            <input type="text" placeholder="Enter name" onChange={handleinputchange}/>
            <button type="submit" onClick={handleonclick}>submit</button>
            <h3>{value2 && value1}</h3>
            <h2>value-{value3}</h2>
            <table class="table">
               {value3.map((val, index) => (
                 <tr>
                    <td>{val}</td>
                 </tr>
               ))}
            </table>
        </div>

    )
}
export default Input