import { useState } from "react";
let count=0;
let i;
function Button(){
    const [value, setValue]= useState(0);
    const [value1,setValue1]=useState("hello world");
    const [valu2 ,setValue2]=useState(2);
    return(

        <>
        <h3>{value1}</h3>
        <h2>Value-{value}</h2>
        <h2>value-{valu2}</h2>
        <button onClick={()=>{
            let arr=[];
             count++;
             setValue(count);
             setValue1("My name is shruti");
            for(i=1;i<=10;i++)
            {
                arr[i]=i*valu2;
            }
            setValue2(arr);
        }
       

        }>
            click me
        </button>
       
        </>
       
    );
}
export default Button;