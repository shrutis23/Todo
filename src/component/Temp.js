import Card from './Card'
function Temp(){
    const arr=[
        {
            name:'shruti',
            age:21
        },
        {
            name:'sonali',
            age:21
        }
    ]
    return(
        <div>
            {arr.map((value,index)=>(
                <Card temp={value}/>
            ))}
        </div>
    );
}
export default Temp;
