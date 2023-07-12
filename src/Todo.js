import { useState } from "react";
function Todo() {
    const [value1, setValue2] = useState('');
    const [arr, setValue3] = useState([]);

    const handleinputchange = (e) => {
        setValue2(e.target.value);
    }
    const handleonclick = () => {

        const temp = [...arr, value1];
        setValue3(temp);
        console.log(temp);
        setValue2(" ");


    }
    const deletei = (index) => {
        const temp2 = [...arr];
        temp2.splice(index, 1);
        setValue3(temp2);
    }
    return (
        <div className="container">
            <h1>To do list</h1>
            <div className="temp">
                <input className="form-control" type="text" onChange={handleinputchange} />
                <button varient="outlined" type="submit" className="btn btn-primary" onClick={handleonclick} >submit</button>
            </div>
            <ul className="uli">
                {arr.map((val, index) => (
                    <li class="li1">{val}
 <button type="submit" class="btn btn-primary btn-sm" onClick={() => deletei(index)}>delete</button>
    </li>
                ))}
            </ul>

        </div>
    )

}
export default Todo


