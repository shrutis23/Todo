import G from './G'
function Game1(){
    const arr=[
        {
            Question:"choose red",
            option1:"red",
            option2:"yellow",
            answer:"red"

        },
        {
            Question:"choose yellow",
            option1:"red",
            option2:"yellow",
            answer:"red"
        }
    ]
    return(
        <div className='container'>
            <h2>QUIZ</h2>
            {arr.map((value,index)=>(
                <G temp={value} i={index}/>
            ))}<br/>
            <button type="submit" className='btn btn-primary'>Submit</button>
        </div>
    );
}
export default Game1;